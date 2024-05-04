// get current date(d/m/y) and time
const currentDate = new Date().getDate();
const dateMonth = new Date().setDate(currentDate + 30);
const month = new Date(dateMonth).getMonth();
const date = new Date(dateMonth).getDate();

console.log(date, month);
