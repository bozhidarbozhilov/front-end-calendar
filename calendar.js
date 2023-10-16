const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
(function calendar(){
    let currentDate = new Date();
    let currentMonth = document.getElementById("month-name").innerText;
    let currentMonthIndex = monthNames.indexOf(currentMonth);
    let currentYear = document.getElementById("year-value").innerText;
    const generateBtn = document.getElementById("current-month-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const calendarContainer = document.getElementById("calendar-container");
    const namesContainer = document.getElementById("names-container");
    generateBtn.addEventListener("click", ()=>{
        generateBtn.style.display="none";
        calendarContainer.style.display="inline";
        namesContainer.style.display="inline";
        fillMonth(currentDate.getMonth(), currentDate.getFullYear());
    })
    prevBtn.addEventListener("click",()=>{
        currentMonth = document.getElementById("month-name").innerText;
        currentMonthIndex = monthNames.indexOf(currentMonth);
        currentYear = document.getElementById("year-value").innerText;
        let newMonth;
        let newYear;
        if(currentMonthIndex === 0){
            newMonth = 11;
            newYear = Number(currentYear) - 1;
        }else{
            newMonth = currentMonthIndex - 1;
            newYear = currentYear;
        }
        refreshContent();
        fillMonth(newMonth, newYear);
    });
    nextBtn.addEventListener("click",()=>{
        currentMonth = document.getElementById("month-name").innerText;
        currentMonthIndex = monthNames.indexOf(currentMonth);
        currentYear = document.getElementById("year-value").innerText;
        console.log(currentMonth);
        let newMonth = currentMonthIndex + 1;
        let newYear;
        if(newMonth === 12){
            newMonth = 0;
            newYear = Number(currentYear) + 1;
        }else{
            newYear = currentYear;
        }
        
        refreshContent();
        fillMonth(newMonth, newYear);
    });
}
)();

function refreshContent(){
    const generatedContent = document.getElementById("generated-tags");
    generatedContent.innerHTML='';
    const markedDates = document.getElementsByClassName("pn-month");
    Array.from(markedDates).forEach(el=> el.classList.remove("pn-month"));
    
}

function fillMonth(month, year){
    //refreshContent();
    const monthEl = document.getElementById("month-name");
    const yearEl = document.getElementById("year-value");
    const generatedContent = document.getElementById("generated-tags");
    monthEl.innerText = monthNames[month];
    yearEl.innerText = year;
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstIndex = firstDay.getUTCDay();
    const lastIndex = lastDay.getUTCDay();
    const firstWeek = Array.from(document.getElementsByClassName("date"));
    const monthLength = daysInMonth(month, year);
    const prevMonthLength = daysInMonth(month-1, year);
    let currentDate = 1;
    const previousMonthSlice = prevMonthLength - firstIndex + 2;
    let firstWeekDay = new Date(year, month - 1, previousMonthSlice).getUTCDate();
    // fill the begining dates from previous month
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
    let dayCounter = 0
    for(let i = currentDate; i <= monthLength; i++){
        if(dayCounter %7 == 0){
            weekEl = document.createElement("div");
            weekEl.classList.add("week");
            generatedContent.appendChild(weekEl);
        }
        const dayEl = document.createElement("div");
        dayEl.classList.add("date");
        dayEl.innerText = currentDate++;
        weekEl.appendChild(dayEl);
        dayCounter++;
    }
    // fill last week with next month days
    if(lastIndex < 7){
        const allWeeks = document.getElementsByClassName("week");
        const lastWeek = allWeeks[allWeeks.length - 1];
        for(let i = lastIndex + 1; i < 7; i++){
            const dayEl = document.createElement("div");
            dayEl.classList.add("date");
            dayEl.classList.add("pn-month");
            dayEl.innerText = i - lastIndex;
            lastWeek.appendChild(dayEl);
        }
    
    }
}
function daysInMonth (month, year) {
    return new Date(year, month+1, 0).getDate();
}
