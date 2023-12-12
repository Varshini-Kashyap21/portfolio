// Sticky Navigation Menu Js

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}
 // JavaScript to handle the button click event
        document.getElementById('downloadButton').addEventListener('click', function() {
            // Create an <a> element and set its attributes for downloading
            var downloadLink = document.createElement('a');
            downloadLink.href = "https://drive.google.com/file/d/17ugjxLoWHavpc8MibyZgi5Ear7eT3YVt/view?usp=drive_link"; // Update with the actual file path
            downloadLink.download = 'Varshini resume00001.pdf'; // Change the name as needed
            downloadLink.style.display = 'none';

            // Append the link to the document and trigger the click event
            document.body.appendChild(downloadLink);
            downloadLink.click();

            // Clean up by removing the element
            document.body.removeChild(downloadLink);
        });
// Side Navigation Menu Js
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflowX = "hidden";
  scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflowX = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

        // Add an event listener to the button
        document.getElementById("chatButton").addEventListener("click", function () {
            // Replace 'your.email@example.com' with your actual email address
            var emailAddress = "your.email@example.com";

            // Create a mailto link
            var mailtoLink = "mailto:" + emailAddress;

            // Open the user's default email client
            window.location.href = mailtoLink;
        });
 
// Side Navigation Bar Close While We click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

