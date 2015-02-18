$(document).ready(function() {
    $('.add-btn').click(function (e) {
    	e.preventDefault()
        var item = $('#listInput')
        $('.list-items').append($("<li>"+item.val()+"</li>").addClass("box"));
        $("#listInput").click(function() {
    	    this.value = '';
});
    });
    $('.list-items').on('click', 'li', function() {
    	$(this).wrap("<strike>");
		$(this).fadeOut("slow");
    });
});