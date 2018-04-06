# MetacriticRebuild

https://metacritic-rebuild.firebaseapp.com/

An attempt to rebuild the website metacritic.com using Angular and Typescript.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.


## Specs
* Metacritic is a website devoted to gathering and displaying ratings for Movies, Games, TV Shows and Music.
* Each entry will have at least a title, a creator, and a single metascore (1-100).
* To start with, all current entries will be displayed to the user on the home screen.
* User is given the option of filtering entries using the links on the top navbar.
* User is given the option to sign in via a google account using the "Sign in" button on the navbar.
* Once user is logged in, they may access the admin screen by clicking the 'Admin Services' link at the bottom of the page.
* Once signed in as an admin, the user will be given the option of adding an entry via the button on the top navbar, and will be presented with a form to fill out relevant information.
* When the form is submitted, the form will disappear, the entry will be added to the database and displayed on the page.
* The admin will be given the option of editing entries after they have been created.

## Future Plans
* Splash page with 'recommended' entries, i.e. highest scoring entries so far.
* Route guards
* Possible API calls for dynamically generating new entries.

## Contact

Contact Drew Tucker at dtuck43@gmail.com with any questions/comments/concerns.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
