// ES6
// اسم یک تابع باید یونیک باشه 
// arrow function 
const alertMyMsg =()=>{
    alert("hi Java Script")
    console.log("hi") //error handling and test project
}

// traditional functions
// function alertMyMsg(){
// }

const writeHello=()=>{
    alert("hello js!");
    document.getElementById("emptySpace").innerText="<b>hello students</b>";
    document.getElementById("emptySpace").innerHTML="<b>hello students</b>";
    document.getElementById("emptySpace").style.color="red";
    document.getElementById("emptySpace").style.textDecoration="line-through"
}

// تعریف متغیر 
// var myValue1
// let myValue2
// const myValue3 

// var : function-scoped => اگر در داخل یک تابع تعریف بشه فقط از داخل اون تابع میشه بهش دسترسی داشت
// و اگر بیرون از تابع تعریف بشه هم به صورت گلوبال میشه بهش دسترسی داشت
const exampleOfVar=()=>{
    var x=10;
    console.log(x);
    if(true){
        var x= 20; //redeclare
        console.log(x);
    }
    console.log(x);
}


// let : block-scoped => فقط داخل بلاک اسکوپ قابل دسترسی هست 
const exampleOfLet=()=>{
    let y= 10;
    if (true){
        let y= 20; //این متغیر جدا ازون y عه بالاست 
        console.log(y);
    }
    console.log(y);
}


// const : block-scoped=> عین let
// نمیتوانیم redeclare and reassign 
// براش انجام بدیم در داخل یک اسکوپ 
// اما اگر ارایه و یا آبجکت باشه میتونیم آیتم های داخلش رو تغییر بدیم
const exampleOfConst=()=>{
    const z=10;
    // z=20;ERROR
    // const z=20;ERROR
    console.log(z);
    const myObject= {name: "Mehdi",age: "20",job :"softwareEng"};
    myObject.name="Nilufar";
    myObject.age="18";
    myObject.job="IT Specialist";
    console.log(myObject.name +"and"+ myObject.age +"and"+ myObject.job);
    console.log(myObject);
} 

// data types : Number-String-Boolean(true or false)....
// numbers : 10.44  1001 
const SomeDataTypes=()=>{
    let num= 10;//number
    let num2 =30;
    // console.log(num);
    let myid = "10"; //string
    let string1= "name1";//string
    let string2='name2'//string
    // console.log(string1);
    // console.log(string2);
    let showModal= true;
    // console.log(showModal);

    console.log(myid + num2) // 1030 // به علاوه به معنی جمع نیست به معنی قرار گرفتن در کنار همدیگه هست چون یکیش استرینگ هست

    let x= (100 + 50) * 3;
    console.log(x);
}

// JAVASCRİPT SYNTAXES ***********************
const sample=()=>{
    let x= 10;
    // x += 5 //یعنی x=x+5 => x= 10 + 5 
    // x-= 5 //یعنی x=x-5 => x= 10-5
    x*=5 //x= x*5
    x /= 5 //x=x/5 
    x %=5 // x=x%5 باقی مانده شو بزار داخل ایکس
    x **=5 // x= x**5 
    console.log(x);
}

const test =()=>{
    let x= 15;
    x %= 7 
    console.log(x);
    let y= 7;
    y **= 2;
    console.log(y);
}

// مثلا یک داده ای از سرور گرفتید 
// میخواید ببینید صفره یا فالس که اگر صفر یا فالس بود
// یک کاری رو انجام بده 

const checkServerResponseData=()=>{
    let x= 40;
    let y= 10;
    x &&=y // اگر ایکس صفر یا فالس باشه نمیندازه داخل ایکس x=x && (x=y)
    console.log(x);
}

// x||=y 
const checkSyntax=(i)=>{
    let x= i;
    let y= 10;
    x ||= y ; //  به شرطی که ایکس فالسی باشه 
    //  فالسی یعنی چی falsy ( x = undefiend or x= null or x= 0 or x= NaN or x= "" or x= false  )
    // اگر شروط بالا یکیش صدق کنی وای داخل ایکس قرار میگیره 
    console.log(x)
}

// تابع با ورودی 
// اگر تابع ورودی داشته باشد حتما باید هنگام فراخوانی ورودی اش را بدهید سمت اچ تی ام 
const getName=(name)=>{
console.log(name);
}

//  x ??=y (Nullish assignment) 
// وای رو داخل ایکس قرار میده اگه ایکس 
// (null یا undefined)=> Nullish
// باشه 

// مثال 



