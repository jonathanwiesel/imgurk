require('mocha');
require('should');

describe('sanity check', function() {
  it('gets imgur', function() {
    request.get('https://api.imgur.com/3/gallery/random/random/', function(err, res) {
      if(err) throw err;
      done();
    });
  });
});

var Imgurk = require('../index.js');

describe('request tests', function() {
  var imgurk = new Imgurk();

  describe('gets a gallery', function() {
    it('gets random', function() {
      imgurk.img('hot', function(err, res) {
        if(err) throw err;
        done();
      });
    });
  });
});