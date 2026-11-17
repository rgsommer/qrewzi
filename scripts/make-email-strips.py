#!/usr/bin/env python3
"""
The screenshot strips in Qrewzi's outreach emails (public/email/strip-*.png).

Three small screenshots, tilted a little and overlapping, as one picture
(owner, 2026-11-14: "2-3 screenshots in the email, rotated a bit … small
screenshots so they don't take over the screen — even if too small to read,
they look attractive"). The tilt is drawn into the picture rather than left to
CSS, which Outlook and most mail apps ignore, and the background is
transparent, so it sits on any email, light or dark. Drawn at twice the size
it is shown (the email shows it 440 wide) so it is sharp on a phone.

Which strip goes with which email is backend/services/outreach/rules.js
EMAIL_STRIPS. Run from qrewzi-web:  python3 scripts/make-email-strips.py
"""
from PIL import Image, ImageDraw, ImageFilter, ImageFont
import math, os, random, sys

HERE = os.path.dirname(os.path.abspath(__file__))
PUB = os.path.join(HERE, "..", "public")
SRC = {
    "escape": "spotlight/escape-rooms.webp",
    "connect4": "spotlight/connect-four.webp",
    "imagineit": "spotlight/imagineit.webp",
    "buddies": "spotlight/study-buddies.webp",
    "trivia": "spotlight/trivia-rounds.webp",
    "debate": "spotlight/debate-match.webp",
    "join": "email/any-device.png",
}
# left, middle (the email's own subject, a little larger), right
STRIPS = {
    "games": ("connect4", "escape", "imagineit"),
    "study": ("connect4", "buddies", "trivia"),
    "devices": ("connect4", "join", "imagineit"),
    "escape": ("debate", "escape", "connect4"),
    "imagineit": ("buddies", "imagineit", "escape"),
    "kahoot": ("trivia", "connect4", "debate"),
    "work": ("debate", "trivia", "escape"),
}
SCALE = 2
W, H = 440 * SCALE, 168 * SCALE  # the width it is shown at (×2); the height follows
SIDE_H, MID_H = 112 * SCALE, 132 * SCALE
FRAME, RADIUS = 5 * SCALE, 9 * SCALE
TILTS = (-7, 3, 6)


def card(name, height):
    im = Image.open(os.path.join(PUB, SRC[name])).convert("RGB")
    w = round(im.width * height / im.height)
    if w > height * 1.45:  # keep a wide shot from crowding the others
        w = round(height * 1.45)
        im = im.resize((round(im.width * height / im.height), height), Image.LANCZOS)
        left = (im.width - w) // 2
        im = im.crop((left, 0, left + w, height))
    else:
        im = im.resize((w, height), Image.LANCZOS)
    cw, ch = w + 2 * FRAME, height + 2 * FRAME
    out = Image.new("RGBA", (cw, ch), (0, 0, 0, 0))
    mask = Image.new("L", (cw, ch), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, cw - 1, ch - 1), RADIUS, fill=255)
    out.paste(Image.new("RGBA", (cw, ch), (255, 255, 255, 255)), (0, 0), mask)
    inner = Image.new("L", (w, height), 0)
    ImageDraw.Draw(inner).rounded_rectangle((0, 0, w - 1, height - 1), RADIUS - FRAME // 2, fill=255)
    out.paste(im, (FRAME, FRAME), inner)
    return out


def shadow(img, blur=9 * SCALE, alpha=70):
    a = img.split()[3].point(lambda v: alpha if v else 0)
    sh = Image.new("RGBA", img.size, (15, 23, 42, 0))
    sh.putalpha(a)
    pad = blur * 2
    big = Image.new("RGBA", (img.width + 2 * pad, img.height + 2 * pad), (0, 0, 0, 0))
    big.paste(sh, (pad, pad))
    return big.filter(ImageFilter.GaussianBlur(blur)), pad


def strip(names):
    cards = [card(n, MID_H if i == 1 else SIDE_H).rotate(TILTS[i], resample=Image.BICUBIC, expand=True) for i, n in enumerate(names)]
    # Laid out on a roomy canvas — the middle centred, the sides tucked under
    # its edges — then cropped to what was drawn and fitted to the strip's width.
    big = Image.new("RGBA", (W * 2, H * 2), (0, 0, 0, 0))
    mid = cards[1]
    mx, my = (big.width - mid.width) // 2, (big.height - mid.height) // 2
    pos = {
        0: (mx - cards[0].width + round(cards[0].width * 0.24), (big.height - cards[0].height) // 2 + 4 * SCALE),
        1: (mx, my),
        2: (mx + mid.width - round(cards[2].width * 0.24), (big.height - cards[2].height) // 2 + 6 * SCALE),
    }
    for i in (0, 2, 1):  # the middle on top
        sh, pad = shadow(cards[i])
        x, y = pos[i]
        big.alpha_composite(sh, (x - pad + 3 * SCALE, y - pad + 5 * SCALE))
        big.alpha_composite(cards[i], (x, y))
    l, t, r, b = big.getbbox()
    margin = 4 * SCALE
    big = big.crop((l - margin, t - margin, r + margin, b + margin))
    if big.width > W:
        big = big.resize((W, round(big.height * W / big.width)), Image.LANCZOS)
    return big


# The four things Qrewzi is for, bursting off the screenshots (owner, 2026-11-17: "maybe we need
# the words … Study, Quizzing, Testing kind of exploding from those screenshots"). One word each,
# the same form — verbs read at a glance at email size. The workplace strip keeps its own.
# "Play to learn", not "Play" (owner: "play should not make it seem it is just games, but learning games").
WORDS = (("Play\nto learn", "#FF4D5B", "#FFFFFF"), ("Study", "#FFD147", "#0B1F3A"), ("Quiz", "#0B1F3A", "#FFD147"), ("Test", "#4F8DF7", "#FFFFFF"))
WORDS_ON = {k for k in STRIPS if k != "work"}
FONT = os.path.expanduser("~/Library/Fonts/Unbounded.ttf")


def burst(word, fill, ink, size=19 * SCALE, tilt=0, seed=0):
    """A comic starburst with the word in it: jagged points round an oval sized to the word.
    A second line ("Play\nto learn") is set smaller under the first, so the big word keeps its punch."""
    def face(px, weight):
        f = ImageFont.truetype(FONT, px)
        try:
            f.set_variation_by_name(weight)
        except Exception:
            pass
        return f
    lines = word.split("\n")
    fonts = [face(size, "Black")] + [face(round(size * 0.58), "ExtraBold") for _ in lines[1:]]
    boxes = [f.getbbox(t) for f, t in zip(fonts, lines)]
    gap = 2 * SCALE
    tw = max(r - l for l, _, r, _ in boxes)
    th = sum(b - t for _, t, _, b in boxes) + gap * (len(lines) - 1)
    # Two lines make a block whose corners an oval only reaches if it is roomier.
    extra = 1 if len(lines) == 1 else 1.3
    rx, ry = tw / 2 + 13 * SCALE * extra, th / 2 + 11 * SCALE * extra
    rnd = random.Random(seed)
    n = 16
    pts = []
    for k in range(n * 2):
        a = math.pi * k / n
        spike = k % 2 == 0
        f = (1.0 + rnd.uniform(0.04, 0.14)) if spike else 0.84
        pts.append((rx * f * math.cos(a), ry * f * math.sin(a)))
    pad = 10 * SCALE
    wpx, hpx = round(2 * rx * 1.25 + 2 * pad), round(2 * ry * 1.25 + 2 * pad)
    img = Image.new("RGBA", (wpx, hpx), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    cx, cy = wpx / 2, hpx / 2
    poly = [(cx + x, cy + y) for x, y in pts]
    d.polygon(poly, fill="#FFFFFF")  # the white rim, so it lifts off any screenshot
    inner = [(cx + x * 0.9, cy + y * 0.9) for x, y in pts]
    d.polygon(inner, fill=fill)
    y = cy - th / 2
    for f, text, (l, t, r, b) in zip(fonts, lines, boxes):
        d.text((cx - (r - l) / 2 - l, y - t), text, font=f, fill=ink)
        y += (b - t) + gap
    img = img.rotate(tilt, resample=Image.BICUBIC, expand=True)
    return img


def with_words(img, seed=7):
    """The strip with the four words bursting off its edges, on a canvas grown to hold them."""
    top, bottom, side = 22 * SCALE, 22 * SCALE, 30 * SCALE
    canvas = Image.new("RGBA", (img.width + 2 * side, img.height + top + bottom), (0, 0, 0, 0))
    canvas.alpha_composite(img, (side, top))
    W2, H2 = canvas.size
    # Off the edges of the stack, staggered rather than a frame, each tilted its own way.
    spots = [(0.1, 0.13, -12), (0.66, 0.07, 8), (0.3, 0.92, 6), (0.91, 0.72, -9)]
    placed = []
    for i, ((word, fill, ink), (fx, fy, tilt)) in enumerate(zip(WORDS, spots)):
        b = burst(word, fill, ink, tilt=tilt, seed=seed + i)
        x, y = round(fx * W2 - b.width / 2), round(fy * H2 - b.height / 2)
        placed.append((b, max(0, min(W2 - b.width, x)), max(0, min(H2 - b.height, y))))
    for b, x, y in placed:
        sh, pad = shadow(b, blur=4 * SCALE, alpha=70)
        sx, sy = x - pad + 2 * SCALE, y - pad + 3 * SCALE
        if sx >= 0 and sy >= 0:
            canvas.alpha_composite(sh, (sx, sy))
        canvas.alpha_composite(b, (x, y))
    l, t, r, bt = canvas.getbbox()
    canvas = canvas.crop((max(0, l - 2), max(0, t - 2), min(W2, r + 2), min(H2, bt + 2)))
    if canvas.width > W:
        canvas = canvas.resize((W, round(canvas.height * W / canvas.width)), Image.LANCZOS)
    return canvas


if __name__ == "__main__":
    # --preview DIR: write there instead of public/email (nothing the live emails use changes).
    dest = sys.argv[sys.argv.index("--preview") + 1] if "--preview" in sys.argv else os.path.join(PUB, "email")
    for key, names in STRIPS.items():
        img = strip(names)
        if key in WORDS_ON:
            img = with_words(img)
        out = os.path.join(dest, f"strip-{key}.png")
        q = img.quantize(colors=256, method=Image.Quantize.FASTOCTREE, dither=Image.Dither.NONE)
        # Reducing to 256 colours folds the empty background in with the faint
        # tail of the shadows, and it came out 3/255 opaque: a grey box round
        # the strip on a white email. A colour that faint is made clear.
        pal = q.getpalette(rawmode="RGBA")
        for k in range(3, len(pal), 4):
            if pal[k] < 12:
                pal[k] = 0
        q.putpalette(pal, rawmode="RGBA")
        q.save(out, optimize=True)
        print(f"{out}  {img.width}x{img.height}  {os.path.getsize(out) // 1024} KB")
