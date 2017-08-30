$(function() {
	const submitIcon = $(".searchbox-icon");
	const inputBox = $(".searchbox-input");
	const searchBox = $(".searchbox");
	const submitRemove=$(".remove-icon");
	const clickToggle=$(".navbar-toggle");
	const collapse=$(".color-collapse");
	let isOpen = false;
	let isToggle=false;
    $(".remove").click(function() {
    	    $(".searchinput-an").val('');
		    $(".searchinput-an").focus();
		
	});
    // thanh search
	submitIcon.click(function() {
		if (!isOpen) {
			searchBox.addClass("searchbox-open");
			inputBox.removeClass("an_the");
			inputBox.addClass("hien_the");
			inputBox.focus();
			isOpen = true;
		}
		
	});
    
    submitRemove.click(function() {
		if (isOpen==true) {
			searchBox.removeClass("searchbox-open");
			inputBox.addClass("an_the");
			inputBox.removeClass("hien_the");
			inputBox.val('');
			isOpen = false;
		}
	});
	// end thanh search
	clickToggle.click(function(){
		if (!isToggle) {
			clickToggle.addClass('active');
			collapse.addClass('active');
			isToggle = true;
	    }
	    else
	    {
	    	clickToggle.removeClass('active');
	    	collapse.removeClass('active');
	    	isToggle = false;
	    }

	});

});


/* tạo thanh x trên toggle cho data-taget=".navbar-collapse" */

/* end tạo thanh x trên toggle */

