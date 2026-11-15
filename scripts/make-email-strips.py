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
from PIL import Image, ImageDraw, ImageFilter
import os

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


if __name__ == "__main__":
    for key, names in STRIPS.items():
        img = strip(names)
        out = os.path.join(PUB, "email", f"strip-{key}.png")
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
