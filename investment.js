let data = {
  value: 6608.26,
  months: 12,
  years: 3,
  monthlyAport: 2000,
  initialValue: 0,
  finalValue: 0,
  monthValue: 0,
  fee: 1.01,
  profit: 0,
  lastProfit: 0,
  totalFee: 0 // Don't implement yet
};

console.log();
for (let i in data) {
  console.log(i + ' - ' + data[i]);
}

data.initialValue = data.value;
data.finalValue = data.value;
for (let i = 1 ; i < (data.months + 1) * data.years; i++) {
  data.lastProfit = data.finalValue;
  data.finalValue = parseFloat((data.finalValue * data.fee).toFixed(2));
  data.finalValue += data.monthlyAport;
  data.profit = ((data.finalValue - data.monthlyAport * i) - data.initialValue).toFixed(2);
}
data.lastProfit = (parseFloat((data.lastProfit * data.fee).toFixed(2))) - data.lastProfit;
data.monthValue = (data.finalValue - data.initialValue).toFixed(2);
console.log(`\nInicial - ${data.initialValue}`);
console.log(`Taxa - ${data.fee}`);
console.log(`Valor Final - ${data.finalValue}`);
console.log(`Valor Rendimento - ${data.profit}`);
console.log(`Valor Lucro Total - ${(data.finalValue - data.initialValue).toFixed(2)}`);
console.log(`Valor Mensal - ${(data.profit/12).toFixed(2)}`);
console.log(`Valor Último Rendimento Mensal - ${(data.lastProfit).toFixed(2)}\n`);
