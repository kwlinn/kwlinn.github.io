var button = document.getElementById("no");

button.addEventListener("click", change);

function change() {
    {
        var i = Math.floor(Math.random() * 500) + 1;
        var j = Math.floor(Math.random() * 500) + 1;
        button.style.left = i + "px";
        button.style.top = j + "px";
    }
}

// function random_image() {
//     var images = ["images/no/1.jpg", "images/no/2.jpg"]
// }

// var images = ["images/no/1.jpg", "images/no/2.jpg"];


// console.log(images)

var yes = document.getElementById("yes");

yes.addEventListener("click", function () {
    document.querySelector("img").src = "images/bobbyhappy.jpg";
})
