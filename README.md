# Yogo Frozen Fullstack

[![Build Status](https://travis-ci.org/jmagrippis/yogo-frozen-fullstack.svg?branch=master)](https://travis-ci.org/jmagrippis/yogo-frozen-fullstack)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](./LICENSE)


A modest frontend for the Yogo Frozen website, aimed to be served via [Horizon].

## Technology used

Notable libraries leveraged:

- [React]
- [Redux]

## Disclaimer

This is open-sourced in hopes of inspiring somebody, somewhere... even nudging that talented developer to open up an issue and contribute. Fork away and try newer and better things, and don't be afraid to shoot a PR! Learning and improving is a two-way street for every project.

It is *not* intended to be hastily re-skinned and sold as a full-blown marketing site. But, hey, if you want to be that guy, there is only your conscience stopping you.

## Usage

- `git clone` the repository
- `cd` into its root directory and `npm install`
- Create a copy of `.hz/config.toml.example` named `.hz/config.toml`, putting in your specific configuration values.
- `npm run serve:rethinkdb`
- `npm run serve:hz-dev`
- `npm run serve:dev`
- Open your favourite browser and navigate to `localhost:8080`!

You can have a little peek behind the scenes by opening up the dev tools, with <kbd>Ctrl</kbd>+<kbd>H</kbd>!

For a more optimized-for-production build of the javascript, run `npm run build`. Put the resulting bundles into any folder with an html file pointing to them. Or just visit `localhost:8181` to check out the 'production-like' experience.

## Testing

To run the tests, simply run `npm test`.

## Wishlist

- Voting for your favourite flavours and topics!
- Contests
- Real-time chat with the personnel!

[Horizon]: http://horizon.io/ "The realtime JavaScript backend"
[React]: https://facebook.github.io/react/ "A Javacript library for building UI"
[Redux]: http://redux.js.org/ "A predictable state container for JavaScript apps."
