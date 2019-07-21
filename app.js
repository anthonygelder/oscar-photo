$(document).on('ready', function () {
	$("#mySlider").slick({
		prevArrow: '<img id="prev" class="a-left control-c prev slick-prev" src="images/arrow2.svg">',
		nextArrow: '<img id="next" class="a-right control-c next slick-next" src="images/arrow.svg" >',
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		mobileFirst: true,
		autoplay: true
	});

	$("h1").on("click", function() {
		$("h1, i, a").toggleClass("white");
		$("body").toggleClass("black");
		$(".content").toggleClass("whiteBorder");
		$(".prev").toggleClass("darkArrow");
		$(".next").toggleClass("darkArrow");
		$("h2").toggleClass("white");
	});

});

// Toggles showing the dropdown on click
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
	if (!e.target.matches('.dropbtn')) {
		var myDropdown = document.getElementById("myDropdown");
		if (myDropdown.classList.contains('show')) {
			myDropdown.classList.remove('show');
		}
	}
}