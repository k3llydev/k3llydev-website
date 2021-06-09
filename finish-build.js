const fs = require('fs');

// ADD CNAME FILE FOR DOMAIN
fs.writeFile('./build/default/CNAME', 'k3lly.dev', function(err) {
    if(err) {
        return console.log(err);
    }
});