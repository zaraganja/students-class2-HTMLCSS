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

        let y= mydate.toLocaleDateString().replaceAll("/",""); // "2/9/2025"
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
//trimStart()
//trimEnd()
const trimsample=()=>{
    let text1="    Hi World!    ";
    let comment= text1.trim();
    // console.log(text1);
    // console.log(comment);
    // console.log(text1.length);
    // console.log(comment.length);
    let tstart=text1.trimStart();
    let tend=text1.trimEnd();
    console.log(tstart);
    console.log(tend);
}

// ********padStart(lenghth,item to add)-padEnd()******* مقداری رو به اول و یا اخر استرینگ اضافه میکنه
// padStart(lenghth,item to add)
const padStartample=()=>{
    let text="5";
    let mytext= text.padStart(5,"higuys");
    console.log(mytext);

    let num= 3;
    let mystring= num.toString();
    let finaltxt= mystring.padStart(4,"0");
    console.log(finaltxt);
}

// padEnd() 
const padEndSample=()=>{
    let num=7;
    let mstring= num.toString();
    let final= mstring.padEnd(10,"1");
    console.log(final.length);
    console.log(final)
}

// repeat(تعداد تکرار) ****** 
const repeatSample=()=>{
    let text="   hi my dear friends";
    let lastComment= text.repeat(5);
    console.log(lastComment);
}

// replace()***** جایگزین میکنه
const replaceSample=()=>{
    let mytxt="please visit my website";
    let lastxt= mytxt.replace("my","Melorinet");
    // console.log(lastxt);

    // به i و g میگن regular expression 
    // g => glabal یعنی همه ش رو در نظر بگیر و فقط بر روی اولی اعمال نکن
    // insensitive => غیر حساس از حروف بزرگ و کوچک
    // sensitive => حساس از حروف بزرگ و کوچک
    let mytxt1="please visit My website my My";
    let lastxt1= mytxt1.replace("my","Melorinet");
    let lastxt2= mytxt1.replace(/my/ig,"Melorinet");
    let lastxt3= mytxt1.replace(/my/g,"Melorinet");

    console.log(lastxt3);

}

// ***** replaceAll()***** 2021 doesnt work on Internetexplorer
const replaceAllSample=()=>{
    let txt="فارسی زبان شیرین جهان است و این یک متن فارسی است";
    let result= txt.replaceAll("فارسی","پرشین");
    console.log(result);
}

// *************تبدیل استرینگ به آرایه *********
// [q,1,"de"] آرایه
// {name:"nilu",id:1} آبجکت
// text.split(",");
// text.split("") 

const splitSample=()=>{
    let txt="شماره۱ شماره۲ شماره۳";
    let result1= txt.split(",");
    let result2= txt.split(" ");
    let result3= txt.split("");

    console.log(result1);
    console.log(result2);
    console.log(result3)
}

// ******************متدهای جستجو در استرینگ ها 
// indexOf از صفر شروع به شمارش میکنه- lastindexOf()
// -1 => این خروجی یعنی هیچ مچی پیدا نکرده ازش indexof() and lastindexOf()
let sampleIndexof=()=>{
    let text="because the sky is high sky";
    let result= text.indexOf("because");//0 => index of b
    let result2= text.indexOf("sky");//12 => index of s (first sky)
    let result3= text.indexOf("shine")
    console.log(result3);

let res4= text.lastIndexOf("sky") //آخرین مچ رو در نظر میگیره برا موارد تکراری
console.log(res4);
}

// ************** search() ****
// اگر مچی پیدا نکنه خروجی -1 
const searchSample=()=>{
    let text="because the sky is high sky";
    let result= text.search("the");// ایندکس اولین حرف رو میده
    console.log(result);
} 

// *********** match()****** index - array ()اطلاعاتی اضافی تر از متدهای بالا رو میده
const matchSample=()=>{
    let inputsearch= "کفش اسپورت سفید سفید";
    let result= inputsearch.match("سفید").index;
    let result1= inputsearch.match(/سفید/g);
    // /i /g 
    console.log(result1);
}


// ********** includes()****** result is boolean
const includesSample=()=>{
    let inputsearch= "کفش اسپورت سفید سفید";
    let res= inputsearch.includes("کفش"); // برای مثال API کفش رو فراخوانی میکنی اگر true باشه
    let res1=inputsearch.includes("بلوز") //
    // if(res === true) برابره با if(res) 
    // if(res === false) برابره با if(!res) 
    
}

// مثال داخل پرانتزی
const exmapleImportant=()=>{
    let x= "1";
    let y=1;
    //  در جاواسکریپت به هیچ وجه از دو تا مساوی استفاده نکنید همیشه از سه تا مساوی استفاده کنید مساویه سوم به معنی برابر بودنه نوعه داده ی دو طرف هست
    if (x == y) {
        console.log("yes")
    }
    if ( x === y){
        console.log("okay equal")
    }
    // === به معنی بررسی هم مقدار و هم نوع داده هست
    // نوع داده مثلا استرینگ یا نامبر یا بولین ///
}


const getshoesData=()=>{
    // fetch ot axios
    //اینجا داده ی کفش رو از سمت سرور میگیریم
    // یعنی لیست کفش های اون فروشگاه رو از طریق API میگیریم
    console.log("list of shoes")
}

const getOutfitData=()=>{
    // fetch or axios 
    //لیست داده های لباس هارو میده از Apı
    console.log("list of outfit")
}

const SearchFunction=()=>{
    let inputsearch= "بلوز مردانه  ";
    let res= inputsearch.includes("کفش"); // برای مثال API کفش رو فراخوانی میکنی اگر true باشه
    let res1=inputsearch.includes("بلوز") //
    console.log("res:"+res +"and res1:"+ res1);
    if(res){
        getshoesData()
    }else
    if(res1){
        getOutfitData()
    }
    // if(res === true) برابره با if(res) 
    // if(res === false) برابره با if(!res) 
}

// **********startsWith()*****result is boolean
const sampleStartswith =()=>{
    let text="because the sky is high sky!";
    let res= text.startsWith("because");//true
    let res1=text.startsWith("the",8);//true
    let res2= text.startsWith("!");//false
    console.log(" res is :"+ res +" and res1 is:"+ res1 + " and res2 is:"+res2);
}

// *********endsWith(string,تعداد کل کاراکتر رو تعیین میکنی)******* result is boolean 
const sampleendsWith =()=>{
    let text="because the sky is high sky!";
    let res= text.endsWith("sky!");//true
    let res1=text.endsWith("because",7);//کل متن رو محدود میکنی به هفت کاراکترtrue
    let res2= text.endsWith("sky");//
    console.log(" res is :"+ res +" and res1 is:"+ res1 + " and res2 is:"+res2);
}

// ******************** JS Template string
// backtick ``
// template string
//template literals
//beloved child
const backtick=()=>{
    let fn="Parya";
    let ln="Tayefe";
    let mytext= `my full name is ${fn} ${ln} `;
    let mytxt= `<h3>${fn}${ln} </h3>`
    document.getElementById("emptySpace").innerHTML=mytxt;
    document.getElementById("emptySpace").style.color="red";
    document.getElementById("text").innerHTML=mytext;
    document.getElementById("text").style.color="red";
}

// **************JS numbers ***** 
//NaN => Not a Number یعنی عدد نیست
//undefiend =>تعریف نشده
//null => خالیه

const testNaN=()=>{
    let x= 100/"apple";
    let y;
    let z= null
    console.log(x);
    console.log(y);
    console.log(z);
    let m= 100/"10";// 10
    // return m
    console.log(m);
    let n= 2/0; //Infinity بی نهایت 
    console.log(n);
    let k= -2 / 0;//-Infinity منفی بی نهایت
    console.log(k);
}

// ************* toString()-toExponential()- toFixed()-toPrecision()-valueOf()-typeof()******* 
//typeof() نوع داده رو میده

// toString()
const texttoString=()=>{
    let x= 1234;
    let res= x.toString();
    let y= true;
    console.log(typeof(x));//number
    console.log(typeof(res));//string
    console.log(typeof(y));// boolean
    console.log(` x is : ${x} and res is ${res}`);
}

// toExponential(رقم اعشار) رند به بالا انجام میده بعد از ممیز رو -خروجی استرینگه
const testtoExponential=()=>{
    let x= 8.678;
    let y= x.toExponential(1);// 8.7
    let m= x.toExponential(4);// 8.6780e+0
    console.log(typeof(m));
}

//toFixed(تعداد رقم اعشاری) برای رند کردن مقادیر پولی استفاده میشه -خروجی استرینگه
const tofixedTest=()=>{
    let x= 8.678;
    let res1= x.toFixed(0);
    let res2= x.toFixed(2);
    let res3= x.toFixed(4);
    let res4= x.toFixed(6);
    console.log(typeof(res1));
    console.log(res2);
    console.log(res3);
    console.log(res4);
}

//toPrecision(تعداد کل رقم ها بدون در نظر گرفتن ممیز)خروجی استرینگه = تعداد کل عدد ها بدون در نظر گرفتن ممیز رو میده
// بعد از ممیز رو روند میکنه
const testtoPrecision=()=>{
    let x= 8.6789;
    let res1= x.toPrecision();
    let res2= x.toPrecision(2);
    let res3= x.toPrecision(4);
    let res4= x.toPrecision(6);;
    console.log(res1)
    console.log(res2)
    console.log(res3)
    console.log(res4)
    console.log(typeof(res1))  
}

//valueof()با یه تیر دو نشون = اون مقدار رو با نوعش برمیگردونه
// نوعش زیاد دقیق نیست ولی مقدار اون متغیر رو برمیگردونه 
const textValueof=()=>{
    let x= 123;
    let y= "123";
    let z= "hi";
    let b= true;
    console.log(x.valueOf());
    console.log(y.valueOf());
    console.log(z.valueOf());
    console.log(b.valueOf());   
}
// 2. xxxxxxxxx tasks
// ******************************توابعی که یک یا چندید ورودی دارن ----- 
const getDataFromAPI=(id,token,pageNum)=>{
    let API= `https://students.ir/${id}/${token}/${pageNum}`;
    // هر وقت این ورودی ها عوض بشن داده هایی که از سمت سرور برمیگرده هم عوض میشن
    console.log(API);
    console.log(`getting data of page ${pageNum}`);
}

// *****توابعی که باعث تبدیل متغیر ها به عدد میشن 
//Number();
//parseFloat()

//Number
const Numbertst=()=>{
    let x= "22";
    let y = Number(x);// 123 عدد
    let b= false;
    let b1= true;
    let z1= Number(b1);//1
    let z= Number(b);// 0
   // console.log(typeof(x));//string
    //console.log(typeof(y));//number
    console.log(typeof(z));//number
    console.log(z);
    console.log(z1);
}
    
//parsFloat()یک ورودی به عنوان استرینگ میگیره و خروجی اولین عدد رو میده
// نوع خروجی عدد هست 
const sampleParsefloat=()=>{
    let n1= 10;// 10
    let n2= "10.33";//10.33
    let result= parseFloat(n2);//10.33 number
    console.log(parseFloat("30.44 hello 50"));//30.44
    console.log(typeof(result));

}

// ********متدهای آرایه های جاواسکریپت-------- 

//  join()******آیتم های ارایه رو میگیری و کنار همدیگه قرار میدی وسطاش هرچی دلت خواست میذاری
const joinSample=()=>{
    const colors=["1","3","8"];
    console.log(colors);
    console.log(colors.join("*"));
    console.log(colors.join("*"));
    console.log(colors.join(" "));
    console.log(colors.join(""));
}

// pop()آخرین ایتم از ارایه رو میگیره و حذف میکنه
// روی ارایه اصلی تاثیر میگذارد 
const popSample=()=>{
    let myArr=["item1","item2","item3","item4"];
    let popresult= myArr.pop();
    console.log(popresult);
    console.log(myArr);
}

// push("newitem")یه آیتم رو به آخر ارایه اضافه میکنه 
// روی آرایه اصصلی تاثیر میذاره 
const pushSample=()=>{
    let myArr=["item1","item2","item3","item4"];
    let res= myArr.push("newITEM");//خروجی این خط حاوی ارایه جدیدم نیست اما حاوی طول ارایس
    console.log(res);
    console.log(myArr);
}

// shift()اولین آیتم از ارایه رو حذف میکنه و روی ارایه اصلی تاثیر میذاره
const shiftSample=()=>{
    let myArr=["item1","item2","item3","item4"];
    let res= myArr.shift();// item1
    console.log(res);
    console.log(myArr);
    myArr.shift();
    console.log(myArr);
    myArr.shift();
    console.log(myArr);
    myArr.shift();
    console.log(myArr);

}

// unshift("newItemm")
const unshiftSample=()=>{
    let myArr=["item1","item2","item3","item4"];
    let res22= myArr.unshift("newItemmm");//خروجی طول ارایه جدیده
    console.log(res22);
    console.log(myArr);//ارایه جدیده
}

const arrSample=()=>{
    let myArr=["item1","item2","item3","item4"];
    //  myArr[0]="item123";//قدرت نداره ارایه رو شیفت بده
    //  delete myArr[0];// به هیچ وجه اینکارو انجام ندید چون جای ا.ن ایتمو خالی میذاره
    console.log(myArr);
}


//کلا غلطه delete()*********hole خالی در ارایه ایجاد میکنه 

// concat()ادغام میکنهادغام کردنه چندین ارایه استفاده میشه
const concatSample=()=>{
    let myArr=["item1","item2","item3","item4"];
    let mynewArr= myArr.concat("item345");
    console.log(mynewArr);
    let myArr2=["item1344","item2555"];
    let myArr3=["1","44","66","99"];
    let FinalArr= myArr.concat(myArr2,myArr3);
    console.log(FinalArr)
}

//copyWithin(ایندکسی که قراره داخلش کپی انجام بشه,index from,to index)***
// طول آرایه اصلی رو عوض نمیکنه 
// به آرایه آیتم جدیدی اضافه نمیکنه 
// المنتهای آرایه به موقعیت دیگه کپی میشه 
const copyWithinSample=()=>{
    const fruites= ["banana","apple","kiwi","orange","mango"];
    fruites.copyWithin(2,1);
    console.log(fruites);
}

// flat()************ یک ارایه جدید ایجاد میکنه
const sampleFlat=()=>{
    const myarr=[[1,2],3,4,[5,6]];
    const newarr= myarr.flat();
    console.log(newarr);
}

// flatMap()*******
const flatmapSample=()=>{
    const myarr=[1,3,5,8,9,4];
    const newArr1= myarr.flatMap(x=>[x*10]);//[10,30]
    const newarr2= myarr.flatMap(x=>[x,x + "item"]);//[1,"1item",...]
    console.log(newArr1);
    console.log(newarr2);
}
// slice() یه قسمتی از ارایه رو جدا میکنه 
// splice() آیتم های جدیدی به ارایه اضافه میکنه 

const testsplice=()=>{
    const fruites= ["banana","orange","apple","mango","123"];
    //   fruites.splice(2,1,"Lemon","kiwi");
    // (start index,delete count,...);
    // fruites.splice(2,1,"Lemon","Kiwi");
    //  fruites.splice(2,2,"Lemon","Kiwi");
    // fruites.splice(2,3,"Lemon","Kiwi");

       fruites.splice(3,1);
       console.log(fruites);
    //   ;بدون ایجاد Hole آیتم رو حذف میکنه     
}

// slice()*******یک ارایه جدید میسازه 
const testslice=()=>{
    const fruites= ["banana","orange","apple","mango","123"];
   const newfruites= fruites.slice(2)
    console.log(newfruites);
     const newf2= fruites.slice(2,4);//(تا اینجا اما خودش نه ,از اینجا و خودش)
    console.log(newf2);
}

// toSpliced() ES2023 
const testtoSpliced=()=>{
    const months=["Jan","Feb","Mar","Apr"];
    // months.toSpliced(0,1)
    const newmonth= months.toSpliced(0,1);
    console.log(newmonth);
}

// ************** متدهای جستجو در ارایه ها -------
// indexOf(item,start to search"optional")
const testIndexOf=()=>{
    const fruites= ["banana","orange","apple","mango","123"];
    let position= fruites.indexOf("apple");
    let p= fruites.indexOf("apple",1)
    console.log(p);
}

// lastIndexOf(item,where to start serach"optional")
const testLastIO=()=>{
    const fruites= ["banana","orange","apple","orange","mango","orange","123"];
    const result= fruites.lastIndexOf("orange");
    const res2=fruites.indexOf("orange");
    console.log(result);
    console.log(res2);
}

// includes()-boolean خروجی
const testincludes=()=>{
    const fruites= ["banana","orange","apple","mango","123"];
  const hasOrNot=  fruites.includes("kiwi");//false
    console.log(hasOrNot);
}

// find(function)
const testFind=()=>{
    const nums=[4,9,16,25,29];
    let res= nums.find(myFunction)
    console.log(res);//25
}
function myFunction(value,index,array){
    return value > 18
}

// findIndex(function)
const testFindIndex=()=>{
    const nums=[4,9,16,25,29];
    // let res= nums.findIndex(x=>x>18)
     let res= nums.findIndex(myFunction)
    console.log(res);//3
}
function myFunction(value,index,array){
    return value > 18
}

// findLast(function)
const testfindLast=()=>{
    const temp=[27,42,28,30,40,42,25,40];
    let high= temp.findLast(myFunction);
    console.log(high);
}
function myFunction(value,index,array){
    return value > 40
}

// findLastIndex(function)**
const testfindLastIndex=()=>{
    const temp=[27,42,28,30,40,42,25,40];
    let high= temp.findLastIndex(x=>x>40);
    console.log(high);
}

// *************متدهای مرتب کردن آرایه ها ******

// sort() به ترتیب حروف الفبا مرتب میکنه ،حرف اول و یا عدد اول رو میگیره 
const testSort=()=>{
    const fruits= ["Banana","Orange","Apple","Mango"];
    fruits.sort();
    console.log(fruits);
    const nums=[22,3,44,18];
    nums.sort();
    console.log(nums)
}

//reverse()  آرایه رو از آخر به اول مرتب میکنه برعکسش میکنه
const testReverse=()=>{
    const fruits= ["Banana","Orange","Apple","Mango"];
    fruits.reverse();
    console.log(fruits); 
}

// toSorted()تفاوتش اینه که ارایه اصلی رو تغییر نمیده
const testtoSorted=()=>{
    const fruits= ["Banana","Orange","Apple","Mango"];
   const newFruites =fruits.toSorted();
    console.log(newFruites);
    const nums=[22,3,44,18];
  const nesNums=  nums.toSorted();
    console.log(nesNums)
}

// toReversed() تفاوتش اینه که ارایه اصلی رو تغییر نمیده
const testToReversed=()=>{
    const fruits= ["Banana","Orange","Apple","Mango"];
  const newFruits=  fruits.toReversed();
    console.log(newFruits); 
}

// ******تکرار ارایه های جاواسکریپت--- JS array iteration 
// forEach(function) اشاره میکنه به هر آیتم از آرایه
// اگر بخواهیم روی آیتم های یک ارایه تغییراتی انجام بدیم 
const foreachTest=()=>{
    const nums=[45,4,9,16,25];
    nums.forEach(myInnerFunction)
}
let newarray=[];
const myInnerFunction=(value,index,array)=>{
    let txt="";
    txt += value+"and" + index   //  => txt= txt + value +"<br>" + index
    newarray.unshift(txt);
    console.log(newarray);
}

// map()- faltMap() یک ارایه جدید ایجاد میکنه و ارایه اصلی رو تغییر نمیده
 const testMap=()=>{
    const nums=[45,4,9,16,25];
   const newarr= nums.flatMap((x)=>x*2)
   console.log(newarr)
    // nums.flatMap(mapinnerFunc)
 }
let newArr=[];
 const mapinnerFunc=(value,index,array)=>{
    let newitem= value * 2* index;
    newArr.unshift(newitem);
    console.log(newArr);
 }

//  filter() - برای پاس کردن یک تستی روی ارایه استفاده میشه
 const testfilter=()=>{
    const nums=[45,4,9,16,25];
    const over18value= nums.filter(testinnerFunc);
    console.log(over18value);//خروجی یک ارایه با شرطی که گذاشتی هست
 }
 const testinnerFunc=(value,index,array)=>{
    return value>18
 }

//  reduce() یک عملیاتی رو روی ارایه انجام میده و یک ارایه واحد ایجاد میکنه و تاثیری رو ارایه اصلی نداره
// از چپ به راست جستسجو رو انجام میده  
// میتونه مقدار اولیه هعمم بگیره 
const reduceTest=()=>{
    const nums=[45,4,9,16,25];
    let sum = nums.reduceRight(reduceInnerFunc,100);
    console.log(sum);
}
const reduceInnerFunc=(total,value,index,array)=>{
    return total + value
}

// reduceRight() تفاوتش اینه که از راست به چپ روی ارایه عملیات انجام میده


// چطوری یک ارایه رو از کوچک به بزرگ یا بزرگ به کوچک مرتب کنم؟

const sortedArrayFunc=()=>{
    let baseArray= [82,30,50,40,60];
    // let sortedarray1= baseArray.sort((a,b)=> a - b) //از کوچک به بزرگ
    let sortedarra2= baseArray.sort((a,b)=> b - a) //از بزرگ به کوچک
    console.log(sortedarra2);
    // console.log(sortedarra2);
}

// every() یک تستی روی ارایه انجام میده و خروجی بولین میده

const testEvery=()=>{
    const nums= [45,4,9,16,25];
    let allOverr18= nums.every(innertFuncEverey)
    console.log(allOverr18)//false
}

const innertFuncEverey=(value,index,array)=>{
    return value>18
}

// some() یه تستی رو روی ارایه انجام میده و بعضی از ایتم ها اگر تست رو رد کنن جوابش بر حسب اونه
 const testSome=()=>{
    const nums= [45,4,9,16,25];
    let someOver18= nums.some(someInnerFun)
    console.log(someOver18)//true
 }
 const someInnerFun=(value,index,array)=>{
    return value>18
 }

//  Array.from()
const makeArray=()=>{
    let newArr= Array.from("3edfgthkjkSDF");
    console.log(newArr)
}
// Arrayname.keys()
const ArrKey=()=>{
    const comments=["cmnt1","cmnt2","cmnt3","cmnt4"];
    const mykeys= comments.keys();
    console.log(mykeys);
    let text= "";
    for(let x of mykeys){
        text += x + "" //=> text= x+"and"
        console.log(text)
    }
}

// entries() کلید و ولیو هارو برمیگردونه
const entriesSample=()=>{
    const comments=["cmnt1","cmnt2","cmnt3","cmnt4"];
    const entriesİterator= comments.entries();//[key(index),value]
    console.log(entriesİterator);
    for(let x of entriesİterator){
        console.log(x)
    }
}

// with(index,new item) ES2023 یک مقدار جدید به ارایه اصلی اضافه میکنه جایگزین میکنه طول ارای عوض نمیشه

const withSample=()=>{
    const comments=["cmnt1","cmnt2","cmnt3","cmnt4"];
    const mycomments= comments.with(2,"perfect");
    console.log(mycomments);
}

// spread() یک متد نیست یک مفهوم روی آرایه هاس 
/// ... به سه نقطه میگن 
const spreadOfArr=()=>{
    const q1= ["jan","feb","mar"]
    const q2= ["apr","may","jun"]
    const q3= ["jul","aug","sep"]
    const q4= ["oct","nov","may"]
    const year= [...q1, ...q2, ...q3,...q4];// به ادامه ارایه قبلی ارایه بعدی رو اضافه میکنه
    console.log(year)
}

// Math.random() عدد رندوم بین صفر تا یک 
const CreateRandomNum=()=>{
    let num1= Math.random();
    // console.log(num1)
    let num2= Math.random()*10
    // console.log(num2)
    let num3 =Math.random()*11
    // console.log(num3)
    let num4= (Math.random()*100)+1+"qasdffjlj"
    console.log(num4)
    
}

//Boolean() تبدیل به نوع داده ی بولین میکنه
const changeToBoolean=()=>{
    let x1= 0;
   let result1= Boolean(x1)
//    console.log(result1) //false

   let x2 = 1;
   let result2= Boolean(x2);
//    console.log(result2) //true

   let x3= -0;
   let result3= Boolean(x3)
//    console.log(result3) //false

    let x4= null
    let result4= Boolean(x4)
    // console.log(result4) //false

    let x5= "false"
    let result5= Boolean(x5)
    // console.log(result5) //true چرا چون داخل استرینگم خالی نیست


    let x6= ""
    let result6= Boolean(x6)
    // console.log(result6) //false چرا چون داخل استرینگم خالی هست


    let x7= 10 /"hi"
    let result7= Boolean(x7)
    console.log(result7) // false


}

// یه مثال 
const alertMyAge=(age)=>{
    let alertValeu=(age < 18 ) ? "too younge" : "not too younge"
    alert(alertValeu)
    console.log(alertValeu)
}

// Nullish coasting operator ?? 
// اولین آرگیومنت رو برمیگردونه اگر اون آرگیومنت 
// null یا undefined
// نباشه 

const testNullish=()=>{
    let name = undefined;
    let text = "thats possible";
    let result = name ?? text;
    console.log(result);
}

// if else 
const ifElse=(age)=>{
    // let alertValeu=(age < 18 ) ? "too younge" : "not too younge"
    let alertV;
    if (age <18){
        alertV= "too younge"
    }else if(age >= 18 && age < 25 ) {
        alertV= "younge"
    }else {
        alertV= "not too younge"
    }
    alert(alertV)
    console.log(alertV)
}

// switch case 
const dayOfWeek=(input)=>{
    let day ;
    switch (input) {
        case 0:
            day = "شنبه"
            break;
        case 1:
            day ="یکشنبه"
            break;
        case 2:
            day= "دوشنبه"
            break;
    
        default:
    console.log(" day not found")
            break;
    }
    console.log(day)
}

// while and do while 
const testWhile=()=>{
    let i=0;
    while(i<5){
        console.log("i is lower than 5 and i is :"+i);
        i++ // i= i+1
    }

}

// ******************JS destructuring ******** 
// unpack array [] and objects {}

const destructTest=()=>{
    const person ={
        firstname:"zara",
        lastname:"ganji",
        age: 32
    }
    // Destructuring
    // let {firstname}= person;
    //  console.log(firstname);
    //  alert(lastname);

    //  let {age}=person;
    //  document.getElementById("text").innerText=age;
     let {lastname,age:birthday}=person;
     console.log(birthday +"and"+lastname);

}

// array destructuring 
const arrayDestruct=()=>{
    const fruites= ["Banana","Orange","Apple","Mango","Kiwi"];
    // Destructuring
    let [fruit1,fruit2, ,a,b]=fruites;
    // console.log(fruit1);
    // console.log(fruit2);
    // console.log(a);
    // console.log(b);

    let [f1,f2,...u]=fruites;
    console.log(u);
}

// ******JS Errors ******error handling
const sendDataToServer =()=>{
    try {
        throw "خطا در ارتباط با سرور";// برای ایجاد ارور اگه بخوای خودت ارور ایجاد کنی 
        const name="shiva";
        const code= "1234";
        console.log("send data to server:"+name + code);
        
    } catch (error) {
        alert(":خطایی رخ داد"+error)
    }
}

// ************************************ JS Module-> import ->react-next-react-native


// ********setTimeout={} - setInterval 

const setTimeoutTest=()=>{

// بعد از شش ثانیه لاگ رو فقط یکبار اجرا میکنه 
    setTimeout(() => {
        console.log("inside settimeout");
    
    }, 6000);
}

const setİntervalTest=()=>{
    // هر سه ثانیه یبار اجرا میکنه
    setInterval(() => {
        console.log("hi students")
    }, 3000);
}

// *********js Promise()***** "I promise a Result!"

// کدی که ممکنه اجراش طول بکشه و برای یک خروجی منتظره از پرامیس استفاده میکنه
// در گرفتن داده از سرور استفاده میشه 
const getDataWithPromise=(url)=>{
    return new Promise((resolve,reject)=>{
        fetch(url).then((response)=>{
            if(!response){
                // reject("http error !"+response.status)
                reject(`http error! ${response.status}`)
                
            }else{
                return response.json();
            }
        }).then((data)=> resolve(data)).catch((error)=>{
            reject(`network error : ${error}`)
        })
    })
}

const getData=()=>{
    getDataWithPromise('https://jsonplaceholder.typicode.com/posts/1').then((data)=>{
        console.log("داده ای که از سرور گرفتم"+data.title)
    }).catch((error)=>{
        console.log("خطایی رخ داد"+error)
    })
}

// ****** asyc await ***** اگر تابع از این نوع باشه یک پرامیس برمیگرده
//  باعث میشه تابع به صورت سینک یعنی هماهنگ اجرا بشه به این صورت که تا یک عملیاتی انام نشده تموم نشده بعدیه اجرا نشه
//  مثلا قبا از گرفتن داده از سرور نیاد جوابو از سرور نمایش بده 

const getmyData= async()=>{
    await fetch("https://jsonplaceholder.typicode.com/posts/1").then(response=>{
        console.log (response)
    }).catch((err)=>{
        console.log(err)
        alert(err)
    })
}

// ********** cookies ********* 
// name-value 
// document.cookie="username=zohre ; time= 18dec" 

































// مثال 
// git command ---------*****



