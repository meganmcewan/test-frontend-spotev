////////------JS for SPOTEV -----------/////////

/////------------prime number function -----------///////

function isPrime(aNum) {
  if (aNum > 1) {
    for (let i = 2; i < aNum; i++) {
      if (aNum % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
}

//////-----------------Count Loads on Current Date Function -------/////////

//--get the current date as a string--//
let Newdate = new Date();
let date = Newdate.getMinutes();
date = date.toString();
// date = date.slice(4, date.length - 23);

$(document).ready(function() {
  //-----check that user has already visted----/

  if (localStorage.loadTimes) {
    let userVisted = localStorage.loadTimes;
    let numVisted = userVisted.slice(0, userVisted.length - 2);
    let setDate = userVisted.slice(userVisted.length - 2, userVisted.length);

    //----if date set is today's date add 1 to their number of visits, test if Prime----//

    if (setDate === date) {
      if (md.mobile() && Number(numVisted) + 1 == 2) {
        alert("Welcome Back!");
        console.log(
          "user has loaded page " + (Number(numVisted) + 1) + " times!"
        );
        localStorage.loadTimes = Number(numVisted) + 1 + date;
      } else {
        console.log(numVisted);
        localStorage.loadTimes = Number(numVisted) + 1 + date;

        console.log(
          "user has loaded page " + (Number(numVisted) + 1) + " times!"
        );

        isPrime(Number(numVisted) + 1) ? console.log("Prime!") : null;
      }

      //-----otherwise restart count with new date-------//
    } else {
      localStorage.loadTimes = 1 + date;
      console.log("user has loaded page 1 time!");
    }
  } else {
    localStorage.loadTimes = 1 + date;
    console.log("user has loaded page 1 time!");
  }
});

////////------------Device Detection---------------/////////

var md = new MobileDetect(window.navigator.userAgent);

