const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  // 入力した日付をハイフンで区切って配列で取得
  const inputDate = document.querySelector('input').value.split("-");
  // 「あの日」の日付オブジェクトを生成
  const beforeDate = new Date(inputDate[0], (inputDate[1] - 1), inputDate[2]);

  // 今日までの経過時間を計算して表示
  const diffdate = dateCalc(beforeDate);

  const result = document.getElementById('result');
  result.textContent = `これだけ過ぎたよ : ${diffdate}日`;
});

function dateCalc(beforeDate) {
  const today = new Date();

  // 日付の差分をミリ秒で計算
  const diffMs = today.getTime() - beforeDate.getTime();
  // ミリ秒（小数点以下切り捨て）を日付に変換
  // 変換の計算式 : ミリ秒/(1000ミリ秒*60秒*60分*24時間）
  const diffDate = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return diffDate;
}