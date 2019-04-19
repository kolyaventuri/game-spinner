# Game Spinner
[![CircleCI](https://circleci.com/gh/kolyaventuri/game-spinner.svg?style=svg)](https://circleci.com/gh/kolyaventuri/game-spinner) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

## Overview
A silly little project that generates random game ideas for you.

## Installation
Clone down the repository and install dependencies with `npm install`

## Running Tests
Run tests with `npm test`. This will lint the code before running tests. If any style violations are found, the tests will not run and the process will exit with a non-0 status code. Testing uses the [Ava](https://github.com/avajs/ava) test runner.

## Running The App
Start the app with `npm start`. By default it will run in development, with hot-reloading using WebpackDevMiddleware. To run in production, set `NODE_ENV=production`. The app will run on port `3000` by default.

## Running The Linter
The linter can be run with `npm run lint`. We are using the [XO](https://github.com/xojs/xo) linter for code styling guidelines, and [Flow](https://flow.org) for static typing.

## Contributing
Feel free to pick up any issues and submit a PR for them. Please do not submit PRs that fail to address a specific issue. **Note:** When committing, the linter will run. Commits will be denied at the time of commit if there are any code style violations.
