
 			$(document).ready(function() { 
 				
				/////////////////////////////////////////////////////////////
				/////////////////////////////////////////////////////////////

				var contentBox1 = document.getElementById("c2-content-1");
				var contentBox2 = document.getElementById("c2-content-2");
				var contentBox3 = document.getElementById("c2-content-3");
				var contentBox4 = document.getElementById("c2-content-4");
				var contentBox5 = document.getElementById("c2-content-5");

				function initNewsContentButtons() {

					var contentBtn1 = document.getElementById("contentBtn1");
					contentBtn1.addEventListener("click", function() {
						
						contentBox1.style.display = "block";
						contentBox2.style.display = "none";
						contentBox3.style.display = "none";
						contentBox4.style.display = "none";
						contentBox5.style.display = "none";

					})

					var contentBtn2 = document.getElementById("contentBtn2");
					contentBtn2.addEventListener("click", function() {
						
						contentBox1.style.display = "none";
						contentBox2.style.display = "block";
						contentBox3.style.display = "none";
						contentBox4.style.display = "none";
						contentBox5.style.display = "none";

					})

					var contentBtn3 = document.getElementById("contentBtn3");
					contentBtn3.addEventListener("click", function() {
						
						contentBox1.style.display = "none";
						contentBox2.style.display = "none";
						contentBox3.style.display = "block";
						contentBox4.style.display = "none";
						contentBox5.style.display = "none";

					})

					var contentBtn4 = document.getElementById("contentBtn4");
					contentBtn4.addEventListener("click", function() {
						
						contentBox1.style.display = "none";
						contentBox2.style.display = "none";
						contentBox3.style.display = "none";
						contentBox4.style.display = "block";
						contentBox5.style.display = "none";

					})

					var contentBtn5 = document.getElementById("contentBtn5");
					contentBtn5.addEventListener("click", function() {
						
						contentBox1.style.display = "none";
						contentBox2.style.display = "none";
						contentBox3.style.display = "none";
						contentBox4.style.display = "none";
						contentBox5.style.display = "block";

					})
				}

				/////////////////////////////////////////////////////////////
				/////////////////////////////////////////////////////////////

				initNewsContentButtons();
				console.log("Button Handler Loaded");

 			}); 
 		