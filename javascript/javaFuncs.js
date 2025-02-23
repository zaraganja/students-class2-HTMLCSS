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
    function PersonObj(first,last,age,eye){
        this.firstName= first;
        this.lastName= last;
        this.age= age;
        this.eyecolor= eye
    }
    const myPerson1= new PersonObj("sheida","zeinali",20,"brown");
    const myPerson2= new PersonObj("mehdi","ebrahimi",20,"brown")
    console.log(myPerson1);
    console.log(myPerson2)
 }

//  *********Build-in js constructores*********** 
//new Object() //new obj
// new Array() //new array
// new Map() // new Map   (set()-get()-has()-.size) یک ساختار داده هست به اسم مپ که متدهای خودش رو داره
// new Set() //new Set -no duplicated items-  add()-delete()- has()-clear()
// new Date() //new Date   getFullYear()-
// new RegExp() //new regex
// new Function() //new function

const exampleNobject=()=>{
    const myObject= new Object(); // const myObject= {}
    myObject.firstname="sahar";
    myObject.age="20";
    myObject.job="UI designer";
    console.log(myObject.firstName);
}

const exmapleNewArr=()=>{
    const personArr=new Array() // const productArr= []
    personArr[0]= "nilu";
    personArr[1]="delkeshan";
    personArr[2]="melorinet";
    console.log(personArr[1]);
    console.log(personArr.length);
}

const exampleNMap=()=>{
    const myMap= new Map();
    myMap.set('name','Zohre');
    myMap.set('age',16);
    myMap.set('job','IT eng');
    console.log(myMap); 
    const objKey= {id:1}; //کلیدم اینجا میتونه خودش یه آبجکت جدا باشه
    const objKey1= {num:3}
    myMap.set(objKey,"value that its key is an object");
    myMap.set(objKey1,"price")
    console.log(myMap);

    console.log(myMap.get('name')) //Zohre
    console.log(myMap.get('age'))
    console.log(myMap.get(objKey)) //"value that its key is an object"
    console.log(myMap.has("job")) //true
    console.log(myMap.has("occupation")) //false

    console.log(myMap.size);
}


const ExampleSet=()=>{
    // const mySet= new Set(); //اینجا یک ساختار داده ی ست میسازید
    //کالکشنی از مقادیر یونیک که مقادیر تکراری رو حذف میکنه
    // mySet.add(2);
    // mySet.add(5);
    // mySet.add("hello");
    // mySet.add("5");
    // console.log(mySet);
    // mySet.add({name:"mehdi"});
    // console.log(mySet);
    // const HasTwo= mySet.has(5);
    // console.log(HasTwo) //true
    // mySet.delete(5);
    // console.log(mySet.has(5))
    // mySet.clear();
    // console.log(mySet);

    //فرض کنید یک لیستی از شماره تماسهای کاربران گرفته اید اما نمیخواهید شماره تماسهای تکراری را در
    //تگ اچ تی ام هایتان و در وبسایتتان نمایش دهید چه راه حلی دارید؟
    // جواب؟ 
    const numbers= [22,11,22,33,44,44,5]; // هدف [22,11,33,44,5]
    console.log(numbers);
    const UniqueNumbers= new Set(numbers); // object set misaze 
    console.log(UniqueNumbers);
    const finalUniwquenumbersArr= [...new Set(numbers)];
    // rest of the item... >
    const finalUniwquenumbersArr2= [new Set(numbers)];
    console.log(finalUniwquenumbersArr);
    console.log(finalUniwquenumbersArr2);

}


const exampleDate=()=>{
    const currentDate=new Date();
    console.log(currentDate);
    const specificDate= new Date('2025-2-12');
    console.log(specificDate);
    const customDate = new Date(2024,8,20,14,30) //(year,month,day,hour,minute)
    console.log(customDate);

    const current= new Date();
    console.log(current.getFullYear());
    console.log(current.getMonth());
    console.log(current.getHours());
    console.log(current.getMinutes());
    console.log(current.getSeconds());
    // Date.now()

    
}

// گرفتن تایم استمپ الان 
    // get the current timestamp
    // یکی از کاربردهاش ایجاد ای دی یونیک هست 
    const timestamp=()=>{
        const ts=Date.now();
        console.log(ts)
    }

    const testDate=()=>{
        const mydate= new Date();
        let x= mydate.toDateString();// تاریخی رو میده که قابل خوندن برای کاربر باشه 
        console.log(mydate);
        console.log(x);

        let y= mydate.toLocaleDateString(); // "2/9/2025"
        console.log(y);

        let m= mydate.toLocaleTimeString();
        console.log(m);

        let iso=mydate.toISOString();
        console.log(iso)


        const date1= new Date("2024-09-20");
        const date2= new Date("2023-09-20");

        console.log(date1 > date2);
        console.log(date1 < date2);
    }
    // *********************
    // new Regexp() => regular expression => بیان منظم 
    // بیشترین کاربردش در بررسی امن بودن پسوردی که کاربر وارد میکنه هست 

    const testRegexp=()=>{
        // تعریف بیان منظم 
        // const regex = new RegExp('A');
         const regex = new RegExp('Hello','i');
        //  const regexx= /hello/;
        // const regex22 = new RegExp('Hello','g');

        // sensitive =>حساس به حروف کوچک و بزرگ new RegExp('A')
        // insensitive => حساس نیست به حروف کوچک و بزرگ (i)/  new RegExp('A','i')
        // const mytest1= regex.test('apple'); // boolean
        // const mytest2= regex.test('banana');// boolean
        // const mytest3= regex.test('Apple');// boolean
        // const mytes4= regex.test('Hello , world!');
        // console.log(mytes4);

        const testString= "world ,hello!,hello";
        const match = testString.match(regex);// [خروجی ارایه]با اطلاعات جزیی
        console.log(match)

        // const regexx= /hello/;
        // const text= "Hello,world!hello,again";
        // const m= regexx.test(text);
        // console.log(m)

        // ***************(g)global????

    }

    const validatePassword=()=>{
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const password = document.getElementById("passWord").value;
        // zohreh25z!X=> secure
        //1234566788
        // if(passwordRegex.test(password) === true) // این دو خط کد با هم برابره
          if(passwordRegex.test(password)) // این خط کد با خط بالایی برابره
            {
            alert("پسورد شما امن است")
        }else {
            alert("پسورد شما امن نیست")
        }
    }
    // *************************************new Function**** 
    // بری ایجاد تابع در زمان runtime

    const testNF=()=>{
        const add= new Function('a','b', 'return a+ b');
        // به صورت داینامیک یک تابع ایجاد کردیم
        let myresult1= add(2,3);
        let myr2= add("12","3");
        console.log(myr2);

    }

    const testNF2=()=>{
      
        const toUpperCase= new Function('str','return str.toLowerCase()');
        // toLowerCase() - toUpperCase()
        let result1= toUpperCase('HWLLOOO!');
        console.log(result1);
    }

    const testNF3=()=>{
        let APIdata= false; //فرض کنید اینو از سرور گرفتید
        const myFunction= new Function('input1','input2','return alert(input1+input2),console.log(input1+input2)');
        if (APIdata){
            myFunction('correct data',true)
        }else{
            myFunction('incorect data',false)
        }
    }

    // از لحاظ امنیت وبسایت از نوشتن new Function خودداری کنید 
    // مگر در مواردی که ورودی های آن حساس نباشد 
    // مگر در مواقع ضروری و داده های غیر حساس


    // **********************************Javascript Events************ 
    // onchange()
    // onclick()
    // onmouseover() 
    // onmouseout()
    // onkeydown()
    // onload() 

    // ******onchange() 
    const handleCahnge=()=>{
        alert("changing");
        let userText= document.getElementById("inputText").value;
        console.log('متن کاربر:'+userText);
    }

    // onclick()**** 

    const handleMouseOver=()=>{
        document.getElementById("mouseover-text").style.backgroundColor="lightblue";
        document.getElementById("status").innerText="ماوس بر روی div"
    }

    const handleMouseOut=()=>{
     document.getElementById("mouseover-text").style.backgroundColor="";
        document.getElementById("status").innerText="ماوس کنار رفت"
    }

     // onmouseover() *****
    // onmouseout()******
    const sendInputData=()=>{
        console.log("sending data to server......");
    }
 // onkeydown()*****
    const hendleKeyDown=(event)=>{
        alert(event.key);
        if(event.key === "Enter"){
            sendInputData();
        }else{

        }
    }

    const getDataFromServer=()=>{
        console.log("getting data from server......")
    }
// onload() *****
// window.onload= function(){
//     alert(" به وبسایت من خوش آمدید")
//     getDataFromServer();

// }

// **************************************معرفی انواع strings****************************** 
//( "" , '') and (``) // تفاوت زیادی بین این دو گروه وجود داره با اینکه هر دو استرینگ هستن
// `` => backtick - templateString 
// ``=> نوعش استرینگ ``  

const testTemplateString=()=>{
    let x=244;
    let name =  `${x} is a number or string?`;
    console.log(name);
    // *** نشان دادن کدهای من --- 
}

// *************متد های string  ها******* 
 // length
  const lengthExample =()=>{
    let text1= "abcdefghi nhbcsbo";
    let mylength= text1.length;
    console.log(mylength);
  }

  //charAt
  const charAtExample=()=>{
    let text2= "HELLO WORLD";
    let result= text2.charAt(6);
    console.log(result);
  }

  //charCodeAt=> utf-16 (integer 0 - 65535)
const charCodeAtExample=()=>{
    let text3= "Hello friends";
    let result= text3.charCodeAt(2);
    console.log(result);
}

//at() => 2022
const atExample=()=>{
    let text4="Melorinet";
    let result = text4.at(-2);
    let result1 = text4.at(4);
     console.log(result);
    let result2= text4[3];
    // console.log(result2);
}

// ********برای گرفتن قسمتی از استرینگ ها ******* 
// slice(Start,end) =>> آخرین کاراکتر رو بهت نمیده
// substring(Start,end) آخرین کاراکتر رو بهت نمید
// substr(start,length) => deprecated

//slice()
const sliceExample=()=>{
    let txt1= "AppleIdie tMacSystem";
    let result1= txt1.slice(0,5);
    // console.log(result1);
    // اگر فقط یک مقدار بگیرد استرینگ را از اون ایندکس نصف میکند و نصف دوم را به ما میدهد
    let result2= txt1.slice(4);
    // console.log(result2);
    let result3= txt1.slice(-7,-5)
    console.log(result3);
}

//substring()
// عین slice()
// این هک کاراکتر آخر رو تحویل نمیده
// اما منفی نمیگیرد 
// اگر مقدار منفی دهیم آن مقدار را صفر تلقی میکند
const substringExample=()=>{
    let txt2="APPLEbANANAkiwi";
    let result1= txt2.substring(7,0); // ok 0-7
    let result2= txt2.substring(0,7); // ok 0-7
    console.log(result2);
}

// substr()
// deprecate شده منسوخ
// same as slice()

const substrExample=()=>{
    let txt3="APPLEbANANAkiwi";
    let result = txt3.substr(7,6); // دومین عدد طول داده ی برگردانده شده است
    console.log(result);
}

// **************** toUpperCase(), toLowerCase()******* 
// Uppercase=> H,M,R حروف بزرگ انگلیسی Capslock
//LowerCase => h,m,r 

const exampleFunc=()=>{
    let txt="hello my students";
    let txt1="HI THERE HOW ARE YOU";
    let result= txt.toUpperCase();
    // document.getElementById("status").innerText=result;
    // console.log(result);
    // alert(result);
    let result2= txt1.toLowerCase();
    console.log(result2)
}

// ***concat()*****  دو تا استذینگ رو ادغام میکنه
const concatExample=()=>{
    let txt1="I have";
    let txt2= "20 years old";
    let finaltxt= txt1.concat(txt2);
    document.getElementById("status").innerText= finaltxt;
    document.getElementById("status").style.color="red";
}

// trim()******* فاصله اضافی رو از هر دو طرف استرینگ پاک میکنه








    













// مثال 
// git command ---------*****



