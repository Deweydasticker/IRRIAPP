/**
 * @author Dewey
 */
$(function() { // execute on document ready
	$('#refreshButton').click( function() { // add the click event handler to button
		updateWord();
	});
       
	function updateWord(){
		$.getJSON( 'http://195.211.73.185/~irriapp/index.php/Words', function(result) {
		// do something with the result
		$('#wordText').html(result.word);
		$('#definitionText').html(result.description);
		$('#exampleText').html(result.example);
		});
	}
	updateWord();      
});
