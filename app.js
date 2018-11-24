const express = require( 'express') ;
const app = express( ) ;


app.set('port', (process.env.PORT || 5000))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

//var wa = function() {

//  Scope.
//    var self = this;


    /*  ================================================================  */
    /*  Helper functions.                                                 */
    /*  ================================================================  */

    /**
     *  Set up server IP address and port # using env variables/defaults.
    
    self.setupVariables = function() {
    	self.app = express();
        //  Set the environment variables we need.
        self.ipaddress = process.env.IP;
        self.port      = process.env.PORT || 8081;

        if (typeof self.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No REMOTE SERVER IP, using 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        };
    };

    self.start = function() {
        //  Start the app on the specific interface (and port).
        self.app.listen(self.port, self.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                    	self.ipaddress, 
                    	self.port);
        });
        self.app.get( '/ping', ( request, response) => {
 						response.send( 'pong');
 					});
    };
};

var sb = new wa();
sb.setupVariables();
sb.start();

//app.listen( 8080, 'localhost') ; */
