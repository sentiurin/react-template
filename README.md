#### Template Structure

* **public** - directory for asset files like icons, images, fonts and etc.
* **src** - directory with source code of app
  * **components** - directory for app components (reusable components)
  * **containers** - directory for HOCs (High Order Components)
  * **pages** - directory for app pages (not a reusable components, root components - pages of app)
  * **redux** - directory for all redux logic such as: actions, reducers and etc.
  * **utils** - directory for util functional (support functions for app)
  **App.jsx** - main app component
  **index.js** - entry point in app
* **webpack** - webpack config directory (build config for app... dependence on running environment)

#### Remove Redux from template

Run npm script: `npm run remove-redux` and then, remove all imports of **redux** directory in app files

#### Fix style of code

Run npm script: `npm run prettier:fix` for format all files of app using .prettierrc rules

#### Documentation links

* [prettier](https://prettier.io)
* [redux](https://redux.js.org/introduction/getting-started)
* [redux-thunk](https://github.com/reduxjs/redux-thunk)
* [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
* [webpack](https://webpack.js.org/concepts/)