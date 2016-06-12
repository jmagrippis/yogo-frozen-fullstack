# Yogo Frozen Fullstack

[![Build Status](https://travis-ci.org/jmagrippis/yogo-frozen-fullstack.svg?branch=master)](https://travis-ci.org/jmagrippis/yogo-frozen-fullstack)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](./LICENSE)


A modest web app for the Yogo Frozen website, aimed to be served via [Horizon].

## Technology used

Notable libraries leveraged:

- [React] paired with [Redux]
- [RethinkDB] paired with [Horizon]

## Usage

### Requirements

To try out, develop and debug this project, your environment is going to need 3 things:

- [Git] for version control
- [Docker] to run the [RethinkDB] container; alternatively, you could run your own service and adapt your `config.toml` accordingly.
- [Node] for most everything else

### Steps

1. `git clone` the repository
2. `cd` into its root directory and `npm install`
3. Create a copy of `.hz/example.config.toml` named `.hz/config.toml`, putting in your specific configuration values.
4. `npm run serve:rethinkdb`
5. `npm run serve:hz-dev`
6. `npm run serve:dev`
7. Open your favourite browser and navigate to `localhost:8080`!

You can have a little peek behind the scenes by opening up the dev tools, with <kbd>Ctrl</kbd>+<kbd>H</kbd>!

For a more optimized-for-production build of the javascript, run `npm run build`. Put the resulting bundles into any folder with an html file pointing to them. Or just visit `localhost:8181` to check out the 'production-like' experience.

You can also check-out the database web interface with `npm run db:admin`. Just make sure you have set your `$BROWSER` environment variable! There is some sample data in `src/data` you might want to add to your database.

## Testing

To run the tests, simply run `npm test`.

## Wishlist

- Voting for your favourite flavours and toppings!
- Contests, limited-time give-aways!
- Real-time chat with the personnel!

## Disclaimer

This is open-sourced in hopes of inspiring somebody, somewhere... even nudging that talented developer to open up an issue and contribute. Fork away and try newer and better things, and let me know in what cool ways you put [Horizon] to use! Learning and improving is a two-way street for every project.

It is *not* intended to be hastily re-skinned and sold as a full-blown marketing site. But, hey, if you want to be that guy, there is only your conscience stopping you.

[Horizon]: http://horizon.io/ "The realtime JavaScript backend"
[RethinkDB]: https://www.rethinkdb.com/ "The open-source database for the realtime web"
[React]: https://facebook.github.io/react/ "A Javacript library for building UI"
[Redux]: http://redux.js.org/ "A predictable state container for JavaScript apps."
[Git]: https://git-scm.com/ "free and open source distributed version control system"
[Docker]: https://www.docker.com/ "An open platform for distributed applications for developers and sysadmins"
[Node]: https://nodejs.org/en/ "JavaScript runtime that took over the world"
