# Branches

The process of creating the navbar library will be reflected using different branches

## basic_v1

This branch contains an workspace and a navbar library created using angular cli.
  - ng new workspace --no-create-application
  - cd workspace
  - ng g library my-navbar

## basic_v2

This branch contains the working version of angular navbar library
  - if you do any changes, you will have to rebuild the library using: npm run build-navbar
  - a new bundle will be generated under dist\my-navbar
  - now you will have to pack it using: npm pack dist\my-navbar\
    - don't forget the '\' - slash at the end of the path
    - a tgz file will be generated in your current path
    - this file will be used when installing the application in your project
  - you can now use it in your application
    - it can be installed using: npm install [workspace_path]/softvisionartifacts-navbar-0.0.1.tgz










# Workspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
