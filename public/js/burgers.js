$(function() {
	$(".eaten").on("click", function() {
		var id = $(this).data("id");
		var newBurger = $(this).data("newBurger");

		var newBurgerState = {
			devoured: newBurger
		};

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newBurgerState
		}).then(function() {
			location.reload();
		});
	});



	$(".createForm").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {
			name: $("#burgerName").val().trim()
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(function() {
			location.reload();
		});
	});	
});
