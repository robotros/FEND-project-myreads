module.exports = {
    "env": {
        "browser": true
    },

    "extends": ["eslint:recommended", "plugin:react/recommended", "google"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": ["react"],
    "rules": {

    },
};
