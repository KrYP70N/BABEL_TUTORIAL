# BABEL

Babel is able to configure like other tools: ESLint, Prettier. There are two types of bable config type.

**babel.config.json** : For the `mono-repo` projects and compile `node_modules`

**.babelrc.json**     : For only apply to single parts of your projects.



## babel.config.json

Create a file called `babel.config.json` with the following content at the root of your project (where the `package.json` is).
You can check babel config documentation in [here](https://babeljs.io/docs/config-files#project-wide-configuration)

```
{
  "presets": [...],
  "plugins": [...]
}
```


## .babelrc.json

Create a file called `.babelrc.json` with the following content in your project.

```
{
  "presets": [...],
  "plugins": [...]
}
```

You can check babelrc config documentation in [here](https://babeljs.io/docs/config-files#file-relative-configuration)



## package.json

Alternatively, you can choose to specify your .babelrc.json config from within package.json using the babel key like so:

```
{
  "name": "my-package",
  "version": "1.0.0",
  "babel": {
    "presets": [ ... ],
    "plugins": [ ... ],
  }
}
```






