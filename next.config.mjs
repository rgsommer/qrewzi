/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // There is no beta any more: an account is made on the spot at
  // set.qrewzi.com/signup. Old /beta links (and their ?promo= codes) go there.
  async redirects() {
    return [{ source: "/beta", destination: "https://set.qrewzi.com/signup", permanent: false }];
  },
};

export default nextConfig;
