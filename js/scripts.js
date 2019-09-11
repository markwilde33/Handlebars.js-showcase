var cast = {
"characters": [
{
"name": "Jon Snow",
"shortCode": "jon-snow",
"actor": "Kit Harrington",
"house": "Stark",
"location": "The Wall"
},
{
"name": "Tyrion Lannister",
"shortCode": "tyrion",
"actor": "Peter Dinklage",
"house": "Lannister",
"location": "Kings landing"
},
{
"name": "Brienne of Tarth",
"shortCode": "brienne",
"actor": "Gwendoline Christie",
"house": "Tarth",
"location": "The Twins"
},
{
"name": "Eddard Stark",
"shortCode": "ned-stark",
"actor": "Sean Bean",
"house": "Stark",
"location": "Winterfell"
},
{
"name": "Sandor Clegane",
"shortCode": "the-hound",
"actor": "Rory McCann",
"house": "Clegane",
"location": "Unknown"
}
]
}

$(document).ready(function(){

var characterTemplate = $("#character-template").html();

var compiledCharacterTemplate = Handlebars.compile(characterTemplate);
$(".character-list-container").html(compiledCharacterTemplate(cast.characters[2]));
});