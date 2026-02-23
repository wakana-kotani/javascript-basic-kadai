const today = new Date();

//年の関数
const year = today.getUTCFullYear() + '年';

//月の関数
const month = today.getUTCMonth() +1 + '月';

//日の関数
const dayOfMonth = today.getUTCDate() + '日';

console.log(year,month,dayOfMonth);