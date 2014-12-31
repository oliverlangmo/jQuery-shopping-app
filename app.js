$(document).ready(function() {
		$("#add-item").click(function(){
			$("ul").append("<li class='need'><button class='got'>Got it</button>" + $("input#input").val() + "</li>");

		})
		$("ul").on('click', '.got', function() {
			$(this).closest("li").toggleClass("in-cart");
			$(this).remove();
		})
});		


