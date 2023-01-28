# Configure angular.json

1. Package Manager

```json
  "cli": {
    "packageManager": "yarn" // npm default
  },
```

2. cache ng13+ default

```json
  "cli": {
    "cache": {
      "enabled": true,
      "path": ".cache",
      "environment": "all"
    }
  },
```

3. schametics

You can do it for all projects, and for individual project

```json
{
  "schematics": {
    "@schematics/angular:component": {
      "style": "scss",
      "changeDetection": "OnPush"
    }
  },
  "defaultProject": "ngdemos"
}

// for nx update nx.jsons
```

4. styles

```json
// include css in main css bundle (styles.78437542374.css)
"styles": [
  "scss/main.scss",
  "assets/tiktik.css"
],

// include css as seperate file
// compiled and included in html as seperate css file
"styles": [
  "scss/main.scss",
  {
    "input": "assets/tiktik.css",
    "bundleName": "titik-compiled.css"
  }
],

// result with order
<link rel="stylesheet" href="styles.119847649c2fb205.css" media="print" onload="this.media='all'"><noscript>
  <link rel="stylesheet" href="styles.119847649c2fb205.css">
</noscript>
<link rel="stylesheet" href="titik-compiled.css.94b671eb2c944fd1.css" media="print" onload="this.media='all'">


// in case you want to include lazily
// compiled in assets folder, but not included in index.html
"styles": [
  "scss/main.scss",
  {
    "input": "assets/tiktik.css",
    "bundleName": "titik-compiled",
    "inject": false
  }
],
```

5. scripts

```json
// now it will be compiled and included in index.html as scripts.xxxx.js

"scripts": [
  "src/bootstrap.js"
]

  <script src="scripts.a9fe3a81bc230771.js" defer></script>
  <script src="main.e6ffbc8f0133c280.js" type="module"></script>
</body>

// compile as seperate file and  not include in index.html (lazy)
"scripts": [
  {
    "input": "src/bootstrap.js",
    "bundleName": "bootstrap.min",
    "inject": false
  }
]
```

6. Configuration

lets add new configuration for staging environment ( env b/w dev and prod)

- create file environment.staging.ts inside environments/ folder
- duplicate production configuration and configure it for staging

```json
"staging": {
  "fileReplacements": [
    {
      "replace": "src/environments/environment.ts",
      "with": "src/environments/environment.staging.ts"
    }
  ],
```

- run the staging build

```
ng build --configuration staging
```

7. Assests

By default angular does this

```json
// everything inside assets copy/paste inside dist/assets
// what if you want some of its file to be placed outside assets
"assets": [
  "src/favicon.ico",
  "src/assets"
],
```

```json
"assets": [
  "src/favicon.ico",
  "src/assets",
  "src/manifest.webmanifest",
  {
    "glob": "**/*",
    "input": "src/app/modules/lazy-components/modules/lazydemo/weather-forecast/assets/",
    "output": "assets/"
  },
  {
    "glob": "*.md",
    "input": "src/assets",
    "output": "/docs" // created parallel to dist/assets
  }
],
```

8. Budget - respect default budget

```javascript
"budgets": [
  {
    "type": "initial",
    "maximumWarning": "500kb",
    "maximumError": "1mb"
  },
  {
    "type": "anyComponentStyle",
    "maximumWarning": "2kb",
    "maximumError": "4kb"
  }
],

// set budget on specific bundle
"budgets": [
  {
    "type": "initial",
    "maximumWarning": "500kb",
    "maximumError": "1mb"
  },
  {
    "type": "anyComponentStyle",
    "maximumWarning": "2kb",
    "maximumError": "4kb"
  },
  {
    "type": "bundle",
    "maximumWarning": "100kb",
    "name": "awesome-search.bundle" // copied existing bundle from ng build
  }
],
```
