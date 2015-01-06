$(document).ready(function() {
		$("#add-item").click(function(){
			if( $('input#input').val().trim().length === 0 ) {
				$('#error').show();
				$('input#input').val("");
		} else {
			$("ol").append("<li class='need'><input type=checkbox>" + $("input#input").val() + "</li>");
			$("input#input").val('');
			$('#error').hide();
        }
        $("#remove").click(function() {
	      $('#groceries').closest("li").remove();
	    })  
});
$("ol").on('click', '[type=checkbox]', function() {
			$(this).closest("li").toggleClass("in-cart");	
		})		
});

