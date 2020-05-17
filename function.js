
const btn = document.getElementById("execution")
btn.addEventListener("click", () => {
    //ユーザー入力値をゲット。  
    let fNum = document.getElementById("fizz").value;
    let bNum = document.getElementById("buzz").value;    
    const getOutput = document.getElementById("output");　//HTMLの要素を取得
    getOutput.textContent = null;　//ボタンを押す度に<p></p>を一旦クリアに
    const rg = /^([1-9]\d*|0)$/; //正規表現調べた。あまり読めない。これは整数のみを表現してる。
    for(let i = 1; i < 100; i++){         
        const newElement = document.createElement("p");　//<p></p>を追加したいので新しく作る
        if (fNum === "" || bNum === "" || rg.test(fNum) === false || rg.test(fNum) === false) {　//正規表現.test(value)はtrueを返すらしい
            getOutput.innerHTML = "整数値を入力してください。"; //１回だけ表示させたかったのでinnerHTMLを使ってみる。    
        } else if(i % fNum === 0 && i % bNum === 0) { //iが入力値で割り切れたら、その値の倍数なので表示させるという処理。
            newElement.textContent = "FizzBuzz " + parseInt(i); //新しいpタグの中の文章           
        } else if  (i % fNum === 0) { 
            newElement.textContent = "Fizz " + parseInt(i); 
        } else if (i % bNum === 0){
            newElement.textContent = "Buzz " + parseInt(i);  
        } 
        getOutput.appendChild(newElement);
    } 
});