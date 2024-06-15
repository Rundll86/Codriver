const path = require("path");
module.exports = {
    entry: "./script.js",
    output: {
        filename: "script.js",
        path: path.join(__dirname, "script"),
        clean: true
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};