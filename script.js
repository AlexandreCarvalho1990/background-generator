
// 2. Create an array which contains the object you have made above and name the arry "database"
var database = [
	{
		username: "andrei",
		password: "SUPERCART1990"
	},
	{
		username: "susan",
		password: "supersecret"
	},
	{
		username: "carlos",
		password: "supersecret"
	}
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

function isUserValid(username, password){
	for (var i=0; i< database.length; i++) {
		if (database[i].username === username &&
			database[i].password === password){
			return true;
		}
} return false; 
}

function signIn(username, password) {
		if (isUserValid(username,password)){
			 console.log(newsfeed);
		} else {
			 alert ("Sorry, wrong username or password")
		}
	}


let userNamePrompt = prompt("What is your username?");
let passwordPrompt = prompt("What is your password?");

signIn(userNamePrompt,passwordPrompt);










