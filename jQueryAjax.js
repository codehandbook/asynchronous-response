$(function(){
	console.log('jQuery loaded')
	$('#btnjQueryAjax').click(function(){
		$.ajax({
			url : 'http://jsonplaceholder.typicode.com/users',
			type: 'GET',
			success: function(response) {
				console.log('response is ', response)
				$('#divResult').html(JSON.stringify(response))
			},
			error : function(error) {
				console.log('error is ', error)
			}
		})
	})
})