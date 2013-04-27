//requires the nodejs request module
var request = require('request');

//constructor that sets various items
function imgurk(type, query, clientid) {
  if(type === 'search') {
    this.url = 'https://api.imgur.com/3/gallery/search?q='+query;
  } else {
    this.url = 'https://api.imgur.com/3/gallery/'+query+'/random/0.json'; //tba...
  }
  this.options = {
    headers: {
      'Authorization': 'Client-ID ' + clientid
    }
  };
}

imgurk.prototype.exec = function(cb) {
  request(this.url, this.options, function(error, response, body) {
    if(!error && response.statusCode == 200)
      var link = JSON.parse(body).data[0].link;
      cb(link);
  });
}

function img(type, query, clientid, cb) {
  var imgur = new imgurk(type, query, clientid);
  if(cb) {
    imgur.exec(cb);
  }
  return imgur;
}

//returned as a result of a require call
module.exports = {
  img: img
};