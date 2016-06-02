# Yogo Frozen Fullstack

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
- `npm start` to start the webpack development server
- Open your favourite browser and navigate to `localhost:8080`!

You can have a little peek behind the scenes by opening up the dev tools, with <kbd>Ctrl</kbd>+<kbd>H</kbd>!

For a more optimized-for-production build of the javascript, run `npm run build`. Put the resulting `bundle.js` into any folder with a html file pointing to it.

## Testing

To run the tests, simply run `npm test`.

## Wishlist

- Voting for your favourite flavours and topics!
- Contests
- Real-time chat with the personnel!

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[Horizon]: http://horizon.io/ "The realtime JavaScript backend"
[React]: https://facebook.github.io/react/ "A Javacript library for building UI"
[Redux]: http://redux.js.org/ "A predictable state container for JavaScript apps."
