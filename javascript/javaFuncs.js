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
const getName=(id)=>{
console.log(id);
}

//  x ??=y (Nullish assignment) x ??=y =>means:  x = y if x =null or x= undefiend
// وای رو داخل ایکس قرار میده اگه ایکس 
// (null یا undefined)=> Nullish
// باشه 

const checkNullishAs=()=>{
    let x;
    console.log(x);
    let y= 10;
    x ??=y 
    console.log(x);
}


const DataTypes=()=>{

    //Numbers
    let l= 16
    let w=7.6

    //Strings
    let color="16";
    let name="Nilufar";

    //Booleans
    let x= true;
    let y=false;

    //object
    const person={fistname:"Zohre",lastname:"akbari",age:"20"};

    //Array 
    const colors=["red","green","blue"]
    const myArray=["name",19,{name:"zohre"}]

    //Date 
    const date= new Date("2025-1-25");
}

const testObjects =()=>{
    //ایجاد آبجکت
    //object
    const person ={
        firstname:"Nilufar",
        lastname:"delkeshan",
        age:20,
        eyecolor:"brown"
    }

    //ایجاد ابجکت به روش دوم
    // const person1={}
    // person1={
    // }

      //ایجاد ابجکت به روش سوم
      const person2= new Object();
      //add properties
      person2.firstname="mehdi";
      person2.lastname="ebrahimi";
      person2.age=20;
      
    //  console.log(person2.lastname);
    document.getElementById("emptySpace").innerText=person2.lastname;

    // console.log(person2["lastname"])
    // console.log(person2);
    // delete person2.age;
    // or 
    delete person2["age"];
    // console.log(person2);
      
    //nested objects آبجکت تو در تو
    const myObject={
        name:"sheida",
        age:20,
        favColors:{
            color1:"green",
            color2:"blue",
            color3:"brown"
        }
    }

    console.log(myObject);
    console.log(myObject.favColors.color1);
    console.log(myObject["age"]);
    console.log(myObject["favColors"]["color3"]);

}

const functionObject=()=>{
    const person={
        firstname:"zohre",
        lastname:"akbari",
        id:5554,
        fullname: function(){
            return(this.firstname +""+ this.lastname + ""+ this.id)
        }
    }
    // console.log(person.fullname());
    document.getElementById("emptySpace").innerText=person.fullname();

    // نمایش تک تک اجزای یک آبجکت 
    // for (let x in person){
    //     console.log(person[x]);
    // }

    const person22 ={
        firstname:"Nilufar",
        lastname:"delkeshan",
        age:20,
        eyecolor:"brown"
    }

    // حلقه برای آبجکت ها 
    for(let y in person22){
        console.log(person22[y])
    }

}

 //آرایه ها 
 const ArraySample =()=>{
    const myArr1= [
        "item1", //0
        "33", //1
        3444, //2
        "sheida" //3
    ]

    // json data 
    const DataFromServer=[
        {id:1,name:"product1"},
        {id:2,name:"product2"},
        {id:3,name:"product3"}
    ]

    // console.log(myArr1[3]);
    // console.log(DataFromServer)

    //ایجاد آرایه به روش دوم
    // const myArray= new Array()

    const person33={
        neme:"Melorin",
        age:4,
        city:"urmia"
    }
    // تبدیل آبجکت به آرایه
    const newArr= Object.values(person33);
    console.log(person33);
    console.log(newArr);

    //برای فقط ارایه های اگر بخ.اهیم اندازه ی یک آرایه رو بگیریم
    console.log(newArr.length) //3

    // برای آبجکت ها معنی نداره 
    console.log(person33.length) //undefiend


    // حلقه برای آرایه ها 
    for (let x=0 ;x< newArr.length; x++){
        console.log(newArr[x]);
    }


 }

 const createObjectWithFunction=()=>{
    // فرض کنید یک ساختار واحد از آبجکت داریم اما آن را برای بیشتر از یک نفر یا بیشتر از یک تعداد انسان نیاز داریم
    //منطقی نیست که به آن تعداد فرد آبجکت ایجاد کنید فرضا ده نفر که میشه ده تا آبجکت جدا 
    // راه حل اینه که یک ساختار واحد بسازیم و هرجا خواستیم با یک خط کد آن آبجکت را بسازیم 
    // ***
 }



























// مثال 
// git command ---------*****



