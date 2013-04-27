//requires the nodejs request module
var request = require('request');

//constructor that sets various items
function Pull(type, query, clientid) {
  if(type === 'search') {
    this.url = 'https://api.imgur.com/3/gallery/search?q='+query;
  } else {
    this.url = 'https://api.imgur.com/3/gallery/'+query+'/random/0.json';
  }
  this.options = {
    headers: {
      'Authorization': 'Client-ID ' + clientid
    }
  };
}

Pull.prototype.exec = function(cb) {
  request.get(this.url, this.options, cb);
}

function img(type, query, clientid, cb) {
  var pull = new Pull(type, query, clientid);
  if(cb) {
    pull.exec(cb);
  }
  return pull;
}

//returned as a result of a require call
module.exports = {
  img: img
};