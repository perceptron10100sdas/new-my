/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
      },
      eslint: {
        ignoreDuringBuilds: true,
    },
    images:
    {
        domains:["e0.pxfuel.com","pbs.twimg.com","mariosfakiolas.com","miro.medium.com","adminlte.io","media.licdn.com","im.rediff.com","static.vecteezy.com", "simbyone.com"],
    },
}

module.exports = nextConfig
