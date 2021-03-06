# Electron Boilerplate

### Electron, Angular and Material Design w/ DiskDB, tooling includes SASS, Gulp and Livereload

Quick way to get an Angular Electron app up and running complete with tooling, also includes a DiskDbService with basic CRUD operations for the database collections.

![electron boilerplate screenshot](app/assets/images/screenshot.png)


### Dependencies

Install global dependencies

```
npm i -g gulp bower
```

Install all local dependencies.

```
  npm i
```

### Serve

Serve the project using gulp.

```
  gulp serve
```

### TODOs

  1. Remove web dependency for material design icon font by using bower
  2. Add [gulp-electron](https://www.npmjs.com/package/gulp-electron) for app packaging
  3. Use [gulp-inject](https://www.npmjs.com/package/gulp-inject) for javascript & css dependencies
