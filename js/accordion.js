$(document).ready(function(){
	$(".accordion h1").click(function(){
		var id = this.id;
		$(".accordion-content").each(function(){
			$(this).slideUp();
		});
		$(this).next().toggle();
	});
});