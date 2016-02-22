/*
This is empty on purpose! Your code to build the resume will go here.
*/
var name = "Fringilla";
var role = "birdwatcher";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

var email = "fringilla0@gmail.com";

var formattedEmail = HTMLemail.replace("%data%", email);

$("#main").append(formattedEmail);

/*
var bio = {
  "name" : "Fringilla",
  "role" : "birdwatcher",
  "contacts" : {
    "mobile" : "123 456 789",
    "email" : "fringilla0@gmail.com",
    "github" : "Fringilla0",
    "twitter" : "@Fringilla0",
    "location" : "Brno"
  },
  "welcomeMessage" : "Nazdar!",
  "skills" : [
    "undestanding bird language", "bird species recognizing"
    ],
  "bioPic" : "images/fry.jpg"
}

$("#main").append(bio);
*/
