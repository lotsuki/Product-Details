
module.exports = {
  "extends": ["airbnb", "prettier", "prettier/react"],
  "plugins": ["react", "prettier"],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mongo": true,
    "jest": true,
    "commonjs": true,
    "prototypejs": true
  },
  "rules": {
    "max-len": ["error", 80],
    "prettier/prettier": "error",
    "no-console": "off",
    "prefer-destructuring": ["error", {"object": false, "array": false}],
    "import/extensions": [".js", ".jsx"],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.spec.js"]}],
    "no-undef": "off",
    "no-underscore-dangle": "off",
    //"no-unused-vars": ["error", {"vars": "local", "args": "all", "varsIgnorePattern": "^_"}],
    "react/prop-types": 0,
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx"]
      }
    ]
  }
};