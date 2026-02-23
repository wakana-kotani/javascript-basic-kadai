const today = new Date();

//年の関数
const year = today.getFullYear() + '年';

//月の関数
const month = today.getMonth() +1 + '月';

//日の関数
const dayOfMonth = today.getDate() + '日';

console.log(year + month + dayOfMonth);