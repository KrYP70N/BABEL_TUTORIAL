# Compiler Assumptions

You can specify an assumptions option in your configuration to tell Babel which assumptions it can make about your code, to better optimize the compilation result.

You can reference in [here](https://babeljs.io/docs/assumptions)

## Sample Assumptions

```
{
  "presets": [
    ["@babel/preset-env", { "exclude": ["transform-typeof-symbol"] }]
  ],
  "assumptions": {
    "arrayLikeIsIterable": true,
    "constantReexports": true,
    "ignoreFunctionLength": true,
    "ignoreToPrimitiveHint": true,
    "mutableTemplateObject": true,
    "noClassCalls": true,
    "noDocumentAll": true,
    "noObjectSuper": true,
    "noUndeclaredVariablesCheck": true,
    "objectRestNoSymbols": true,
    "privateFieldsAsProperties": true,
    "pureGetters": true,
    "setClassMethods": true,
    "setComputedProperties": true,
    "setPublicClassFields": true,
    "setSpreadProperties": true,
    "skipForOfIteratorClosing": true,
    "superIsCallableConstructor": true
  }
}
```

