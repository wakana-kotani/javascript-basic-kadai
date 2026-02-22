//変数numの代入と出力
let num = 15;

//numが3と5の倍数の場合
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}

//numが3の倍数の場合
else if (num % 3 === 0) {
  console.log('3の倍数です');
}

//numが5の倍数の場合
else if (num % 5 === 0) {
  console.log('5の倍数です');
}

//それ以外のnumの場合
else {
  console.log(num);
}