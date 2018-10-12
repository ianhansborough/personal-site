module.exports = {
  siteMetadata: {
    title: "Ian Hansborough",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links", // not entirely sure what this does, should look up docs
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/templates/content`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [], // no plugins needed at this time
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "ianhansborough.com",
        short_name: "ianhansborough.com",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "minimal-ui",
        icon: "src/images/personal-site-logo-alt.svg", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
  ],
}
