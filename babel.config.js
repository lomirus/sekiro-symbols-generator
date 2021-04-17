module.exports = {
    "presets": [
        [
            "@babel/preset-typescript", {
                "isTSX": true,
                "allExtensions": true
            }
        ],
        [
            "@babel/preset-react", {
                "development": process.env.NODE_ENV === "development",
                "runtime": "automatic",
                "importSource": "@emotion/react"
            }
        ],
        "@emotion/babel-preset-css-prop"
    ],
    "plugins": ["@emotion"]
}