module.exports = {
  siteMetadata: {
    siteUrl: "https://mindvoltpsdmaster.gatsbyjs.io/",
    title: "mindvolt_psd",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options:{
        name: "Mindvolt Project",
        short_name: "mindvolt_psd",
        start_url: "/",
        icon: "./src/images/bank-icon.png",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff"
      }
    }
  ],
};
