/*
This is empty on purpose! Your code to build the resume will go here.
*/
var name = "Fringilla";
var role = "birdwatcher";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedName);
$("#header").append(formattedRole);

