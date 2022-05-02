module.exports = {
  "stories": [
    "../src/stories/**/*.stories.jsx",
    "../src/components/dropdown/**/*stories.jsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook-addon-material-ui"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}