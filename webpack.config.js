module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.module.scss$/,
    use: [
      {loader: "style-loader"},  // to inject the result into the DOM as a style block
      {loader: "css-modules-typescript-loader"},  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
      {loader: "css-loader", options: {modules: true}},  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
      {loader: "sass-loader"},  // to convert SASS to CSS
    ]
  },);
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader')
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx", ".scss");
  return config;
};
