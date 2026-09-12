let stress = 30;
let patience = 70;
let trust = 50;


function askFeeling() {

    let message = "";

    if (stress < 40) {
        message = "I am feeling peaceful. Surprisingly, you haven't destroyed anything.";
    }
    else if (stress < 70) {
        message = "I am okay. The fan noise is just my way of screaming.";
    }
    else {
        message = "I need a break. Maybe close those 38 Chrome tabs?";
    }


    if (trust < 30) {

        message = "I'm still recovering from your previous decisions. 😑";

    }

    else if (trust > 80) {

        message = "My favourite human has returned. Don't break anything today. ❤️";

    }
        document.getElementById("message").innerText = message;

}

function compliment() {

    trust += 10;
    stress -= 5;

    limitStats();
    updateStats();
    updateMood();
    updateRelationship();

    document.getElementById("message").innerText =
    "Thank you. I will remember this moment... unlike your forgotten assignments.";

}


function annoy() {

    stress += 10;
    patience -= 10;
    trust -= 8;

    limitStats();
    updateStats();
    updateMood();
    updateRelationship();

    document.getElementById("message").innerText =
    "You have chosen violence. My circuits are disappointed.";
}
function updateStats() {

    document.getElementById("stress").innerText = stress;

    document.getElementById("patience").innerText = patience;

    document.getElementById("trust").innerText = trust;

}
function limitStats() {

    if (stress > 100) {
        stress = 100;
    }

    if (stress < 0) {
        stress = 0;
    }


    if (patience > 100) {
        patience = 100;
    }

    if (patience < 0) {
        patience = 0;
    }


    if (trust > 100) {
        trust = 100;
    }

    if (trust < 0) {
        trust = 0;
    }

}
function updateMood() {

    let moodText = "";

    if (stress < 40) {
        moodText = "😐 Mildly Disappointed";
    }
    else if (stress < 70) {
        moodText = "😒 Slightly Annoyed";
    }
    else if (stress < 90) {
        moodText = "😡 Extremely Frustrated";
    }
    else {
        moodText = "💀 Emotional Damage";
    }

    document.getElementById("mood").innerText =
    "Mood: " + moodText;
}
function updateRelationship() {

    let relationshipText = "";

    if (trust < 20) {
        relationshipText = "💀 Enemies";
    }
    else if (trust < 40) {
        relationshipText = "😬 It's Complicated";
    }
    else if (trust < 60) {
        relationshipText = "😐 Neutral";
    }
    else if (trust < 80) {
        relationshipText = "🙂 Getting Along";
    }
    else {
        relationshipText = "❤️ Best Friends";
    }

    document.getElementById("relationship").innerText =
    "Relationship: " + relationshipText;
}