let money, time;
function start (){
    money = prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while (isNaN(money) || money==='' || money===null){
        money = prompt("Ваш бюджет на месяц?");
    }
}
start()

let appDate ={
    budjet: money,
    timeDate: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings: false,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++) {
            let consumption = prompt("Введите обязательную статью расходов в этом месяце");
            let cost = prompt("Во сколько обойдется?");
            if( (typeof(consumption))==='string' && (typeof(consumption)!=null) &&(typeof(cost)!=null)&& consumption!=''&& cost!=null && consumption.length<50)
            appDate.expenses[consumption]=cost;
            
        }    
    },
    detectDayBudget: function (){
        appDate.moneyPerDay=appDate.budjet/30
        let budjetForOneDay = alert('бюджет на 1 день '+(appDate.moneyPerDay));
    },
    detectLevel: function(){
        if(appDate.moneyPerDay<100){
            console.log("min level")
        }else if (appDate.moneyPerDay>100 && appDate.moneyPerDay<1000){
            console.log("middle level")
        }else if (appDate.moneyPerDay>1000){
            console.log('hight level')
        }else {
            console.log("Произошла ошибка")
        }
    },
    chooseOptExpenses: function(){
        for (let i =1; i < 4; i++) {
            opt = prompt("Статья необязательных расходов?");
            appDate.optionalExpenses[i]=opt;
        }
    },
    chooseIncome: function(){
        let items=prompt("Что принесет дополнительный доход?(запиште через запятую");
        if (isNaN(items) && typeof(items)===null && items===''){
            items=prompt("Что принесет дополнительный доход?(запиште через запятую");
        }
        appDate.income=items.split(', ');
        appDate.income.push(prompt('Что-то еще?'));
        appDate.income.sort();
    }
        
  
};






