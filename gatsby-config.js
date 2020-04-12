/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby React front end",
    titleTemplate: "%s · The Real Hero",
    description: "Thao Truong developed, working at Arthaus Communication Ltd",
    url: "https://www.thaotruong.uk", // No trailing slash allowed!
    image: "/images/favicon.icon", // Path to your image you placed in the 'static' folder
    twitterUsername: "@ttngocthao",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Open Sans",
            variants: ["400", "700"],
          },
          {
            family: "Raleway",
            //subsets: [`latin`]
            variants: ["400", "700"],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true,
      },
    },
    { resolve: "gatsby-plugin-react-helmet" },
    { resolve: "gatsby-transformer-sharp" },
    { resolve: "gatsby-plugin-sharp" },
    { resolve: `gatsby-source-filesystem`, options: { path: `./src/data/` } },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `./src/images` },
    },
  ],
}
