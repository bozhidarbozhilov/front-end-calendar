const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
(function calendar(){
    let currentDate = new Date();

    fillCurrentMonth(currentDate);
}
)();

function fillCurrentMonth(date){
    const month = date.getMonth();
    const year = date.getFullYear();
    const monthEl = document.getElementById("month-name");
    const yearEl = document.getElementById("year-value");
    const calendarContainer = document.getElementById("calendar-container");
    monthEl.innerText = monthNames[month];
    yearEl.innerText = year;
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const firstIndex = firstDay.getUTCDay();
    const lastIndex = lastDay.getUTCDay();
    const firstWeek = Array.from(document.getElementsByClassName("date"));
    const monthLength = daysInMonth(date.getMonth(), date.getFullYear());
    let currentDate = 1;
    let firstWeekDay = new Date(date.getFullYear(), date.getMonth() - 1, -(firstIndex-1)).getUTCDate();
    
    // fill the begining dates
    for(let i = 0; i < firstIndex; i++){
        firstWeek[i].classList.add("pn-month");
        firstWeek[i].innerText = firstWeekDay++;
    }

    // fill first week
    for(let i = firstIndex; i < 7;i++){
        firstWeek[i].innerText = currentDate++;
    }

    // fill the rest of the month
    let weekEl;
    for(let i = 0; i < monthLength; i++){
        if(i%7 == 0){
            weekEl = document.createElement("div");
            weekEl.classList.add("week");
            calendarContainer.appendChild(weekEl);
        }
        const dayEl = document.createElement("div");
        dayEl.classList.add("date");
        dayEl.innerText = currentDate + i;
        weekEl.appendChild(dayEl);
    }
    const allWeeks = document.getElementsByClassName("week");
    const lastWeek = allWeeks[allWeeks.length - 1];
    for(let i = lastIndex + 1; i < 7; i++){
        const dayEl = document.createElement("div");
        dayEl.classList.add("date");
        dayEl.classList.add("pn-month");
        dayEl.innerText = i - lastIndex;
        lastWeek.appendChild(dayEl);
    }


;

}
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}
