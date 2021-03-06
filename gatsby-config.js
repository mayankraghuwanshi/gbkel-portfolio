const siteMetadata = require("./config/metadata")

module.exports = {
  siteMetadata,
  assetPrefix: siteMetadata.cdnUrl,
  plugins: [
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Guilherme Bromonschenkel",
        short_name: "GuilhermeBkel",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#0598e3",
        display: "standalone",
        icon: "src/assets/icon.png"
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-140879800-1",
      }
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Lato",
            variants: ["300", "500", "700"]
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        }
      }
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: process.env.NODE_ENV !== "production"
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ["**/styles.js"]
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "backgrounds",
        path: `${__dirname}/src/assets/backgrounds`,
      },
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://8ad70df8377544539ca24878cecf0173@sentry.io/1869423",
        environment: process.env.NODE_ENV,
        enabled: true
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify-cache",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-netlify"
  ]
}
