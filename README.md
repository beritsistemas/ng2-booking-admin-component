# Angular 2 APM component   [![MIT license](http://img.shields.io/badge/license-MIT-lightgrey.svg)](http://opensource.org/licenses/MIT)

It's a component inspired in the price calendar that uses AirBNB but it shows and updates the **A**vailability, **P**rice, **M**inimun nigths for booking systems.

It uses the "Redux" design pattern (for the calendar data and type of room data).

It's connect to database(MongoDb) and obtanis all data for a month for all types of rooms that the system has.

You can modify in one single day one value and after loosing the focus the component goes to the server and updates that single day info.

This project it's a proof of concept (for now on) of the Angular 2 + Redux design pattern + Angular 2 testing framework + Node Backend + 

It's a functional component but it needs improvements and move the hardcoded data to DB (types of room and default APM value)
, please contact me if you plan to use it, I can assits you to develop these TODOs


## Info

The front-end of this project was generated with [Angular CLI](https://github.com/angular/angular-cli).

This project uses the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**M**ongoose.js](http://www.mongoosejs.com) ([MongoDB](https://www.mongodb.com)): database
* [**E**xpress.js](http://expressjs.com): backend framework
* [**A**ngular 2](https://angular.io): frontend framework
* [**N**ode.js](https://nodejs.org): runtime environment
* [Angular CLI](https://cli.angular.io): project scaffolding
* [Bootstrap](http://www.getbootstrap.com): layout and styles
* [Font Awesome](http://fontawesome.io): icons

## Prerequisites
1. Install [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com)
2. Install Angular CLI: `npm i angular-cli -g`
3. From project root folder install all the dependencies: `npm i`

## Run
1. Command window 1: `mongod`: run MongoDB
2. Command window 2: `npm run be`: run Express backend server (with autoreload)
3. Command window 3: `npm start`: run Angular frontend (with autobuild and autoreload)
4. Browser will automatically open to: [localhost:4200](http://localhost:4200)

## Production
Run `npm run prod` to run frontend with a production ready bundle.

## Preview
![Preview](https://raw.githubusercontent.com/beritsistemas/ng2-booking-admin-component/master/demo.gif "Preview")

## Please open an issue if
* you have any suggestion or advice to improve this project.
* you noticed any problem or error.

## To do
* Tests

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Further help
To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Author
* [Leandro Merli](https://github.com/BeritSistemas) [Berit sistemas](https://beritsistemas.com)
