## mysql-query-promise ##
[mysql-query][1] wrapper for promises
## Installing ##
Add to you package.json file:

    "dependencies": {
       "mysql-query-promise": "git://github.com/ria-com/node-mysql-query-promise.git"
    }
Then run `npm install`...
## Usage example ##
Add to your `default.js` config file:

    database: {
        'master': {
            host: 'localhost',
            user: 'username',
            password: 'password',
            port: '3306',
            database: 'database',
            connectionLimit: 10
        },
        'slave': {
            host: 'localhost',
            user: 'username',
            password: 'password',
            port: '3306',
            database: 'database',
            connectionLimit: 10
        }
    }
Then include and use:

    var query = require('mysql-query-promise'),
        qs = 'SELECT * FROM foo WHERE bar=?';
        
    query(qs, ['baz'], 'master')
        .then(function(rows){
            /* Do what you need with query results here */
        }, function(err){
            /* Errors handler */
        });
    
  [1]: https://github.com/ria-com/node-mysql-query