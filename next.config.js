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
        domains:["e0.pxfuel.com","pbs.twimg.com","mariosfakiolas.com","miro.medium.com","adminlte.io","media.licdn.com","im.rediff.com","static.vecteezy.com", "simbyone.com","www.malwarebytes.com","webimages.mongodb.com","github.blog"],
    },
}
transpilePackages: ['three'],
module.exports = nextConfig
