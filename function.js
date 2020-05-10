function takeAction(fNum, bNum){
    for(var i=1; i < 100; i++){
        //ユーザー入力値をゲット。合ってるみたいだけどなぜループ内で変数を定義かよくわからない。
        fNum = document.getElementById("fizz").value;
        bNum = document.getElementById("buzz").value;
        var num1 = Number.isInteger(fNum);
        var num2 = Number.isInteger(bNum);
        var getOutput = document.getElementById("output");　//HTMLの要素を取得
        var newElement = document.createElement("p");　//<p></p>を追加したいので新しく作る

        if (fNum === "" || bNum === "" || !num1 || !num2){
            getOutput.innerHTML = "整数値を入力してください。"; //１回だけ表示させたかったのでinnerHTMLを使ってみる。
        } else if (i % fNum === 0 && i % bNum === 0) { //iが入力値で割り切れたら、その値の倍数なので表示させる。
            newElement.textContent = "FizzBuzz " + parseInt(i); //新しいpタグの中の文章           
        } else if  (i % fNum === 0) { 
            newElement.textContent = "Fizz " + parseInt(i); 
        } else if (i % bNum === 0){
            newElement.textContent = "Buzz " + parseInt(i);  
        }
        getOutput.appendChild(newElement); 
        
    } 
}