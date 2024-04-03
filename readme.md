# Overview

This guide will show you how to compile your JavaScript application code that uses ES2015+ syntax into code that works in current browsers. That will involve both transforming new syntax and polyfilling missing features.

You can follow the step-by-step instructions outlined in the following sections.


## Step 1

Running these commands to install the packages:

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

- `@babel/core`       : The @babel/core package is a fundamental component of the Babel JavaScript compiler
- `@babel/cli`        : The @babel/cli package is a command-line interface (CLI) tool provided by Babel, which allows developers to use Babel from the terminal or command prompt
- `@babel/preset-env` : The @babel/preset-env package is a preset provided by Babel that allows developers to use the latest JavaScript syntax and features without worrying about compatibility issues with specific browsers or environments


## Step 2

Create a babel config named `babel.config.json` in the root.

```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```

- `presets` : A pre-defined set of Babel plugins and configurations. Presets make it easier to configure Babel by bundling together commonly used plugins and settings for specific use cases.
- We can use multiple preset in single config.
- You can check `@babel/preset-env` options [here](https://babeljs.io/docs/babel-preset-env)


## Step 3

Add the code under following snippet to the `scripts` section of `package.json`. 

```
build: "./node_modules/.bin/babel src --out-dir lib"
```


## Step 4

Create `src` folder under `root` and add following ES6 arrow function code. 

```
const fun = () => {
    console.log('hello world')
}
```


## Step 5

Run `npm run buid` in command promp. After running this command compile all your code from the `src` directory to `lib`
