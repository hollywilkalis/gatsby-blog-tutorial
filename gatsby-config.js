module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "All About Me",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};
