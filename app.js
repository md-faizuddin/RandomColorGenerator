function randomNum() {
    let r = Math.floor((Math.random() * 255) + 1);
    return r;
}

let box = document.querySelector(".colorBox");
let btn = document.querySelector(".container > button");

// Implementing the onclick functionality using EventListner

btn.addEventListener("click", function () {
    document.querySelector(".colorBox p").style.color = "white";
    //Selecting 3 random rgb values
    let rgb1 = randomNum();
    let rgb2 = randomNum();
    let rgb3 = randomNum();
    // assigning the random colour to a variable
    let randomColor = `rgb(${rgb1} , ${rgb2}, ${rgb3})`;

    //changing Box background color to random color
    box.style.backgroundColor = randomColor;

    //changing h1's value to random colour's name in rgb format;
    document.querySelector("h1").innerText = randomColor;

    // implementing the 'list of color used'
    let color = document.createElement("li"); //creating a list item
    color.innerHTML = `${randomColor} <div class="previewDiv"> </div>`; // added innerHTML to the list item along with a div

    document.querySelector("#list").append(color); // adding li to unordered list 
    let preview = document.querySelectorAll(".previewDiv"); // storing all the previewDiv in an object

    //changing background color of the last (li) item/div in the object
    preview[preview.length - 1].style.backgroundColor = randomColor;
});
























//obsolete code do not look:-
//using onclick function
// btn.onclick = function () {
//     document.querySelector(".colorBox p").style.color = "white";
//     let rgb1 = randomNum();
//     let rgb2 = randomNum();
//     let rgb3 = randomNum();
//     box.style.backgroundColor = `rgb(${rgb1} , ${rgb2}, ${rgb3})`;
//     document.querySelector("h1").innerText = `rgb(${rgb1} , ${rgb2}, ${rgb3})`;
// }