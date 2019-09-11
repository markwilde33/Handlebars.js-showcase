var cast = {
"characters": [

{
"name": "Tyrion Lannister",
"shortCode": "tyrion",
"actor": "Peter Dinklage",
"house": "Lannister",
"location": "Kings Landing",
"favorite-color": "Purple"
},
{
"name": "Brienne of Tarth",
"shortCode": "brienne",
"actor": "Gwendoline Christie",
"house": "Tarth",
"location": "The Twins",
"favorite-color": ""
},
{
"name": "Eddard Stark",
"shortCode": "ned-stark",
"actor": "Sean Bean",
"house": "Stark",
"location": "Crypt of Winterfell",
"favorite-color": "Yellow"
},
{
"name": "Cersei",
"shortCode": "cersei",
"actor": "Lena Headley",
"house": "Stark",
"location": "Kings Landing",
"favorite-color": "Blood Red"
},
{
"name": "Jon Snow",
"shortCode": "jon-snow",
"actor": "Kit Harrington",
"house": "Stark",
"location": "The Wall",
"favorite-color": "Marine Green"
},
{
"name": "Daenarys Targaryen",
"shortCode": "daenerys",
"actor": "Emilia Clarke",
"house": "Targaryen",
"location": "Mereen",
"favorite-color": "Fiery Orange"
},
{
"name": "Sandor Clegane",
"shortCode": "the-hound",
"actor": "Rory McCann",
"house": "Clegane",
"location": "Looking for chickens..",
"favorite-color": ""
}
]
}

$(document).ready(function(){

var characterTemplate = $("#character-template").html();

var compiledCharacterTemplate = Handlebars.compile(characterTemplate);
$(".character-list-container").html(compiledCharacterTemplate(cast));
});