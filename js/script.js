var display = document.getElementById("display");
function passval(val) {
  console.log(val);
  display.value += val;
}

// It it was done using e it would be like this
// function passval(e){
//     console.log(e.value)
//It is also correct but this is actually more efficient
// }

//Clearing the display
function clearscr() {
  display.value = "";
}
//Solving the value
function solve() {
  try {
    let x = document.getElementById("display").value;
    //we get the input from user and is assigned in x
    let y = eval(x);
    //the input is evaluated
    //document.getElementById("ans").style.color = "#ff0000";

    if (typeof y === "undefined") {
      //alert("Please insert value !");
      document.getElementById("display").style.color = "#ff0000";
      document.getElementById("display").value = " Please insert value !";
    } else if (isNaN(y)) {
      //alert("Mathematical Error");
      document.getElementById("display").style.color = "#ff0000";
      document.getElementById("display").value = " Mathematical Error !";
    } else {
      document.getElementById("display").style.color = "green";
      document.getElementById("display").value = "=" + y; //the soln is printed in screen
    }
  } catch (err) {
    //alert('Invalid !');
    document.getElementById("display").style.color = "#ff0000";
    document.getElementById("display").value = " Invaild ! ";
  }
}

// function solve() {
//   var x = display.value;
//   y = eval(x);
//   display.value = y;
// }
