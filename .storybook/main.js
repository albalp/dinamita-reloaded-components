module.exports = {
  "stories": [
    "../src/stories/**/*.stories.jsx",
    "../src/components/Form/**/*.stories.jsx",
    "../src/components/Calendar/**/*.stories.jsx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}