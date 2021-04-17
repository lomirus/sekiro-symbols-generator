module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/no-var-requires": 0,
        "react/jsx-uses-react": "off", // new JSX transform
        "react/react-in-jsx-scope": "off", // new JSX transform
        // "@typescript-eslint/explicit-module-boundary-types": "off"
    },
    "settings": {
        "react": {
            "version": "detect",
        }
    }
};
