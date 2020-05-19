/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Arthaus Visual Communications Ltd",
    titleTemplate: "Arthaus Visual Communications Ltd",
    description:
      "We're a multimedia design agency that specializes in brand development and creative communications. We work with some of the world's leading companies, where our unique blend of creativity and technical capability enables us to generate solutions that engage, inspire and help drive business growth.",
    url: "https://www.arthaus.co.uk", // No trailing slash allowed!
    image: "/images/favicon.icon", // Path to your image you placed in the 'static' folder
    twitterUsername: "ArtHaus",
    facebookUsername: "ArtHaus.design",
    instagramUsername: "arthaus_design",
    linkedInUsername: "arthaus-visual-communications-",
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: "Lato",
    //         //subsets: [`latin`]
    //         variants: ["300", "400", "700", "900"],
    //       },
    //     ],
    //   },
    // },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true,
      },
    },
    { resolve: "gatsby-plugin-react-helmet" },
    { resolve: "gatsby-transformer-sharp" },
    { resolve: "gatsby-plugin-sharp" },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `./src/data/` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `./src/images/` },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: { name: `blogs`, path: `./assets/blog/` },
    // },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Lato-Reg,Lato-Light,Lato-Black"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-minify`,
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    { resolve: `gatsby-plugin-smoothscroll` },
    { resolve: `gatsby-plugin-netlify-cms` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
