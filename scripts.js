/*
    Author: Nicholas S. Blits
    File Version: 1.0.1
    Program Name: Simple Script File
    
    Description: This is a basic JavaScript file for displaying the phrase "Hello World!" on a webpage. It works in correspondence to the IDs found in this project's file "index.html".

    Copyright Notice: This file was developed by ONLY the accredited authors in this comment block. By using this file, you recognize this truth. Failure to acknowledge it publicly while in use of these files will result in legal action as appropriate.
*/


// This JavaScript file works with elements of the file "index.html" found in this project

// Ensure that the DOMContent loads before executing the JavaScript file's code
document.addEventListener("DOMContentLoaded", start)

// A function to run when the website has fully loaded

function start()
{
    // Create a variable for the button of the website
    var newButton = document.getElementById("messageButton");
    // Add an EventListener to the button, which will be the method below [welcomeUser()]
    newButton.addEventListener("click", welcomeUser);
}


function welcomeUser()
{
    // Create a variable for the paragraph that the website's button adds text to
    var newParagraph = document.getElementById("welcomeMessage");   

    // Add a phrase to the paragraph's inner HTML
    // In this specific case, the phrase to be added is "Hello World!"
    // A method to do so is called on the variable newParagraph from above
    newParagraph.innerHTML = "Hello World!";

    // Calling the alertUser() method to display a message informing the user that the phrase "Hello World!" had been added to the website
    alertUser()
}

function alertUser()
{
    alert("The message will be added shortly.");
}
// End of scripts.js