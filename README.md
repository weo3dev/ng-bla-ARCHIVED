[![Build Status](https://api.travis-ci.org/metavurt/ng-bla.svg?branch=master)](https://travis-ci.org/metavurt/ng-bla)
[![Dependency Status](https://david-dm.org/metavurt/ng-bla.svg)](https://david-dm.org/metavurt/ng-bla)
[![devDependency Status](https://david-dm.org/metavurt/ng-bla/dev-status.svg)](https://david-dm.org/metavurt/ng-bla?type=dev&view=list)

- [Intro](#intro)
- [Requirements](#requirements)
- [Installing](#installing)
- [Running](#running)
- [Configuration](#configuration)
- [Running tests](#running-tests)
- [Goals](#goals)
- [Notes](#notes)
- [Todo](#todo)
- [License](#license)

### **PLEASE NOTE: This app is less than 30 days old, and is still in exploratory stages in some areas (best practices/implementation of sass, dynamic routing application, best layout/structure for data presentation of bowling league data). Master branch = only branch, at this time.

It's ugly right now, but it's up: [take a look](http://www.weo3.com/ng-bla)


# Intro

`ng-bla` is a casual bowling league app for league, team, and player tracking.

This app is the culmination of too many lost games over a few missed pins. And, to be honest, quite a lot of beer. Bowling app market is lacking in a easy to use, mobile friendly, accessible fun *league* app for casual league play.


# Requirements

Node >=v6.5.0 and npm >=3.10.3

npm-check-updates for optional below

# Installing

```bash
$ git clone --depth 1 https://github.com/metavurt/ng-bla.git [your-choice-name-goes-here]
$ cd [your-choice-name-goes-here]

# install dependencies
$ npm install


# optional, but suggested
# check how current dependencies and dev dependencies are, just in case
$ npm outdated
# based on feedback and personal knowledge, either update all or update singular modules
# if you have npm-check-updates installed, run it and see what it says as well
$ ncu
# if the feedback looks too unstable, then update with 
$ ncu -u
# afterward, re-run npm install and re-confirm with npm outdated
# disregard obvious misalignments (such as pinned modules based on necessary previous testing) unless large errors are discovered
# then please alert me at https://github.com/metavurt/ng-bla/issues


# Running

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

# Goals
- easy to use on mobile; responsive to larger screens
- league owners can admin all
- team leaders can invite/add/edit/delete/confirm team members
- team members can track personal goals
- bowling data tools available to manipulate granularly, spot weak points
- enable league communication for announcements
- RC by Q2 2017
- deliver working app to my lovely DiverseyRiverBowl friends and frenemies, for use and enjoyment, by Q3 2017

### Stack
- Angular 2 on up, using angular-seed which implemented angular-cli as a guide
- php RESTful API, using [Slim Framework](https://www.slimframework.com/)
- MySQL, because who doesn't love a good left join??
- combined (for now) use of [Zurb's Foundation 6](http://foundation.zurb.com/) and [Material Design 2 for Angular](https://github.com/angular/material2) for layout/styling
- git - to save our souls when we are so very human and press delete at the wrong time


# Notes
- this will evolve to exist as a **production-level** ready app. Testing, compliance, and best practices will be included
- will remain as a live example of different *evolving* areas of Angular - January 2017 should be fun!
- this app will remain in beta until at least end of Q1 2017


### Landing Page (home)
- list current standings based on last week's results
- list current week matchups with lane assignments
- list top *three* in categories from top ten page

### Teams Page
- Track player stats per week, per game
- Track team stats, progress
- Enable teams to update scores for current week, with confirm from opposing team captain or league owner  maybe:question:

### Players Page

- ~~Track player stats per week, per game~~ - this page more as a directory
- ~~use HighCharts or similar to graph stats~~ - this page more as a directory
- Responsive - *MD has yet to implement responsive as an parameter for grid-list*
- player profile can be clicked to go to their page (or team page :question: [undecided])
- per the first two above line items - sortable by player name alpha, team name alpha


# TODO
- make sure e2e testing working :100:
- integrate sample data with mockbackend for local testing
- implement travis CI :100:
- app-wide styling!
- tie in sub-pages (team page, profile page), to parent pages (teams, players)
- install HighCharts :question:
- sass

### Players page
- search capability
- alpha by name, or by team

### teams page
- link to single team page



# License

MIT