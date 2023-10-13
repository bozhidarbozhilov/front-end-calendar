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
    const firstWeek = document.getElementsByClassName("date");
    let currentDate = 1;
    console.log(firstWeek.length);
    for(let index = firstIndex; index < firstWeek.length; index++){
        firstWeek[index].innerText = currentDate;
        currentDate++;
    }
    const weekElement = document.createElement("div");
    weekElement.classList.add("week");
    calendarContainer.appendChild(weekElement);

    // for(let index = currentDate; index <= currentDate + 7; index++){
    //     const dayElement = document.createElement("div");
    //     dayElement.classList.add("date");
    //     weekElement.appendChild(dayElement);
    //     dayElement.innerText = currentDate;
    //     currentDate++;
        
    // }


}
