// let age: number = 29;
// let firstname: string = "kamil";
// let lastname: string = "arici";
// let isUpdated: boolean = true;
// let first: number = 123;
// console.log(first);
// let fname:string="hop"
// console.log(fname)
// Pre-ES6
// let deneme1:string="john"
// let deneme2:string="france"
// let birlestirme=deneme1 +" is coming"+deneme2 +"...";
// let birlestirme2=`${deneme1} is coming ${deneme2}...`
// console.log(birlestirme)
// console.log(birlestirme2)
// let isPresident:boolean=true
// console.log(isPresident)
// let firstNames:string[]=["kml","fatma","azra","busra"]
// let firstNames:Array<string>=["kml","fatma","azra","busra"]
// console.log(firstNames)
// let arr=[1,3,"apple","orange","banana",true,false]
// let fruits:Array<string>
//  fruits=["apple","orange","banana"]
//  console.log(fruits)
// let ids:Array<number>
// ids=[1,2,3,8,65]
// console.log(ids)
// string veya number  atanabilir bu arrayin içine
// let values:(string | number)[]=["appale",2,"orange",5,8,6]
// let values:Array<string | number>=["apple",4,"orange",8,12,24]
// ? array
// let fruits:Array<string>
//  fruits=["apple","orange","banana"]
//    for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i])
//    }
// let id:number=1;
// let insName:string="kml"
// let instructor:[number,string]=[1,"kml"]
// let user:[number,string,boolean,number,string];
// user=[1,"steve",true,2,"admin"]
// console.log(instructor)
// console.log(user)
// ? tuple
// let employee:[number,string][];
// employee=[[1,"aaa"],[2,"bbb"],[3,"ccc"]]
// console.log(employee)
// ?object
// type Person ={
//     firsName:string,
//     lastName:string,
//     age:number,
//     jobTitle:string
// }
// let instructor:Person;
// instructor={
//     firsName:"kml",
//     lastName:"arc",
//     age:34,
//     jobTitle:"frontEnd Developer"
// }
// console.log(instructor.age)
// let person:{
//     firsName:string,
//     lastName:string,
//     age:number,
//     jobTitle:string
// }
// person={
//     firsName:"kml",
//     lastName:"arc",
//     age:34,
//     jobTitle:"frontEnd Developer"
// }
// console.log(person)
// let person:{
//     firsName:string,
//     lastName:string,
//     age:number,
//     jobTitle:string
// }={
//     firsName:"kml",
//     lastName:"arc",
//     age:34,
//     jobTitle:"frontEnd Developer"
// }
// console.log(person)
// ? enum
// number enum
// enum Media{
// newspaper,
// newslatter,
// magazine,
// book
// }
// console.log(Media.magazine)
// console.log(Media[3])
// enum printMedia{
// newspaper="NEWSPAPER",
// newslatter="NEWSLATTER",
// magazine="MAGAZİNE",
// book="BOOK"
// }
// console.log(printMedia.magazine)
// ?UNİON
// let code:string | number
// code="123"
// code=124
// code=true /* burada boolean değer olamaz  string ve number olabilir */
// console.log(code)
// ! any type
// let someThing:any="hello"
// someThing=45
// someThing=true
// someThing={
//     firstname:"kml",
//     lastname:"arc"
// }
// console.log(someThing)
// let arr:any[]=["kml",128,true];
// console.log(arr)
// ! void type
/* geriye birşey döndürmeyen değerler*/
// function sayHello():void{
//     let arr="12";
//     console.log("Hi");
//     return arr; /*Type 'string' is not assignable to type 'void'  bunun dönüş tipi void ama geriye string döndürmeye çalışıyorsun hatası alırın  */
// }
// sayHello()
//? never
/* hiçbir değer dönmeden hata mesajı fırlat */
// function throwError(errorMsg:string):never{
//     throw new Error(errorMsg);
// };
// throwError("hata")
// ! void e null ve undefined atanabilirken never a hiçbirşey atanamaz
// let  someThing:void=null
// let  someThing:void=undefined
// let nothing:never=null;
// let nothing:never=undefined;
//? TYPE İNFERENCE
// let sayac=0 /*number yazmamamıza rağmen number atandı */
//  console.log(typeof(sayac))
//  function increment(counter:number){
// return counter ++
//  }
//  function increment(counter:number):number{
// return counter ++
//  }
//  let a="some text";
//  let b=123;
//  a=b; /*Type 'number' is not assignable to type 'string' burada string ve number eşitlenemediiğinden ts hata verir */
// function sum (a:number,b:number){
//     return a+b
// }
// let total:number=sum(10,5)
// let total:string=sum(10,5) /**hata verir dönen number ,string e atanamaaz   */
// console.log(total)
// ? type  assertion
// let code:any=123;
// let empCode=<number>code;
// console.log(typeof(empCode))
// interface Employee{
//     name:string,
//     code:number
// }
// let employee=<Employee>{}
// console.log(typeof(employee))
// employee.name="kml"
// console.log(employee)
// ? CONDİTİONAL AND LOOP ***************
// ? if and ternary
// let x:number =15;
// let y:number =5;
// if(x>y){
//     console.log("x y den büyüktür")
// }else if(x<y){
//     console.log("x y den küçüktür")
// }else{
//     console.log("x y ye eşittir")
// }
// x>y ? console.log(console.log("x y den büyüktür")) : console.log("x y den küçüktür veya eşittir")
// ?switch case
// let day: number = 25;
// switch (day) {
//   case 0:
//     console.log("pazar");
//     break;
//   case 1:
//     console.log("pazartesi");
//     break;
//   case 2:
//     console.log("salı");
//     break;
//   case 3:
//     console.log("carşamba");
//     break;
//   case 4:
//     console.log("perşembe");
//     break;
//   case 5:
//     console.log("cuma");
//     break;
//   case 6:
//     console.log("cumartesi");
//     break;
//   default:
//     console.log("böyle bir gün yok");
//     break;
// }
// ? for
// for(let i=0; i<3 ; i++ ){
// console.log(`i değerim : ${i} `)
//     console.log("i değerim" , i)
// }
// let arr=[10,20,30,45];
// for(let item=0; item<arr.length; item++){
// console.log(arr[item] + "", item)
// }
// for(let item of arr{
//     console.log(item)
// })
// let str="kml arc"
// for(let item of str){
//     console.log(item)
// }
// for(let item in str){ /* of yerine in verilirse indexi vermiş olır  */
//     console.log(item)
// }
// ? while loop
// let counter =10;
// while(counter<5){
//     console.log(counter)
//     counter ++;
//     if(counter==3){
//         break
//     }
// }
// do{
//     console.log(counter);
//     counter++;
// }while(counter<5);
// ! TS FUNCTİONS
// function add(a:number,b:number):number{
//     return a+b 
// }
// let toplam=add(10,20)
// console.log(toplam)
// function bastir(){
// console.log("kml arc")
// return 35
// }
// let degisken=bastir()
// console.log(degisken)
// function birlestir(ad:string, soyad:string):string{
//     return ad +' '+soyad
// }
// // console.log(birlestir("kml","arc"))
// let degisken=birlestir("kml","arc")
// console.log(degisken)
// function birlestir(ad:string, soyad:string="kkk"):string{
//     return ad +' '+soyad
// }
// let degisken=birlestir("kml","arccccc")
// console.log(degisken)
// ? opstional parametres -arrow functions
// function carpim(a:number,b:number,c?:number){
//     if(typeof c !=="undefined"){
//         return a*b*c;
//     }
//     return a*b;
// }
// let degisken=carpim(5,4)
// console.log(degisken)
// function carpim(a:number,b:number,c?:number):number{
//     return a*b;
// }
// let carpim=(a:number,b:number,c?:number)=>{
//     return a*b
// }
// let degisken=carpim(5,2)
// console.log(degisken)
// let bastir=()=>console.log("kmllllfff")
// bastir()
// function add(a:number,b:number):number{
//      return a + b;
// }
// let degisken=add(5,4)
// console.log(degisken)
// ! overloadig (üzerine yazmak atamak ne girsin ne çıksın yazabilirsin)
// function add(a:string,b:string):string
// function add(a:number,b:number):number
// function add(a:any,b:any):any{
//     return a + b;
// }
// let degisken=add("kml"," arcv")
// // let degisken=add(5,4)
// console.log(degisken)
// ? rest parametres
// function toplam(a:string ,...numbers:number[]):number{
//     console.log(a)
//     let total=0;
//     numbers.forEach((num) => total += num)
//    return total
// }
// console.log(toplam("kml",20,30))
// function birlestir(message:string,...names:string[]){
//     console.log(message + "  " + names.join(","))
// }
// birlestir("merhaba","kml","ali","azra")
