module.exports = {
  extends: [
    "stylelint-config-recess-order",
    "stylelint-config-recommended-scss",
    "stylelint-config-prettier",
  ],
    "ignoreFiles": ["**/*.js"],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['include', 'mixin',"use","forward"] }],
  },
};
