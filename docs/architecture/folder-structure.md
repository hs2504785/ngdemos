# Folder Structure

Angular follows LIFT principal

https://angular.io/guide/styleguide#application-structure-and-ngmodules

- Locate, Identify, Flat, Try to be DRY (but not on the expense of readability)

## Core Module

File thttps://angular.io/guide/styleguide#application-structure-and-ngmodulesat need to be loaded at once, and basically works as singleton

The module contains root-scoped services, static components like the navbar and footer, interceptors, guard, constants, enums, utils, and universal models. To prevent re-importing the module elsewhere, we should add a module-import-guard in it’s

```
|-- core
       |-- [+] authentication
       |-- [+] footer
       |-- [+] guards
       |-- [+] http
       |-- [+] interceptors
       |-- [+] mocks
       |-- [+] services
       |-- [+] header
       |-- core.module.ts
       |-- ensureModuleLoadedOnceGuard.ts
```

The Shared Module

```
|-- shared
     |-- [+] components
     |-- [+] directives
     |-- [+] pipes
     |-- [+] models
```

## Config

```
|-- configs
     |-- app-settings.config.ts
     |-- dt-norwegian.config.ts
```

## The Feature Modules

```
|-- modules
    |-- feature-1
        |-- [+] components
        |-- [+] services
        |-- [+] directives
        |-- [+] pipes
        |-- [+] models
    |-- feature-2
        |-- [+] components
        |-- [+] services
        |-- [+] directives
        |-- [+] pipes
        |-- [+] models
```

## Assets

```
▽ assets
      ▽ i18n
          lang-a.json
          lang-b.json
      ▽ images
            image-a.svg
            image-b.svg
      ▽ static
            structure-a.json
            structure-b.json
      ▽ icons
            custom-icon-a.svg
            custom-icon-b.svg
```

## Resources

https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7
