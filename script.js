let health = 100;
let hunger = 50;
let energy = 50;

function updateStats() {
    document.getElementById('health').children[0].textContent = health;
    document.getElementById('hunger').children[0].textContent = hunger;
    document.getElementById('energy').children[0].textContent = energy;
}

function feed() {
    if (hunger > 0) {
        hunger -= 10;
        energy -= 5;
        health += 5;
        if (hunger < 0) hunger = 0;
        if (health > 100) health = 100;
    } else {
        alert("Chibi Blue n'a pas faim !");
    }
    updateStats();
}

function play() {
    if (energy > 0) {
        energy -= 10;
        hunger += 5;
        health += 5;
        if (energy < 0) energy = 0;
        if (hunger > 100) hunger = 100;
        if (health > 100) health = 100;
    } else {
        alert("Chibi Blue est trop fatigué pour jouer !");
    }
    updateStats();
}

function rest() {
    if (energy < 100) {
        energy += 20;
        health += 10;
        hunger += 5;
        if (energy > 100) energy = 100;
        if (health > 100) health = 100;
        if (hunger > 100) hunger = 100;
    } else {
        alert("Chibi Blue est déjà bien reposé !");
    }
    updateStats();
}

updateStats();
