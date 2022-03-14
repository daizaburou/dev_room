module.exports = {
  extends: [
    "stylelint-config-recess-order",
    "stylelint-config-recommended-scss",
    "stylelint-prettier/recommended"
  ],
    "ignoreFiles": ["**/*.js"],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['include', 'mixin',"use","forward"] }],
  },
};
