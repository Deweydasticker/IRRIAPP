/**
 * @author Dewey
 */
   $(function() { // execute on document ready
       $('#refreshButton').click( function() { // add the click event handler to button
       	console.log("test");
          $.getJSON( 'http://195.211.73.185/~irriapp/index.php/Words', function(result) {
                // do something with the result
                console.log(result);
          });
       });
   });
