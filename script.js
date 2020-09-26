// TO-DO:
// - Data needs to stay on page after being refreshed

let container = document.getElementsByClassName('container');
let currentDay = document.getElementById('currentDay');
//console.log(currentHour);

const defaultData = {
  data: [],
};

for (let i = 0; i < 9; i++) {
  defaultData.data.push('');
}

const updateData = (i) => {
  const textArea = document.getElementById(i);
  const currentData = JSON.parse(window.localStorage.getItem('alldata'));
  currentData.data[i] = textArea.value;
  window.localStorage.setItem('alldata', JSON.stringify(currentData));
};

const init = () => {
  const main = document.getElementById('main');
  const storedData = JSON.parse(window.localStorage.getItem('alldata'));
  let dataToUse = storedData || defaultData;
  
  for (let i = 0; i < 20; i++) {
    let hourNum = 9 + i; // 9 or 10 or 11 ...
    let hourStr = hourNum.toString();
    if (hourStr.length === 1) { // if single digit
      hourStr = '0' + hourStr; // add 0 to the front
    }
    const hour = moment('2013-02-08T' + hourStr).format('LT')
    const currentHour = moment().hour();

    let colorClass = '';
    if(hourNum < currentHour) {
      colorClass = 'past';
    } else if (hourNum == currentHour) {
      colorClass = 'present';
    } else {
      colorClass = 'future';
    }

    const timeBlock = document.createElement('div');
    timeBlock.innerHTML = `
      <div class="container time-block ${colorClass}">
        <div class="row">
          <div class="col-2 hour text-right"><br>${hour}</div>
          <textarea
            class="col-9 w-100 description "
            id="${i}"
          >${dataToUse.data[i]}</textarea>
          <div class="col-1 saveBtn" onClick="updateData(${i})"><i class="far fa-save"></i></div>
        </div>
      </div>
    `;
    // textArea.addEventListener('onchange', updateData);
    
    main.appendChild(timeBlock);
  }
  window.localStorage.setItem('alldata', JSON.stringify(dataToUse));
};


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

// Changes timeblock color based on if it's in past, present, or future
const changeBlock = () => {

}

// Saves information to timeblock on local storage
function saveBlock() {

}

addDate();
init();