// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let result = document.querySelector('p#result');
let spankaisu = document.querySelector('span#kaisu');
let spananswer = document.querySelector("span#answer");

hantei();
kaisu++;
hantei();
kaisu++;
hantei();
kaisu++;
hantei();


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する

  //kaisu++;
  let yoso = 4;

  spankaisu.textContent = (kaisu);
  spananswer.textContent = (yoso);



  if(yoso === kotae){
    result.textContent = ("正解です。おめでとう！");
}else if(kaisu == 4){
    result.textContent =("まちがい. 残念でした答えは" + kotae + "です.");
}else if(kaisu > 3){
    result.textContent =("答えは" + kotae + "でした。すでにゲームは終わっています。");
}else if(yoso !== kotae){
    if(yoso > kotae){
        result.textContent = ("まちがい。答えはもっと小さいです。");
    }else{
        result.textContent = ("まちがい。答えはもっと大きいです。");
    }
}
}
  
  
  // 課題3-1: 正解判定する
 
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール