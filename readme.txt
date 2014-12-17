Hey David,
Thanks so much for agreeing to help me out with this project, I'm new to website programming, and i'm still having trouble figuring out how to put some of the parts together. This project was generated using yeoman's angular fullstack generator. 
A couple things need to happen to get the website working. 
1. MongoDB needs to be installed and running, (if you don't have it, it's easily available online).
2. in client/index.html, the jquery line (<script src="bower_components/jquery/dist/jquery.js"></script>) needs to be commented out.
3. in client/index.html, <script src="bower_components/angular-swing/dist/angular-swing.min.js"></script>, needs to be changed to 
	<script src="bower_components/angular-swing/dist/angular-swing.js"></script>

to launch webpage, i navigate to current directory = snckco and then just type the command "grunt serve"

There are 2 primary functions of the webpage, card-stack and showdown, which is where I would like you to focus your efforts. 

Tasks - (ranging in priority from top to bottom)

- Showdown 
	I haven't been able to populate the buttons on the showdown page. I basically want the same "card"s that you see on the card-stack page to appear, one of the four in each slot of the showdown. I want these cards to maintain their flip functionality (so you can see the info on the other side of the card), but lose the swipe functionality for the showdown page. The card data is stored in client/assets/data/card-stack.json.  

	When each slot is populated with a card, the four available in card-stack.json, I want the user to be able to select and vote for one of the choices.
		upon clicking vote. . . 
			I want "showdownVote" for the respective "idNumber" in card-stack.json to be incremented by one. 

						{(note on .json) - i've had a hard time figuring out how to integrate json files with the website, i've tried creating a service so the data is available globally and between controllers but have been unsuccessful. I would also like you to create a service (or factory I'm not sure which is better) that makes the json data globally available, you only need to worry about creating a service for card-stack.json and once I've organized the other json files appropriately i'll create their service.
						If you think i'm completely off or know some better way to store, change, update data just give me a call and we can talk about the options}

			I also want you to create a hide/show functionality. so that upon clicking vote the button text will change to "Thanks" and the css styles around each box to change so that the box with highest number of "showdownVote" will be surrounded with a green border and the number of showdown votes to be displayed on top of it, while the 3 boxes with less amounts of votes will be surrounded in red and their number of votes displayed as well. 

- Card-stack
	I want each swipe left("swipeNo")/swipe right("swipeYes") to be recorded in card-stack corresponding to the correct "idNumber" of the vote that was cast 

	I would also like the text "I want MORE sncks like. . . " and "I want LESS sncks like. . ." to function as a button that will trigger a vote and act as if a swipe happened without having to actually swipe the picture. 


-overall layout
	I would like you to create a custom page transition for me. What I have in mind is basically expanding the navbar (found in components folder) for each page transition. 
	Every time a page transition occurs, I want the navbar to be animated and drop down (like a shade being lowered) and then risen again to reveal the new page underneath. I would also like to be able to control the speed with which the navbar is being lowered and raised. 
	The picture i have as the current navbar background-image (/assets/images/vending.jpg) is simply a crop of the bottom section of a larger image (/assets/images/vending2.jpg). Upon dropdown I'd want the larger image (vending2.jpg) to be displayed as the navbar is lowered and raised, but otherwise I want the lower portion of the image (as represented by vending.jpg) to be displayed
	
Again, thank you so much for agreeing to help out, I have no clue as to whether this will take you all of 20 minutes or 3 hours, but just let me know when you are done or 3 hours is up and we'll review the current status and decide how to proceed. 