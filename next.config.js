module.exports = {
  images: {
    // domains: ["platform-lookaside.fbsbx.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "image-cdn-ak.spotifycdn.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "daily-mix.scdn.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "newjams-images.scdn.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "seed-mix-image.spotifycdn.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "charts-images.scdn.co",
        pathname: "**",
      },
    ],
  },
};
