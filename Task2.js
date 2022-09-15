function Generate()
{
    //Creating a variable and getting the value from the first input box
    let FirstInput = document.getElementById("red").value;
    //Creating a variable and getting the value from the second input box
    let SecondInput = document.getElementById("green").value;
    //Creating a variable and getting the value from the third input box
    let ThirdInput = document.getElementById("blue").value;

    // Creating an if statement to say if the value for each input is over 255...
    if (FirstInput > 255 || SecondInput > 255 || ThirdInput > 255) {
        //Create an ERROR alert and get them to input another value
        alert("ERROR!! These numbers are over the appropriate RGB value.\nPlease enter numbers that are below 255.");
    }
    else {
        //Get the values and multiply them by 1.30 to make them lighter
        document.getElementById("lighterswatch").style.backgroundColor = "rgb(" + FirstInput *1.30 + "," + SecondInput * 1.30 + "," + ThirdInput * 1.30 + ")";
        //Get the values and show them as one RGB colour
        document.getElementById("mainswatch").style.backgroundColor = "rgb(" + FirstInput + "," + SecondInput + "," + ThirdInput + ")";
        //Get the values and multiply them by 0.65 to make them darker
        document.getElementById("darkerswatch").style.backgroundColor = "rgb(" + FirstInput * 0.65 + "," + SecondInput * 0.65 + "," + ThirdInput * 0.65 + ")";
    }
}