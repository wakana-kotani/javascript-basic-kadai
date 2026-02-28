//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

//textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

//ボタンをクリックされた時のイベント処理を実行する
btn.addEventListener ('click', () => {
  //テキストの変更
  text.textContent = 'ボタンをクリックしました'
});
