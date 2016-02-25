#!/usr/bin/env node

var Promise = require('bluebird');
var xyz = Promise.promisifyAll(require('XYZ'));
var reference = require('./reference');

exports.getReference = function() {
  return reference;
};

exports.output = function(url) {
  return new Promise(
    function (resolve, reject) {
      resolve()
    })
    .then(function() {
      return xyz(url)
        .then(function (data) {
          return {
            'url': url,
            'plugin': reference.plugin,
            'sensors': data.ruleGroups.SPEED
          };
        }
      );
    });
};
