const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

let currentDate = new Date();

function generateCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const today = new Date();

    document.getElementById('month-year-display').textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const datesContainer = document.getElementById('dates');
    datesContainer.innerHTML = '';

    for (let i = 0; i < firstDay; i++) {
        datesContainer.innerHTML += `<div></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateDiv = document.createElement('div');
        dateDiv.textContent = day;

        if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
            dateDiv.classList.add('is-today');
        }

        datesContainer.appendChild(dateDiv);
    }
}

document.getElementById('prev-year').addEventListener('click', () => {
    currentDate.setFullYear(currentDate.getFullYear() - 1);
    generateCalendar(currentDate);
});

document.getElementById('next-year').addEventListener('click', () => {
    currentDate.setFullYear(currentDate.getFullYear() + 1);
    generateCalendar(currentDate);
});

document.getElementById('prev-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate);
});

document.getElementById('next-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate);
});

generateCalendar(currentDate);