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
    ],
  },
};
