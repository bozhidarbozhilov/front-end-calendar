(function calendar(){
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    let currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const monthEl = document.getElementById("month-name");
    const yearEl = document.getElementById("year-value");
    monthEl.innerText = monthNames[month];
    yearEl.innerText = year;
}
)();