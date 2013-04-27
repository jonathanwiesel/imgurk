require('mocha');
require('should');
var assert = require('assert');
var should = require('should');
var request = require('request');
var config = require('./config');

var options = {
  headers: {
    'Authorization': 'Client-ID ' + config.clientId
  }
};

//included to check if imgur is up and working
describe('sanity check', function() {
  it('gets random gallery data using requestjs', function(done) {
    request('https://api.imgur.com/3/gallery/random/random/0.json', options, function(err,res,body) {
      assert(!err);
      assert.equal(res.statusCode, 200);
      assert.equal(JSON.parse(body).success, true);
      done();
    });
  });
});

var imgurk = require('../index');

describe('imgurk tests', function() {

  describe('check random gallery', function() {
    it('gets first random gallery image link', function(done) {
      imgurk.img('gallery','random', config.clientId, function(link) {
        should.exist(link);
        done();
      });
    });
  });

  describe('check search query', function() {
    it('gets first query image link', function(done) {
      imgurk.img('search','kittens', config.clientId, function(link) {
        should.exist(link);
        done();
      });
    });
  });
});