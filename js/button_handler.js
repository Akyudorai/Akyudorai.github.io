$(document).ready(function(){

	

	// Character Icons -- Character Page
	var numIcons = 26;
	var activeIcon = new Array(numIcons + 1);
	activeIcon[0] = "NULL";
	

	//activeIcon[1] = document.getElementById("garrett_ico");
	//activeIcon[2] = document.getElementById("emberosa_ico");



	function initCharacterPage() {

		// Tales of Tomorrow
		activeIcon[1] = document.getElementById("garrett_ico");
		activeIcon[1].addEventListener("click", function() {
				setOpacity(1);
		});

		activeIcon[2] = document.getElementById("emberosa_ico");
		activeIcon[2].addEventListener("click", function() {
				setOpacity(2);
		});
		
		activeIcon[3] = document.getElementById("katarina_ico");
		activeIcon[3].addEventListener("click", function() {
				setOpacity(3);
		});

		
		activeIcon[4] = document.getElementById("nem_ico");
		activeIcon[4].addEventListener("click", function() {
				setOpacity(4);
		});

		activeIcon[5] = document.getElementById("avery_ico");
		activeIcon[5].addEventListener("click", function() {
				setOpacity(5);
		});

		activeIcon[6] = document.getElementById("jesse_ico");
		activeIcon[6].addEventListener("click", function() {
				setOpacity(6);
		});

		activeIcon[7] = document.getElementById("shade_ico");
		activeIcon[7].addEventListener("click", function() {
				setOpacity(7);
		});

		// Miresa's Faction
		activeIcon[8] = document.getElementById("miresa_ico");
		activeIcon[8].addEventListener("click", function() {
				setOpacity(8);
		});


		activeIcon[9] = document.getElementById("lucius_ico");
		activeIcon[9].addEventListener("click", function() {
				setOpacity(9);
		});

		activeIcon[10] = document.getElementById("tyriann_ico");
		activeIcon[10].addEventListener("click", function() {
				setOpacity(10);
		});

		activeIcon[11] = document.getElementById("jordas_ico");
		activeIcon[11].addEventListener("click", function() {
				setOpacity(11);
		});

		// Hellbound Faction
		activeIcon[12] = document.getElementById("caine_ico");
		activeIcon[12].addEventListener("click", function() {
				setOpacity(12);
		});

		activeIcon[13] = document.getElementById("kara_ico");
		activeIcon[13].addEventListener("click", function() {
				setOpacity(13);
		});

		activeIcon[14] = document.getElementById("riel_ico");
		activeIcon[14].addEventListener("click", function() {
				setOpacity(14);
		});

		activeIcon[15] = document.getElementById("syndrix_ico");
		activeIcon[15].addEventListener("click", function() {
				setOpacity(15);
		});

		activeIcon[16] = document.getElementById("ursula_ico");
		activeIcon[16].addEventListener("click", function() {
				setOpacity(16);
		});

		activeIcon[17] = document.getElementById("hades_ico");
		activeIcon[17].addEventListener("click", function() {
				setOpacity(17);
		});

		activeIcon[18] = document.getElementById("ifrit_ico");		
		activeIcon[18].addEventListener("click", function() {
				setOpacity(18);
		});

		activeIcon[19] = document.getElementById("shiva_ico");
		activeIcon[19].addEventListener("click", function() {
				setOpacity(19);
		});

		activeIcon[20] = document.getElementById("loki_ico");		
		activeIcon[20].addEventListener("click", function() {
				setOpacity(20);
		});


		// Ascended Faction
		activeIcon[21] = document.getElementById("sierra_ico");
		activeIcon[21].addEventListener("click", function() {
				setOpacity(21);
		});

		activeIcon[22] = document.getElementById("azura_ico");
		activeIcon[22].addEventListener("click", function() {
				setOpacity(22);
		});

		activeIcon[23] = document.getElementById("divah_ico");
		activeIcon[23].addEventListener("click", function() {
				setOpacity(23);
		});

		activeIcon[24] = document.getElementById("oberon_ico");
		activeIcon[24].addEventListener("click", function() {
				setOpacity(24);
		});

		activeIcon[25] = document.getElementById("odin_ico");
		activeIcon[25].addEventListener("click", function() {
				setOpacity(25);
		})

		activeIcon[26] = document.getElementById("vex_ico");
		activeIcon[26].addEventListener("click", function() {
				setOpacity(26);
		})
		
	}
	
	

	function setOpacity(index) {

		// Tales of Tomorrow
		activeIcon[1].style.opacity = "1";
		activeIcon[2].style.opacity = "1";
		activeIcon[3].style.opacity = "1";
		activeIcon[4].style.opacity = "1";	
		activeIcon[5].style.opacity = "1";
		activeIcon[6].style.opacity = "1";
		activeIcon[7].style.opacity = "1";

		// Miresa's Faction
		activeIcon[8].style.opacity = "1";
		activeIcon[9].style.opacity = "1";
		activeIcon[10].style.opacity = "1";
		activeIcon[11].style.opacity = "1";

		// Hellbound Faction
		activeIcon[12].style.opacity = "1";
		activeIcon[13].style.opacity = "1";
		activeIcon[14].style.opacity = "1";
		activeIcon[15].style.opacity = "1";
		activeIcon[16].style.opacity = "1";
		activeIcon[17].style.opacity = "1";
		activeIcon[18].style.opacity = "1";
		activeIcon[19].style.opacity = "1";		
		activeIcon[20].style.opacity = "1";

		// Ascended Faction
		activeIcon[21].style.opacity = "1";
		activeIcon[22].style.opacity = "1";
		activeIcon[23].style.opacity = "1";
		activeIcon[24].style.opacity = "1";
		activeIcon[25].style.opacity = "1";
		activeIcon[26].style.opacity = "1";

		// Set Opacity of Active Icon
		activeIcon[index].style.opacity = "0.2";
	}

	
	initCharacterPage();
	console.log("Button Handler Loaded");


});