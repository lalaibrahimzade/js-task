
//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR

// full name numunesi
//1) AD soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin
//2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin
//3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin


//*******BOSLUQLARA GORE SPLIT EDILMIS VERSIYA:
// let fullName = 'Lala Ibrahimzade Tahir' 
// let separateArr=fullName.split(' ');
// let elemntFir=separateArr.slice(0,1);
// let elemntSec=separateArr.slice(1,2);
// let elemntThi=separateArr.slice(2,3);
// let joinElem=elemntSec.concat(elemntFir, elemntThi);
// let makeString=joinElem.toString();
// console.log(separateArr);
// console.log(separateArr.length);
// console.log(elemntFir);
// console.log(elemntSec);
// console.log(elemntThi);
// console.log(joinElem);
// console.log(makeString);



//*******HERFLERE GORE SPLIT EDILMIS VERSIYA:
// let fullName = 'Lala Ibrahimzade Tahir'
//    const letters = fullName.split('');
//    letters.forEach((letter, index) => {
//      console.log(`herfler: ${letter}, Index: ${index}`);
//   });

//   const middlePart = letters.slice(5, 17);
//   const firstPart = letters.slice(0, 5);
//   const lastPart = letters.slice(17);
  
//   const result = middlePart.concat(firstPart, lastPart).join('');
  
//   console.log(result);

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....
let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7];

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

//  let stringArr=arr.toString();
//  let repeatFive=stringArr.match(/5/gi);
//  let repeatTimesfive=repeatFive.length;
//  console.log(stringArr);
//  console.log(repeatFive);
// console.log(`arraydeki 5 reqeminin tekrarlanma sayi: ${repeatTimesfive}`);

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

// let sum = arr.reduce(function(a, b){
//   return a + b;
// });
// console.log(`arraydeki butun reqemlerin cemi: ${sum}`);

//6) arrayda tekrar olunan reqemleri artan sira ile duzun

// let data =  arr.sort();
// console.log(data);

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin

// let stringArray=arr.toString();
// let maxArr=(Math.max(...arr));
// let repeatSeven=stringArray.match(/7/gi);
// let repTimes=repeatSeven.length;
// console.log(`arraydeki en boyuk reqem: ${maxArr}`);
// console.log(`arraydeki en boyuk reqemin tekrarlanma sayi: ${repTimes}`);


//8) Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin

// max=10;
// min=1;
// let randomValue= Math.floor(Math.random() * (max-min + 1) + min);
// let valueIncludes=arr.includes(randomValue);
// console.log(`1-den 10-a kimi olan random eded: ${randomValue}`);
// console.log(`array-de random ededin olmagi: ${valueIncludes}`);

//9) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Murad adinda 5 herf var ve 5 arrayda var

// let myName="Lala";
// let lengthName=myName.length;
// let nameIncludes=arr.includes(lengthName);
// console.log(`adimdaki herflerin sayi: ${lengthName}`);
// console.log(`arrayde adimdaki herfin olmagi: ${nameIncludes}`);

// 10) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

// const result = arr.map((number, index) => {
//   if (number % 3 === 2) {
//     return { number, index };
//   }
// });
// const value = result.find((item) => item !== undefined);
// let reqem=value.number;
// let reqIndex=value.index;

// if (value) {
//   console.log(`axtarilan reqem: ${reqem}, İndex: ${reqIndex}`);
// } else {
//   console.log(`axtardiginiz reqem yoxdur`);
// }

// 11) arraydaki en boyuk reqemin ilk indexini tapin

// let stringArray=arr.toString();
// let maxArr=(Math.max(...arr));
// let repeatSeven=stringArray.match(/7/gi);
// let indexOfSeven=arr.indexOf(7);
// console.log(`arraydeki en boyuk reqem: ${maxArr}`);
// console.log(`array-de olan reqemler:
// ${arr}`);
// console.log(`en boyuk reqem olan ${maxArr}-in ilk indexi: ${indexOfSeven}`);


// 12) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

// let indexFour = [];
// let element = 4;
// let indexes =arr.indexOf(element);
// while (indexes !== -1) {
//   indexFour.push(indexes);
//   indexes = arr.indexOf(element, indexes + 1);
// }
// console.log(`4 reqeminin indexleri:(${indexFour})`)

//13) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

// let indexKicik=arr.indexOf(5);
// let indexBoyuk=arr.lastIndexOf(5);
// console.log(`5 reqeminin en kicik indexi ${indexKicik}, en boyuk indexi ${indexBoyuk}-dir`)

//14) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin

// let arrNew = [];
// for (let i = 0; i < arr.length; i++) {
//   if(arr[i]>2){
//     arrNew.push(arr[i]);
//   }
// }

// let arrUzun=arr.length-arrNew.length;
// console.log(`2-den boyuk olan reqemlerden yaradilmis array: arrNew=[${arrNew}] ve 
// ilk array ile yeni arrayin uzunluqlari ferqi:${arrUzun}`);

//15) 7 reqeminin indexleri cemini tapin.

// let indexSeven = [];
// let element = 7;
// let indexes =arr.indexOf(element);
// while (indexes !== -1) {
//   indexSeven.push(indexes);
//   indexes= arr.indexOf(element, indexes + 1);
// }
// let sum = indexSeven.reduce(function(a, b){
//   return a + b;
// });
// console.log(`7 reqeminin indexleri (${indexSeven}) ve cemleri ${sum}`);

/////////////////////////////////////////////////////
let arr2 = [
  {
    name:'test',
    key:1
  },
  {
    name:'task',
    key:2
  },
  {
    name:'tanqo',
    key:3
  },
  {
    name:'like',
    key:4
  },
  {
    name:'task',
    key:5
  },
  {
    name:'trust',
    key:6
  },
  {
    name:'test',
    key:7
  },
  {
    name:'last',
    key:8
  },
  {
    name:'tanqo',
    key:9
  },
  {
    name:'elephant',
    key:10
  },
  {
    name:'love',
    key:11
  },
  {
    name:'small',
    key:12
  },
  {
    name:'little',
    key:13
  },
]


//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16) arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

// let arr3 = arr2.filter((startwithT) => startwithT['name'].startsWith('t'));
// console.log(`t herfi ile baslayan sozlerden ibaret array:`); 
// console.log(arr3);


// 17) arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini 

// let arr4 = arr2.filter((endstwithT) => endstwithT['name'].endsWith('t'));
// console.log(`t herfi ile biten sozlerden ibaret array:` );  
// console.log(arr4);

// 18) arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

// let arr5 = arr2.filter((endstwithT) => endstwithT['name'].startsWith('t') && endstwithT['name'].endsWith('t'));
// console.log(`t herfi ile baslayan ve biten sozlerden ibaret array:`); 
// console.log(arr5);

// 19) arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// let arr6 = arr2.filter((endstwithT) => endstwithT['name'].endsWith('e'));
// const arr7= new Array(arr6.length).fill("SuperDev");
// console.log(`"name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyen array:`)
// console.log(arr7);


// 20) arr2 de "name"-i en uzun olan obyektin key-i ni tapin

// let longestName = "";
// let longestKey = 0;
// arr2.forEach((item) => {
//   if (item.name.length > longestName.length) {
//     longestName = item.name;
//     longestKey = item.key;
//   }
// });
// console.log("En uzun name: " + longestName);
// console.log("En uzun name'in key'i: " + longestKey);

 

// 21) arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin

// let longestNameIndex = -1;
// let longestNameLength = 0;
// arr2.forEach((item, index) => {
//   if (item.name.length > longestNameLength) {
//     longestNameLength = item.name.length;
//     longestNameIndex = index;
//   }
// });

// let indexSquare = longestNameIndex **2;
// console.log("En uzun name'in indexi: " + longestNameIndex);
// console.log("En uzun name'in indexinin kvadrati: " + indexSquare);

// 22) arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.

// let newArray = arr2.filter(item => item.name.length === 4);
// console.log(newArray);

// 23) arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin

// let maxKey = arr2.reduce((max, item) => (item.key > max ? item.key : max), 0);
// let objectWithMaxKey = arr2.find(item => item.key === maxKey);
// let objectName=objectWithMaxKey.name;
// console.log("En boyuk key: " + maxKey);
// console.log("En boyuk key'-in 'name'-i: " + objectName);


// 24) arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.

// let indexesWithTwoLs=[];
// arr2.forEach((item, index) => {
//   let lCount = item.name.split('l').length - 1;
//   if (lCount === 2) {
//     indexesWithTwoLs.push(index);
//   }
// });
// console.log("terkibinde 2 'L' herfi olan obyektlerin indexleri: ");
// console.log(indexesWithTwoLs);

// 25) arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.

// let indexesWithTwoLs=[];
// arr2.forEach((item, index) => {
//   let lCount = item.name.split('t').length - 1;
//   if (lCount === 2) {
//     indexesWithTwoLs.push(index);
//   }
// });
// console.log("terkibinde 2 't' herfi olan obyektlerin indexleri: ");
// console.log(indexesWithTwoLs);

// 26) Bura da ozunuz arr2 ile ede bileceyiniz en maragli yeni funksionalligi yazin.

// arr2.forEach((item) => {
//   const ilkObj = item.name.charAt(0);
//   const unicodeObj = ilkObj.charCodeAt(0);
//   console.log(`"${ilkObj}" -in Unicode deyeri: ${unicodeObj}`);
// });

// unicode datalari 16 bit yeni 2 bayt ile evez edir (temsil edir), 65536 ferqli simvol (xarakter) idtifade oluna bilir.

// const searchValue = 'task';
// const foundObject = arr2.find((item) => item.name === searchValue);

// if (foundObject) {
//   console.log(`"${searchValue}" tapildi:`, foundObject);
// } else {
//   console.log(`"${searchValue}" tapilmadi`);
// }