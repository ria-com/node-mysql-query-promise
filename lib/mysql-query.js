"use strict";

(function () {
    var query = require('mysql-query-js'),
        Q = require('q');
    module.exports = function Query(/* args */) {
        var args = [].slice.call(arguments),
            deferred = Q.defer();
        args.push(function (err, rows, fields) {
            if (err) return deferred.reject(err);
            return deferred.resolve(rows);
        });
        query.apply(null, args);
        return deferred.promise;
    }
}());