let topic=[
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
];

let startDate= new Date();

//funion def
function setMonthAndDay(startMonth,startDay){
startDate.setMonth(startMonth-1,startDay);
startDate.setHours(0); 
startDate.setMinutes(0);
startDate.setSeconds(0);
}

//Call function to set Month and day
setMonthAndDay(2,21);