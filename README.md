# IMGURK
A nodejs module that provides simple access to the [imgur api](http://api.imgur.com/).

## Installation
npm install imgurk

## Usage
You'll need an imgur Client-ID to use this. Even anonymously.
Sign up for API access at [imgur api registration](http://api.imgur.com/#register).

    var imgurk = require('imgurk');
    imgurk.img($type, $query, $client-id);

    $type:  search

    $query: search term

### Example
Get the first image from the pickles query search:

    imgurk.img('search', 'pickles', 'my-client-id');

## Tests
The tests will fail unless you insert your clientId in config.js