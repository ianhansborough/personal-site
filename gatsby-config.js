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
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/personal-site-logo-alt.svg", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
  ],
}
