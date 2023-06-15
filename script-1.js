"use strict"
var delivery = 3
var button = document.getElementById("btn-1")

do {
    var cost = prompt("Kiek mokėjote už prekę")
    var cost = Number(cost)
} while (isNaN(cost))


if (confirm("Ar reikalingas pristatymas į namus?") == true) {
    var loc = prompt("Į kokį miestą pristatyti prekę?")
    var main = cost + delivery
    console.log("Prekės Kaina - " + cost.toFixed(2) + "€")
    console.log("Pristatymo Kaina - " + delivery + "€")
    console.log("Iš viso mokėti - " + main + "€")
    console.log("Prekę pristatysime į " + loc + " per 1-3 dienas.")
           
} else {
    console.log("Jūsų prekės kaina - " + cost.toFixed(2) + "€, Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
}

