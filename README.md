# Restaurant Suggester

Cogent Lab is always looking to try out new and interesting lunch from nearby restaurants.

This application's purpose is to assist them by suggesting a random restaurant within 1 km radius from their workplace.

## Technical Spec

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

Additionally the project uses:

- Redux for state management.
- Google maps
- Foursquare Places API

## Setup Guide

You will need to have NodeJS and Yarn installed.

Change the values of:

- *API_KEY* in `./constants/map.js`
- *CLIENT_ID* and *CLIENT_SECRET* in `./constants/foursquare.js`

### Install dependencies

`yarn`

### Run in development environment

`npm start`

The app will be served on PORT 4200 by default, you may change it in the .env file.

### Run tests

`npm test`

### Build

`npm build`