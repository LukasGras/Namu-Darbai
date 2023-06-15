"use strict"

var convert = 1000000

var countries = [


    {name: "Japonija", radius: 377973, people: 125927902},
    {name: "Turkija", radius: 783356, people: 84680273},
    {name: "Egiptas", radius: 1010408, people: 102674145},
    {name: "Graikija", radius: 131957, people: 10678632},
    {name: "Anglija", radius: 130395, people: 56489800}


]

for (var country of countries){
    mForPeople(country.name, country.radius, country.people)
}



function mForPeople (name, radius, people){
    var meters = radius * convert
    var mpeople = people / convert
    var peoplePerMeter = meters / people
    console.log("Šalis - " + name + ", Joje Gyvena - " + mpeople.toFixed(2) + " mln. gyventojų. Valstybės plotas: " + radius + " km², plotas tenkantis vienam gyventojui: " + peoplePerMeter.toFixed(2) + " m²")
}
