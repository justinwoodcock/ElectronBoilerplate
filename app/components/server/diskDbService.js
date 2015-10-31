'use strict';

var db = require('diskdb');
var collections = ['user', 'session'];
db = db.connect('./app/diskdb', collections);

function DiskDbService() {

  var self = this;

  this.find = function(collection, query) {
    return db[collection].find(query);
  };

  this.getCollection = function(collection, query) {
    return self.find(collection, query);
  };

  this.setCollection = function(collection, data, query) {
    db[collection].update(query, data, {multi: false, upsert: true});
    return self.find(collection);
  };

  this.removeCollection = function(collection, query, multi) {
    db[collection].remove(query, multi);
  };

};

module.exports = new DiskDbService;