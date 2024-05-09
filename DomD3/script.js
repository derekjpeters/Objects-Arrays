//Event listener for CTA button
document.getElementById("cta-button").addEventListener("click", function () {
	console.log("CTA Button Clicked");
	alert("Explore our amazing products below");
});

//Event listner for hovering over product cards
const productCards = document.querySelectorAll(".product-card");
productCards.forEach((card) => {
	card.addEventListener("mouseenter", function () {
		console.log(
			`${card.getAttribute("data-product")} card hoverd over successfully!`
		);
		this.style.boxShadow = "0 24px 56px rgba(0, 0, 0, 0.2)";
	});

	card.addEventListener("mouseleave", function () {
		console.log(`${card.getAttribute("data-product")} card hover ended!`);
		this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
	});

	//Event listener for the Buy Now button clicks
	const buyButton = card.querySelector(".buy-button");
	buyButton.addEventListener("click", function () {
		console.log(
			`${card.getAttribute(
				"data-product"
			)} - Buy Now Event Listner is Functional!`
		);
		alert(`You have chosen to purchase ${card.getAttribute("data-product")}`);
	});
	//Additional Interaction: Change the background color using a KeyPress

	document.addEventListener("keydown", function (event) {
		if (event.key === "w") {
			document.body.style.backgroundColor = "#475387"; //dark blue
			console.log("Background color changed");
		} else if (event.key === "g") {
			document.body.style.backgroundColor = "#5AE31B";
		} else if (event.key === "r") {
			document.body.style.backgroundColor = "#ff0000";
		}
	});

	//reset
	document.addEventListener("dblclick", function () {
		document.body.style.backgroundColor = "";
		console.log("Background Color Reset");
	});

	document
		.getElementById("subscribe-button")
		.addEventListener("click", function (event) {
			//Prevent the form from refreshing once submitted
			event.preventDefault();
			const emailInput = document.getElementById("email").value;
			console.log(`Subscribed Button Clicked', ${emailInput}`);
			if (emailInput) {
				alert(`You're now subscribed with the email, ${emailInput}`);
			} else {
				alert("Please enter a valid email address");
			}
			console.log(emailInput);
		});

	//Event Propagation Demo
	const outer = document.getElementById("outer");
	const middle = document.getElementById("middle");
	const inner = document.getElementById("inner");

	//capturing phase
	outer.addEventListener(
		"click",
		function (event) {
			console.log(
				"Outer Box - Capturing",
				`Target: ${event.target.id}`,
				`Current Target: ${event.currentTarget.id}`
			);
		},
		true
	); //true will enable the capturing phase

	middle.addEventListener(
		"click",
		function (event) {
			console.log(
				"Middle Box - Capturing",
				`Target: ${event.target.id} `,
				`Current Target: ${event.currentTarget.id}`
			);
		},
		true
	);

	inner.addEventListener(
		"click",
		function (event) {
			console.log(
				"Inner Box - Capturing",
				`Target: ${event.target.id} `,
				`Current Target: ${event.currentTarget.id}`
			);
		},
		true
	);

	//Bubbling Phase
	//Events are handled in order: Inner ->  Middle - Outer

	outer.addEventListener("click", function (event) {
		console.log(
			"Outer Box - Bubbling",
			`Target: ${event.target.id}`,
			`Current Target: ${event.currentTarget.id}`
		);
	});

	middle.addEventListener("click", function (event) {
		console.log(
			"Middle Box - Bubbling",
			`Target: ${event.target.id}`,
			`Current Target: ${event.currentTarget.id}`
		);
	});

	inner.addEventListener("click", function (event) {
		console.log(
			"Inner Box - Bubbling",
			`Target: ${event.target.id}`,
			`Current Target: ${event.currentTarget.id}`
		);
	});

	document.getElementById;

	//Stopping Propagation
	// Clicking to stop propagation
	document.getElementById("stop-button").addEventListener("click", function () {
		inner.addEventListener("click", function (event) {
			event.stopPropagation(); //Prevents further propagation of the current event
			console.log(
				"InnerBox - Stopped Propagation",
				`Target: ${event.target.id}`,
				`Current Target: ${event.currentTarget.id}`
			);
		});
	});
});
