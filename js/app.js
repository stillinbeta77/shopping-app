$(document).ready(function() {
	$(".add-btn").click(function (e) {
	    e.preventDefault()
	    var add = $('#listInput').val();
        $("ol.list-items").append('<li class="on">' + add + '</li>');

    });


	$(document).on('click', '.on', function () {
	$(".on").wrap("<strike>");
	$(".on").fadeOut("slow");
	});

});
