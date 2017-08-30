/* tạo thanh x trên toggle cho data-taget=".navbar-collapse" */

$(document).ready(function () {
			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });
		});
/* end tạo thanh x trên toggle */
/* dropdown menu */

$(document).ready(function() {
    $('.navbar a.dropdown-toggle').on('click', function(e) {
        var $el = $(this);
        $(this).parent("li").toggleClass('open');

        $('.nav li.open').not($(this).parents("li")).removeClass("open");

        return false;
    });
});
/*end dropdown menu */
// phần slide hover

// end phần slide hover
// side bar 

// end side bar 
