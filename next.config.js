const webpack = require("webpack");
const S3Plugin = require("webpack-s3-plugin");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

let STATIC = "/static";
if (process.env.NODE_ENV === "production") {
  // CDN FTW
  STATIC = "//d16anjvf8exjxs.cloudfront.net/drewandjen/static";
}

module.exports = {
  webpack: (config, { dev }) => {
    // eslint-disable-next-line
    config.plugins.push(
      new webpack.DefinePlugin({
        STATIC: JSON.stringify(STATIC),
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        __DEV__: process.env.NODE_ENV !== "production",
      }),
    );

    if (process.env.D_AWS_KEY_ID && process.env.D_AWS_SECRET_ID) {
      config.plugins.push(
        new S3Plugin({
          directory: "./static",
          basePath: "drewandjen",
          s3Options: {
            accessKeyId: process.env.D_AWS_KEY_ID,
            secretAccessKey: process.env.D_AWS_SECRET_ID,
            region: "us-east-1",
          },
          s3UploadOptions: {
            Bucket: "drewandjen",
            ACL: "public-read",
          },
        }),
      );
    }

    // this isn't great currently so lets not use it
    // if (process.env.NODE_ENV === "production") {
    //   config.plugins.push(new SWPrecacheWebpackPlugin({
    //     filename: "sw.js",
    //     staticFileGlobsIgnorePatterns: [/\.next\//, /\.png$/],
    //     staticFileGlobs: [
    //       "static/**/*.css", // Precache all static files by default
    //       "static/fonts/**/*" // precache all fonts
    //     ],
    //     forceDelete: true,
    //     runtimeCaching: [
    //       // Example with different handlers
    //       {
    //         handler: "fastest",
    //         urlPattern: /[.]css/
    //       },
    //       {
    //         handler: "networkFirst",
    //         urlPattern: /.*/ //cache all files
    //       }
    //     ]
    //   }));
    // }
    if (dev) return config;

    config.resolve.alias = {
      react: "preact-compat/dist/preact-compat",
      "react-dom": "preact-compat/dist/preact-compat",
    };

    // Disable uglify. This has been fixed in https://github.com/developit/preact-compat/issues/155.
    // Can be removed once there is a new preact-compat release.
    config.plugins = config.plugins.filter(plugin => {
      if (plugin.constructor.name === "UglifyJsPlugin") {
        return false;
      } else {
        return true;
      }
    });

    return config;
  },
};
