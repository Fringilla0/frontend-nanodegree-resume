/*
This is empty on purpose! Your code to build the resume will go here.
*/
var name = "Fringilla";
var role = "birdwatcher";
var email = "fringilla0@gmail.com";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedEmail = HTMLemail.replace("%data%", email);

$("#header").append(formattedName);
$("#header").append(formattedRole);

var bio = { "name" : "Fringilla", 
            "role" : "birdwatcher", 
            "contacts" : { "email" : "fringilla0@gmail.com", 
                           "twitter" : "@fringilla0" },
            "bioPic" : "images/fry.jpg", 
            "welcomeMsg" : "Nazdar." };

$("#main").append(bio);
