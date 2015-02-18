$(document).ready(function() {
    $('.add-btn').click(function (e) {
    	e.preventDefault()
        var item = $('#listInput')
        $('.list-items').append("<li>"+item.val()+"</li>");
        $('.list-items li').addClass("box");
    });
    $('.list-items').on('click', 'li', function() {
    	$(this).wrap("<strike>");
		$(this).fadeOut("slow");
    });
});