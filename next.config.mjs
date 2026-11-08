/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // There is no beta any more: an account is made on the spot at
  // set.qrewzi.com/signup. Old /beta links (and their ?promo= codes) go there.
  async redirects() {
    return [{ source: "/beta", destination: "https://set.qrewzi.com/signup", permanent: false }];
  },
  // The outreach emails' unsubscribe link reads www.qrewzi.com/unsubscribe;
  // the backend does it (backend routes/adminOutreach.js), both the page and
  // the one-click POST a mail app sends.
  async rewrites() {
    return [{ source: "/unsubscribe", destination: "https://api.curriculate.net/outreach/unsubscribe" }];
  },
};

export default nextConfig;
