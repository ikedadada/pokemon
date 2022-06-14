module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["next/core-web-vitals"],
  plugin:['testing-library'],
  overrides: [
    {
      files:['**/__tests__/**/*/[jt]s?(x)'],
      extends:['plugin:testing-library/react']
    }
  ]
}
