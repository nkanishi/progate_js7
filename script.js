// 1 コールバック関数を学ぼう
const printWanko = () =>{
    console.log("にんじゃわんこ");
};

const printHitsuji = () =>{
    console.log("ひつじ仙人");
};

const call = (callback) =>{
    console.log("コールバック関数を呼び出します。");
    callback();
};

call(printHitsuji);






// 2 コールバック関数とは
const printWanko = ()=>{
 console.log("にんじゃわんこ");
};

const call = (callback) =>{
    console.log("コールバック関数を呼び出します");
    callback();
};

call(printwanko);





// 3 コールバック関数を直接定義
const printWanko = () =>{
    console.log("にんじゃわんこ");
};

const call = (callback) => {
    console.log("コールバック関数を呼び出します");
    callback();
};

call(()=>{
    console.log("ひつじ仙人");
});





// 4 filterメソッド
cosnt call = (callback)=>{
    callback("にんじゃわんこ",14);
};

call((name,age)=>{
  console.log(`${name}は${age}歳です。`);
});





