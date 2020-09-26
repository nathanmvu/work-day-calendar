// TO-DO:
// - Data needs to stay on page after being refreshed

let container = document.getElementsByClassName('container');
let currentDay = document.getElementById('currentDay');

// Adds today's date to the top of the calendar
function addDate() {
  // Arrays of month and day names
  var months = ["January", "February", "March", "April", "May", "June", "July", 
                "August", "September", "October", "November", "December"];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var date = new Date();
  // Get month number
  var monthNum = date.getMonth();
  // Get day number
  var dayNum = date.getDate();
  var day = days[date.getDay()];
  var month = months[monthNum];
  if(dayNum == 1 || dayNum == 21 || dayNum == 31) {
    currentDay.textContent = day + ", " + month + ' ' + dayNum + "st";
  } else if(dayNum == 2 || dayNum == 22) {
    currentDay.textContent = day + ", " + month + ' ' + dayNum + "nd";
  } else if(dayNum == 3 || dayNum == 23) {
    currentDay.textContent = day + ", " + month + ' ' + dayNum + "rd";
  } else {
    currentDay.textContent = day + ", " + month + ' ' + dayNum + "th";
  }
}

// Adds timeblocks to calendar
function addBlock() {
  let timeblock = document.createElement('div');
  //container.push(timeblock);
}

// Changes timeblock color based on if it's in past, present, or future
function changeBlock() {

}

// Saves information to timeblock on local storage
function saveBlock() {

}

addDate();
addBlock();