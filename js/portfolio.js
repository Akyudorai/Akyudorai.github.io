$(document).ready(function(){

	//////////////////////////////////////////////////////////////

	/* 
		Contains all the information regarding each content tab.
	*/

	// Content Containers
	var numTabs = 4;
	var contentTab = new Array(numTabs + 1);
	contentTab[0] = "NULL";

	var contentScrollFrame = new Array(numTabs + 1);
	contentScrollFrame[0] = "NULL";

	var contentVideoFrame = new Array(numTabs + 1);
	contentVideoFrame[0] = "NULL";

	var contentDescriptionFrame = new Array(numTabs + 1);
	contentDescriptionFrame[0] = "NULL";

	//////////////////////////////////////////////////////////////

	/* 
		Contains all content for the first tab :: YEAR ONE
	*/

	// Content Tab 1
	var numElements1 = 5;
	var indexedContent1 = new Array(numElements1 + 1);
	indexedContent1[0] = "NULL";

	var indexedVideoContent1 = new Array(numElements1 + 1);
	indexedVideoContent1[0] = "NULL";

	var indexedContentDescription1 = new Array(numElements1 + 1);
	indexedContentDescription1[0] = "NULL";

	// Current Active Content
	var activeContent1 = 1;

	//////////////////////////////////////////////////////////////

	/* 
		Contains all content for the second tab :: YEAR TWO
	*/

	// Content Tab 2
	var numElements2 = 5;
	var indexedContent2 = new Array(numElements2 + 1);
	indexedContent2[0] = "NULL";

	var indexedVideoContent2 = new Array(numElements2 + 1);
	indexedVideoContent2[0] = "NULL";

	var indexedContentDescription2 = new Array(numElements2 + 1);
	indexedContentDescription2[0] = "NULL";

	// Current Active Content
	var activeContent2 = 1;

	//////////////////////////////////////////////////////////////

	/* 
		Contains all the content for the third tab :: YEAR THREE
	*/

	// Content Tab 3
	var numElements3 = 5;
	var indexedContent3 = new Array(numElements3 + 1);
	indexedContent3[0] = "NULL";

	var indexedVideoContent3 = new Array(numElements3 + 1);
	indexedVideoContent3[0] = "NULL";

	var indexedContentDescription3 = new Array(numElements3 + 1);
	indexedContentDescription3[0] = "NULL";

	// Current Active Content
	var activeContent3 = 1;

	//////////////////////////////////////////////////////////////

	/*  
		Contains all the content for the fourth tab :: OTHER WORK
	*/

	// Content Tab 4
	var numElements4 = 5;
	var indexedContent4 = new Array(numElements4 + 1);
	indexedContent4[0] = "NULL";

	var indexedVideoContent4 = new Array(numElements4 + 1);
	indexedVideoContent4[0] = "NULL";

	var indexedContentDescription4 = new Array(numElements4 + 1);
	indexedContentDescription4[0] = "NULL";

	// Current Active Content
	var activeContent4 = 1;

	//////////////////////////////////////////////////////////////

	/* 
		Initialize all the buttons, elements, and content on the page.
	*/

	function initContentTabs()
	{
		contentTab[1] = document.getElementById("contentTab1");		
		contentTab[1].addEventListener("click", function() {
			displayFrame(1);
			displayContent(1, 1);
			console.log("Tab 1 Pressed");
		});

		contentTab[2] = document.getElementById("contentTab2");
		contentTab[2].addEventListener("click", function() {
			displayFrame(2);
			displayContent(2, 1);
			console.log("Tab 2 Pressed");
		});

		contentTab[3] = document.getElementById("contentTab3");
		contentTab[3].addEventListener("click", function() {
			displayFrame(3);
			displayContent(3, 1);
			console.log("Tab 3 Pressed");
		});

		contentTab[4] = document.getElementById("contentTab4");
		contentTab[4].addEventListener("click", function() {
			displayFrame(4);
			displayContent(4, 1);
			console.log("Tab 4 Pressed");
		});
	}

	function initContentFrames() 
	{
		// Initialize Content Scroll Frames
		contentScrollFrame[1] = document.getElementById("contentScroll1");
		contentScrollFrame[2] = document.getElementById("contentScroll2");
		contentScrollFrame[3] = document.getElementById("contentScroll3");
		contentScrollFrame[4] = document.getElementById("contentScroll4");

		// Initialize Content Video Frames
		contentVideoFrame[1] = document.getElementById("contentVideo1");
		contentVideoFrame[2] = document.getElementById("contentVideo2");
		contentVideoFrame[3] = document.getElementById("contentVideo3");
		contentVideoFrame[4] = document.getElementById("contentVideo4");

		// Initialize Content Description Frames
		contentDescriptionFrame[1] = document.getElementById("contentDescription1");
		contentDescriptionFrame[2] = document.getElementById("contentDescription2");
		contentDescriptionFrame[3] = document.getElementById("contentDescription3");
		contentDescriptionFrame[4] = document.getElementById("contentDescription4");		
	}

	// Initialize Content Scroll Items
	function initContentScrollItems() 
	{
		// Content Scroll Items from First Tab
		//////////////////////////////////////////////////////////////
		indexedContent1[1] = document.getElementById("c1_1");
			
			indexedContent1[1].addEventListener("mouseover", function() {
				setContentOpacity(1, 1, 0.33);
			});

			indexedContent1[1].addEventListener("mouseout", function() {
				
				if (activeContent1 != 1)
				{
					setContentOpacity(1, 1, 0);					
				}
				
			});

			indexedContent1[1].addEventListener("click", function() {
				activeContent1 = 1;
				displayContent(1, 1);				
				
				setContentOpacity(1, 1, 0.3);
				setContentOpacity(1, 2, 0);
				setContentOpacity(1, 3, 0);
				setContentOpacity(1, 4, 0);
				setContentOpacity(1, 5, 0);
				console.log("Content pressed");
			});

		indexedContent1[2] = document.getElementById("c1_2");

			indexedContent1[2].addEventListener("mouseover", function() {
				setContentOpacity(1, 2, 0.33);
			});

			indexedContent1[2].addEventListener("mouseout", function() {
				
				if (activeContent1 != 2)
				{
					setContentOpacity(1, 2, 0);					
				}
				
			});

			indexedContent1[2].addEventListener("click", function() {
				activeContent1 = 2;
				displayContent(1, 2);
				
				setContentOpacity(1, 1, 0);
				setContentOpacity(1, 2, 0.3);
				setContentOpacity(1, 3, 0);
				setContentOpacity(1, 4, 0);
				setContentOpacity(1, 5, 0);
				console.log("Content pressed");
			});

		indexedContent1[3] = document.getElementById("c1_3");

			indexedContent1[3].addEventListener("mouseover", function() {
				setContentOpacity(1, 3, 0.33);
			});

			indexedContent1[3].addEventListener("mouseout", function() {
				
				if (activeContent1 != 3)
				{
					setContentOpacity(1, 3, 0);					
				}
				
			});

			indexedContent1[3].addEventListener("click", function() {
				activeContent1 = 3;
				displayContent(1, 3);
				
				setContentOpacity(1, 1, 0);
				setContentOpacity(1, 2, 0);
				setContentOpacity(1, 3, 0.3);
				setContentOpacity(1, 4, 0);
				setContentOpacity(1, 5, 0);
				console.log("Content pressed");
			});

		indexedContent1[4] = document.getElementById("c1_4");

			indexedContent1[4].addEventListener("mouseover", function() {
				setContentOpacity(1, 4, 0.33);
			});

			indexedContent1[4].addEventListener("mouseout", function() {
				
				if (activeContent1 != 4)
				{
					setContentOpacity(1, 4, 0);					
				}
				
			});

			indexedContent1[4].addEventListener("click", function() {
				activeContent1 = 4;
				displayContent(1, 4);

				setContentOpacity(1, 1, 0);
				setContentOpacity(1, 2, 0);
				setContentOpacity(1, 3, 0);
				setContentOpacity(1, 4, 0.3);
				setContentOpacity(1, 5, 0);
				console.log("Content pressed");
			});

		indexedContent1[5] = document.getElementById("c1_5");

			indexedContent1[5].addEventListener("mouseover", function() {
				setContentOpacity(1, 5, 0.33);
			});

			indexedContent1[5].addEventListener("mouseout", function() {
				
				if (activeContent1 != 1)
				{
					setContentOpacity(1, 5, 0);					
				}
				
			});

			indexedContent1[5].addEventListener("click", function() {
				activeContent1 = 5;
				displayContent(1, 5);
				
				setContentOpacity(1, 1, 0);
				setContentOpacity(1, 2, 0);
				setContentOpacity(1, 3, 0);
				setContentOpacity(1, 4, 0);
				setContentOpacity(1, 5, 0.3);
				console.log("Content pressed");
			});

		//////////////////////////////////////////////////////////////
		

		// Content Scroll Items from Second Tab
		//////////////////////////////////////////////////////////////
		indexedContent2[1] = document.getElementById("c2_1");
			
			indexedContent2[1].addEventListener("mouseover", function() {
				setContentOpacity(2, 1, 0.33);
			});

			indexedContent2[1].addEventListener("mouseout", function() {
				
				if (activeContent2 != 1)
				{
					setContentOpacity(2, 1, 0);					
				}

			});

			indexedContent2[1].addEventListener("click", function() {
				activeContent2 = 1;
				displayContent(2, 1);				
				
				setContentOpacity(2, 1, 0.3);
				setContentOpacity(2, 2, 0);
				setContentOpacity(2, 3, 0);
				setContentOpacity(2, 4, 0);
				setContentOpacity(2, 5, 0);
				console.log("Content pressed");
			});

		indexedContent2[2] = document.getElementById("c2_2");

			indexedContent2[2].addEventListener("mouseover", function() {
				setContentOpacity(2, 2, 0.33);
			});

			indexedContent2[2].addEventListener("mouseout", function() {
				
				if (activeContent2 != 2)
				{
					setContentOpacity(2, 2, 0);					
				}

			});

			indexedContent2[2].addEventListener("click", function() {
				activeContent2 = 2;
				displayContent(2, 2);				
				
				setContentOpacity(2, 1, 0);
				setContentOpacity(2, 2, 0.3);
				setContentOpacity(2, 3, 0);
				setContentOpacity(2, 4, 0);
				setContentOpacity(2, 5, 0);
				console.log("Content pressed");
			});

		indexedContent2[3] = document.getElementById("c2_3");

			indexedContent2[3].addEventListener("mouseover", function() {
				setContentOpacity(2, 3, 0.33);
			});

			indexedContent2[3].addEventListener("mouseout", function() {
				
				if (activeContent2 != 3)
				{
					setContentOpacity(2, 3, 0);					
				}

			});

			indexedContent2[3].addEventListener("click", function() {
				activeContent2 = 3;
				displayContent(2, 3);				
				
				setContentOpacity(2, 1, 0);
				setContentOpacity(2, 2, 0);
				setContentOpacity(2, 3, 0.3);
				setContentOpacity(2, 4, 0);
				setContentOpacity(2, 5, 0);
				console.log("Content pressed");
			});

		indexedContent2[4] = document.getElementById("c2_4");

			indexedContent2[4].addEventListener("mouseover", function() {
				setContentOpacity(2, 4, 0.33);
			});

			indexedContent2[4].addEventListener("mouseout", function() {
				
				if (activeContent2 != 4)
				{
					setContentOpacity(2, 4, 0);					
				}

			});

			indexedContent2[4].addEventListener("click", function() {
				activeContent2 = 4;
				displayContent(2, 4);				
				
				setContentOpacity(2, 1, 0);
				setContentOpacity(2, 2, 0);
				setContentOpacity(2, 3, 0);
				setContentOpacity(2, 4, 0.3);
				setContentOpacity(2, 5, 0);
				console.log("Content pressed");
			});

		indexedContent2[5] = document.getElementById("c2_5");

			indexedContent2[5].addEventListener("mouseover", function() {
				setContentOpacity(2, 5, 0.33);
			});

			indexedContent2[5].addEventListener("mouseout", function() {
				
				if (activeContent2 != 5)
				{
					setContentOpacity(2, 5, 0);					
				}

			});

			indexedContent2[5].addEventListener("click", function() {
				activeContent2 = 5;
				displayContent(2, 5);				
				
				setContentOpacity(2, 1, 0);
				setContentOpacity(2, 2, 0);
				setContentOpacity(2, 3, 0);
				setContentOpacity(2, 4, 0);
				setContentOpacity(2, 5, 0.3);
				console.log("Content pressed");
			});

		//////////////////////////////////////////////////////////////
		

		// Content Scroll Items from Third Tab
		//////////////////////////////////////////////////////////////
		indexedContent3[1] = document.getElementById("c3_1");
			
			indexedContent3[1].addEventListener("mouseover", function() {
				setContentOpacity(3, 1, 0.33);
			});

			indexedContent3[1].addEventListener("mouseout", function() {
				
				if (activeContent3 != 1)
				{
					setContentOpacity(3, 1, 0);					
				}

			});

			indexedContent3[1].addEventListener("click", function() {
				activeContent3 = 1;
				displayContent(3, 1);				
				
				setContentOpacity(3, 1, 0.3);
				setContentOpacity(3, 2, 0);
				setContentOpacity(3, 3, 0);
				setContentOpacity(3, 4, 0);
				setContentOpacity(3, 5, 0);
				console.log("Content pressed");
			});

		indexedContent3[2] = document.getElementById("c3_2");

			indexedContent3[2].addEventListener("mouseover", function() {
				setContentOpacity(3, 2, 0.33);
			});

			indexedContent3[2].addEventListener("mouseout", function() {
								
				if (activeContent3 != 2)
				{
					setContentOpacity(3, 2, 0);					
				}


			});

			indexedContent3[2].addEventListener("click", function() {
				activeContent3 = 2;
				displayContent(3, 2);				
				
				setContentOpacity(3, 1, 0);
				setContentOpacity(3, 2, 0.3);
				setContentOpacity(3, 3, 0);
				setContentOpacity(3, 4, 0);
				setContentOpacity(3, 5, 0);
				console.log("Content pressed");
			});

		indexedContent3[3] = document.getElementById("c3_3");

			indexedContent3[3].addEventListener("mouseover", function() {
				setContentOpacity(3, 3, 0.33);
			});

			indexedContent3[3].addEventListener("mouseout", function() {
								
				if (activeContent3 != 3)
				{
					setContentOpacity(3, 3, 0);					
				}


			});

			indexedContent3[3].addEventListener("click", function() {
				activeContent3 = 3;
				displayContent(3, 3);				
				
				setContentOpacity(3, 1, 0);
				setContentOpacity(3, 2, 0);
				setContentOpacity(3, 3, 0.3);
				setContentOpacity(3, 4, 0);
				setContentOpacity(3, 5, 0);
				console.log("Content pressed");
			});

		indexedContent3[4] = document.getElementById("c3_4");

			indexedContent3[4].addEventListener("mouseover", function() {
				setContentOpacity(3, 4, 0.33);
			});

			indexedContent3[4].addEventListener("mouseout", function() {
								
				if (activeContent3 != 4)
				{
					setContentOpacity(3, 4, 0);					
				}


			});

			indexedContent3[4].addEventListener("click", function() {
				activeContent3 = 4;
				displayContent(3, 4);				
				
				setContentOpacity(3, 1, 0);
				setContentOpacity(3, 2, 0);
				setContentOpacity(3, 3, 0);
				setContentOpacity(3, 4, 0.3);
				setContentOpacity(3, 5, 0);
				console.log("Content pressed");
			});

		indexedContent3[5] = document.getElementById("c3_5");

			indexedContent3[5].addEventListener("mouseover", function() {
				setContentOpacity(3, 5, 0.33);
			});

			indexedContent3[5].addEventListener("mouseout", function() {
								
				if (activeContent3 != 5)
				{
					setContentOpacity(3, 5, 0);					
				}


			});

			indexedContent3[5].addEventListener("click", function() {
				activeContent3 = 5;
				displayContent(3, 5);				
				
				setContentOpacity(3, 1, 0);
				setContentOpacity(3, 2, 0);
				setContentOpacity(3, 3, 0);
				setContentOpacity(3, 4, 0);
				setContentOpacity(3, 5, 0.3);				
				console.log("Content pressed");
			});

		//////////////////////////////////////////////////////////////


		// Content Scroll Items from Fourth Tab
		//////////////////////////////////////////////////////////////
		indexedContent4[1] = document.getElementById("c4_1");
			
			indexedContent4[1].addEventListener("mouseover", function() {
				setContentOpacity(4, 1, 0.33);
			});

			indexedContent4[1].addEventListener("mouseout", function() {
								
				if (activeContent4 != 1)
				{
					setContentOpacity(4, 1, 0);					
				}


			});

			indexedContent4[1].addEventListener("click", function() {
				activeContent4 = 1;
				displayContent(4, 1);				
				
				setContentOpacity(4, 1, 0.3);
				setContentOpacity(4, 2, 0);
				setContentOpacity(4, 3, 0);
				setContentOpacity(4, 4, 0);
				setContentOpacity(4, 5, 0);
				console.log("Content pressed");
			});

		indexedContent4[2] = document.getElementById("c4_2");

			indexedContent4[2].addEventListener("mouseover", function() {
				setContentOpacity(4, 2, 0.33);
			});

			indexedContent4[2].addEventListener("mouseout", function() {
												
				if (activeContent4 != 2)
				{
					setContentOpacity(4, 2, 0);					
				}


			});

			indexedContent4[2].addEventListener("click", function() {
				activeContent4 = 2;
				displayContent(4, 2);				
				
				setContentOpacity(4, 1, 0);
				setContentOpacity(4, 2, 0.3);
				setContentOpacity(4, 3, 0);
				setContentOpacity(4, 4, 0);
				setContentOpacity(4, 5, 0);
				console.log("Content pressed");
			});

		indexedContent4[3] = document.getElementById("c4_3");

			indexedContent4[3].addEventListener("mouseover", function() {
				setContentOpacity(4, 3, 0.33);
			});

			indexedContent4[3].addEventListener("mouseout", function() {
												
				if (activeContent4 != 3)
				{
					setContentOpacity(4, 3, 0);					
				}


			});

			indexedContent4[3].addEventListener("click", function() {
				activeContent4 = 3;
				displayContent(4, 3);				
				
				setContentOpacity(4, 1, 0);
				setContentOpacity(4, 2, 0);
				setContentOpacity(4, 3, 0.3);
				setContentOpacity(4, 4, 0);
				setContentOpacity(4, 5, 0);
				console.log("Content pressed");
			});

		indexedContent4[4] = document.getElementById("c4_4");

			indexedContent4[4].addEventListener("mouseover", function() {
				setContentOpacity(4, 4, 0.33);
			});

			indexedContent4[4].addEventListener("mouseout", function() {
												
				if (activeContent4 != 4)
				{
					setContentOpacity(4, 4, 0);					
				}


			});

			indexedContent4[4].addEventListener("click", function() {
				activeContent4 = 4;
				displayContent(4, 4);				
				
				setContentOpacity(4, 1, 0);
				setContentOpacity(4, 2, 0);
				setContentOpacity(4, 3, 0);
				setContentOpacity(4, 4, 0.3);
				setContentOpacity(4, 5, 0);
				console.log("Content pressed");
			});

		indexedContent4[5] = document.getElementById("c4_5");

			indexedContent4[5].addEventListener("mouseover", function() {
				setContentOpacity(4, 5, 0.33);
			});

			indexedContent4[5].addEventListener("mouseout", function() {
												
				if (activeContent4 != 5)
				{
					setContentOpacity(4, 5, 0);					
				}


			});

			indexedContent4[5].addEventListener("click", function() {
				activeContent4 = 5;
				displayContent(4, 5);				
				
				setContentOpacity(4, 1, 0);
				setContentOpacity(4, 2, 0);
				setContentOpacity(4, 3, 0);
				setContentOpacity(4, 4, 0);
				setContentOpacity(4, 5, 0.3);
				console.log("Content pressed");
			});

		//////////////////////////////////////////////////////////////

	}

	// Initialize Video Content
	function initContentVideo() 
	{
		// Video Content from First Tab
		indexedVideoContent1[1] = document.getElementById("v1_1");
		indexedVideoContent1[2] = document.getElementById("v1_2");
		indexedVideoContent1[3] = document.getElementById("v1_3");
		indexedVideoContent1[4] = document.getElementById("v1_4");
		indexedVideoContent1[5] = document.getElementById("v1_5");
		
		// Video Content from Second Tab
		indexedVideoContent2[1] = document.getElementById("v2_1");
		indexedVideoContent2[2] = document.getElementById("v2_2");
		indexedVideoContent2[3] = document.getElementById("v2_3");
		indexedVideoContent2[4] = document.getElementById("v2_4");
		indexedVideoContent2[5] = document.getElementById("v2_5");

		// Video Content from Third Tab
		indexedVideoContent3[1] = document.getElementById("v3_1");
		indexedVideoContent3[2] = document.getElementById("v3_2");
		indexedVideoContent3[3] = document.getElementById("v3_3");
		indexedVideoContent3[4] = document.getElementById("v3_4");
		indexedVideoContent3[5] = document.getElementById("v3_5");

		// Video Content from Fourth Tab
		indexedVideoContent4[1] = document.getElementById("v4_1");
		indexedVideoContent4[2] = document.getElementById("v4_2");
		indexedVideoContent4[3] = document.getElementById("v4_3");
		indexedVideoContent4[4] = document.getElementById("v4_4");
		indexedVideoContent4[5] = document.getElementById("v4_5");
	}

	// Initialize Content Description Items
	function initContentDescriptions()
	{
		
	}

	//////////////////////////////////////////////////////////////

	/* 
		Content Methodology
	*/

	function displayFrame(index)
	{				
		
		for (var i = 1; i <= numTabs; i++)
		{
			contentTab[i].style.backgroundColor = "#1A1A1A"; 
			contentScrollFrame[i].style.display = "none";
			contentVideoFrame[i].style.display = "none";
			contentDescriptionFrame[i].style.display = "none";
		}
		

		switch (index)
		{
			case 1:
				contentScrollFrame[1].style.display = "inline-block";
				contentVideoFrame[1].style.display = "inline-block";
				contentDescriptionFrame[1].style.display = "table-cell";
				contentTab[1].style.backgroundColor = "#4A4A4A";
				break;

			case 2:
				contentScrollFrame[2].style.display = "inline-block";
				contentVideoFrame[2].style.display = "inline-block";
				contentDescriptionFrame[2].style.display = "table-cell";
				contentTab[2].style.backgroundColor = "#4A4A4A";
				break;

			case 3:
				contentScrollFrame[3].style.display = "inline-block";
				contentVideoFrame[3].style.display = "inline-block";
				contentDescriptionFrame[3].style.display = "table-cell";
				contentTab[3].style.backgroundColor = "#4A4A4A";
				break;

			case 4:
				contentScrollFrame[4].style.display = "inline-block";
				contentVideoFrame[4].style.display = "inline-block";
				contentDescriptionFrame[4].style.display = "table-cell";
				contentTab[4].style.backgroundColor = "#4A4A4A";
				break;
		}
	}


	

	
		

	function setContentOpacity(tabIndex, contentIndex, amount) {

		// Set Opacity Amount	
		switch (tabIndex)
		{
			case 1:
				indexedContent1[contentIndex].style.opacity = amount;
				break;

			case 2:
				indexedContent2[contentIndex].style.opacity = amount;
				break;

			case 3:
				indexedContent3[contentIndex].style.opacity = amount;
				break;

			case 4:
				indexedContent4[contentIndex].style.opacity = amount;
				break;
		}

	}

	function displayContent(tabIndex, contentIndex)
	{				
		switch(tabIndex)
		{
			case 1: 
				
				for(var i = 1; i < numElements1; i++)
				{
					if (i == contentIndex)
					{
						
						//indexedContentDescription1[contentIndex].style.display = "table-cell";
					}

					indexedVideoContent1[i].style.display = "none";
					//indexedContentDescription1[i].style.display = "none";
				}		

				indexedVideoContent1[contentIndex].style.display = "inline-block";		

				break;

			case 2:

				for(var i = 1; i < numElements2; i++)
				{
					if (i == contentIndex)
					{
						
						//indexedContentDescription2[contentIndex].style.display = "table-cell";
					}
					
					indexedVideoContent2[i].style.display = "none";
					//indexedContentDescription2[i].style.display = "none";
				}	

				indexedVideoContent2[contentIndex].style.display = "inline-block";

				break;

			case 3:

				for(var i = 1; i < numElements3; i++)
				{
					if (i == contentIndex)
					{
						
						//indexedContentDescription3[contentIndex].style.display = "table-cell";
					}
					
					indexedVideoContent3[i].style.display = "none";
					//indexedContentDescription3[i].style.display = "none";
				}	

				indexedVideoContent3[contentIndex].style.display = "inline-block";

				break;

			case 4:

				for(var i = 1; i < numElements4; i++)
				{
					if (i == contentIndex)
					{
						
						//indexedContentDescription4[contentIndex].style.display = "table-cell";
					}
					
					indexedVideoContent4[i].style.display = "none";
					//indexedContentDescription4[i].style.display = "none";
				}	

				indexedVideoContent4[contentIndex].style.display = "inline-block";

				break;
		}	
	}

	
	initContentTabs();
	initContentFrames();
	
	initContentScrollItems();
	initContentVideo();

	displayFrame(1);
	displayContent(1, 1);

	
	
	console.log("Button Handler Loaded");


});