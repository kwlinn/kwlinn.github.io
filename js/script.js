var button = document.getElementById("no");

button.addEventListener("click", runboth);

function change() {
    {
        var i = Math.floor(Math.random() * 500) + 1;
        var j = Math.floor(Math.random() * 500) + 1;
        button.style.left = i + "px";
        button.style.top = j + "px";
    }
}

var images = ["images/no/1.jpg", "images/no/2.jpg", "images/no/3.jpg"]

function random_image() {
    random_index = Math.floor(Math.random() * images.length);

    selected_image = images[random_index]

    document.querySelector("img").src = `./${selected_image}`
}

function runboth() {
    change();
    random_image();
}



var yes = document.getElementById("yes");
var btn = document.querySelectorAll("button");

yes.addEventListener("click", function () {
    document.querySelector("img").src = "images/bobbyhappy.jpg";
    poo.textContent = "Yippee!";
    yes.style.display = 'none';
    no.style.display = 'none';
})
