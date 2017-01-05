[![Build Status](https://api.travis-ci.org/metavurt/ng-bla.svg?branch=master)](https://travis-ci.org/metavurt/ng-bla)
[![Dependency Status](https://david-dm.org/metavurt/ng-bla.svg)](https://david-dm.org/metavurt/ng-bla)
[![devDependency Status](https://david-dm.org/metavurt/ng-bla/dev-status.svg)](https://david-dm.org/metavurt/ng-bla?type=dev&view=list)

# About

`ng-bla` is a casual bowling league app for league, team, and player tracking.

# Requirements

Node >=v6.5.0 and npm >=3.10.3

npm-check-updates for optional below

# Installing/Running: 

```bash
$ git clone --depth 1 https://github.com/metavurt/ng-bla.git [your choice name]
$ cd [your choice name]

# install dependencies
$ npm install


# optional, but suggested
$ ncu -u
# then re-run npm install and confirm with npm outdated
# disregard obvious misalignments unless errors are discovered
# then please alert me at https://github.com/metavurt/ng-bla/issues


# watch your files and use livereload by default
$ npm start
# api document for the app
# npm run build.docs


# to start deving with livereload site and coverage as well as continuous testing
$ npm run start.deving


# dev build
$ npm run build.dev
# prod build
$ npm run build.prod
```

Browser should open at http://localhost:5555


_Does not rely on any global dependencies._


# Configuration

Default app server configuration

```js
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

# Running tests

```bash
$ npm test

# code coverage (istanbul)
# auto-generated at the end of `npm test`
# view coverage report:
$ npm run serve.coverage

# e2e (aka. end-to-end, integration) - In three different shell windows
# Make sure you don't have a global instance of Protractor
# Make sure you do have Java in your PATH (required for webdriver)
```

# TODO
- make sure e2e testing working
- integrate sample data with mockbackend for local testing
- implement travis CI
- app-wide styling!
- tie in sub-pages (team page, profile page), to parent pages (teams, players)
- install HighCharts?
- sass

### Players page
- search capability
- alpha by name, or by team

### teams page
- link to single team page



# License

MIT