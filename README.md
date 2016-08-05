## mysql-query-promise ##
[mysql-query-js][1] wrapper for promises
## Installing ##
Add to you package.json file:
```javascript
    "dependencies": {
       "mysql-query-promise": "*"
    }
```

Then run `npm install`...
## Usage example ##
Add to your `default.js` config file:
```javascript
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
```
    
Then include and use:
```javascript
    var query = require('mysql-query-promise'),
        qs = 'SELECT * FROM foo WHERE bar=?';
        
    query(qs, ['baz'], 'master')
        .then(function(rows){
            /* Do what you need with query results here */
        }, function(err){
            /* Errors handler */
        });
```

  [1]: https://github.com/ria-com/node-mysql-query-js
