let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

for(let i = 0; i < 2; i++){
   let status = prompt("Введите обязательную статью расходов в этом месяце"),
      spend = prompt("Во сколько обойдется?");
}



let budget;

let appData = {
   budget: money,
   timeData: time,
   expenses: {
      status: spend
   },
   optionalExpenses: {},
   income: [],
   savings: false
}

budget = money/30;
alert("Твой бюджет на один день " + budget);