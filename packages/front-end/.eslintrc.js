// see package.json for required dev packaged in node
// eslint eslint-plugin-react eslint-plugin-jest
// TODO add
// https://www.npmjs.com/package/eslint-plugin-import
// https://www.npmjs.com/package/eslint-plugin-jsx-a11y
//  maybe https://www.npmjs.com/package/eslint-config-airbnb
// https://www.npmjs.com/package/eslint-plugin-html
// https://eslint.org/docs/developer-guide/shareable-configs


// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning(doesn’t affect exit code)
// "error" or 2 - turn the rule on as an error(exit code is 1 when triggered)

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
    node: true,
    mongo: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: [
    "react",
    "jest"
  ],
  globals: {
    window: true,
    document: true,
    localStorage: true,
    process: true
  },
  rules: {
    indent: [
      "error",
      2,
      {
        SwitchCase: 1
      }
    ],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-console": 1,
    "no-unused-vars": [
      1,
      {
        varsIgnorePattern: "res|next|^err",
        argsIgnorePattern: "state|action|ownProps|dispatch|req|res|next|err"
      }
    ],
    "react/jsx-max-props-per-line": [
      1,
      {
        maximum: 1,
        when: "always"
      }
    ],
    "react/jsx-first-prop-new-line": [1, "multiline-multiprop"],
    "react/jsx-space-before-closing": [1, "always"],
    "object-curly-spacing": [1, "always"],
    "comma-dangle": ["warn", "always"],
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          minProperties: 2
        }
      }
    ],
    allowAllPropertiesOnSameLine: true,
    "object-property-newline": 1,
    "object-curly-spacing": ["warn", "always"],
    "keyword-spacing": [
      1,
      {
        before: true,
        after: true
      }
    ],
    "react/jsx-tag-spacing": [
      1,
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
        beforeClosing: "never"
      }
    ],
    "react/prop-types": [1,],
    "space-before-blocks": [1, "always"],
    "space-infix-ops": [
      "warn",
      {
        int32Hint: true
      }
    ]
  }
};
