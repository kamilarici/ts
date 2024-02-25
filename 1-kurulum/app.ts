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

// class Person {
//     id:number;
//     firstName:string;
//     lastName:string;
//     constructor(id:number,firstName:string,lastName:string){
// this.id=id;
// this.firstName=firstName;
// this.lastName=lastName
//     }
//     getFullName(){
//         return  `${this.firstName} ${this.lastName}`
//     }
// }
// let kisibilgim=new Person(43,"kml","arc")

// console.log(kisibilgim);
// console.log(kisibilgim.getFullName())

//! default public dir privite olduğunda ancak class içinde kullanabiliriz
// bir de protected var o da class içinde baska clasıa extend etmek için
// class Person {
//     privite id:number;
//     privite firstName:string;
//     protected lastName:string;
//     constructor(id:number,firstName:string,lastName:string){
// this.id=id;
// this.firstName=firstName;
// this.lastName=lastName
//     }
//     getFullName(){
//         return  `${this.firstName} ${this.lastName}`
//     }
// }
// let kisibilgim=new Person(43,"kml","arc")

// console.log(kisibilgim);
// console.log(kisibilgim.getFullName())

//! redonly atanan değer dışarıdan da okunur ama değer atanamaz

// class Person {
//    readonly id:number;
//     firstName:string;
//     lastName:string;
//     constructor(id:number,firstName:string,lastName:string){
// this.id=id;
// this.firstName=firstName;
// this.lastName=lastName
//     }
//     getFullName(){
//         return  `${this.firstName} ${this.lastName}`
//     }
// }
// let kisibilgim=new Person(43,"kml","arc")

// console.log(kisibilgim);
// // kisibilgim.id=5 //Cannot assign to 'id' because it is a read-only property
// console.log(kisibilgim.getFullName())

//!! extend etmek
// class Person {
//     id:number;
//     firstName:string;
//     lastName:string;
//     constructor(id:number,firstName:string,lastName:string){
// this.id=id;
// this.firstName=firstName;
// this.lastName=lastName
//     }
//     getFullName(){
//         return  `${this.firstName} ${this.lastName}`
//     }
// }

// class Employee extends Person{
//     constructor(id:number,firstName:string,lastName){
//         super(id,firstName,lastName)
//     }
// }

// let employee=new Employee(29,"kkk","aaa");

// console.log(employee.getFullName())

//! static Methods tekrar bakılacak

// class Circle{
//     static pi:number=3.14;
//     pi=3
//     constructor(){
//         this.pi++
//         Circle.pi++;
//     }

//     static hesapla(yaricap:number){
//         return this.pi * yaricap * yaricap
//     }

// }

// let objem=new Circle()
// let objem2=new Circle()
// console.log(objem.pi)

// console.log(Circle.pi)
// console.log(Circle.hesapla(5))

//!! abstracks class

// abstract class Department{
// constructor(public name :string){
//     }

// printName():void{
//     console.log("department name: "+ this.name)
// }
//     abstract printMeeting():void;
// }

// class AccountingDepartment extends Department{

//     constructor(){
//         super(" deneme1")
//     }
//     printMeeting(): void {
//         console.log("kkkkk")
//     }
//     generateReports():void{
//         console.log("llll")
//     }
// }

// // let department=new Department() //abstracks clasın new intence ı alınamıyor ama type olarak alınabilir
// let department=new AccountingDepartment();
// department.printName()
// department.printMeeting()

//!! interface *****

// interface Person{
//     firstName:string,
//     lastName:string

// }

// function  getFullName(person:Person){
//     return `${person.firstName} ${person.lastName}`;
// }
// let person={
//     firstName:"kml",
//     lastName:"arc",
//     age:29
// }
// console.log(getFullName(person))

//!! interface optional parametres

// interface Person{
//     firstName:string,
//     lastName:string,
// middleName?:string

// }

// function  getFullName(person:Person){
//     if(person.middleName){
//         return `${person.firstName}   ${person.middleName}  ${person.lastName} `;
//     }
//     return `${person.firstName} ${person.lastName} `;
// }
// let person:Person={
//     firstName:"kml",
//     lastName:"arc",
//     middleName:"kemal",

// }

// person.firstName="cannnnn"
// console.log(getFullName(person))

//!interface functions

// interface StringFormat{
//     (str:string,isUpper:boolean):string
// }

// let format:StringFormat;
// format=function (str:string,isUpper:boolean){
//     return isUpper? str.toLocaleUpperCase():str.toLocaleLowerCase()

// }
// console.log(format("kml arc",true))

//! interface extend ve implement

// interface IPerson{
//     name:string,
//     gender:string
// }

// interface IEmployee extends IPerson{
//     empNumber:number
// }
// interface IWorker extends IPerson{
//     empDepartment:string;
// }

// let employee:IEmployee={
//     empNumber:1,
//     gender:"male",
//     name:"kml"
// }
// let employeeDepartment:IWorker={
//     empDepartment:"software",
//     gender:"male",
//     name:"kml"
// }
// console.log(employee)
// console.log(employeeDepartment)

// interface IPerson{
//     name:string,
//     gender:string
// }

// // interface class a implemant ederken içindeki değerleri de tekrar yazmamız gerekiyor

// class Employee implements IPerson{
//     empNumber:number;
//     name:string;
//     gender:string
//     constructor(empNumber:number,name:string,gender:string){
// this.empNumber=empNumber;
// this.name=name;
// this.gender=gender
//     }
// }

// let employee=new Employee(5,"kml","arc")
// console.log(employee)

//! type intersection

// interface BusinessPartner {
//   name: string;
//   credit: number;
// }
// interface Identity {
//   name: string;
//   id: number;
// }
// interface Contact {
//   email: string;
//   phone: string;
// }

// type Employee = Identity & Contact; //kesişim yaolan değişkenin type ı yeniden interface tanımlamış gigi tüm propertileri içerir
// let kisim: Employee = {
//   id: 54,
//   name: "kml arc",
//   email: "kjh@gmail.com",
//   phone: "352543",
// };

// console.log(kisim);
// type Customer = BusinessPartner & Contact;

// let musterim: Customer = {
//   credit: 212122,
//   name: "kml arc",
//   email: "kjh@gmail.com",
//   phone: "352543",
// };

// console.log(musterim)


//!type guard


// type tip=string | number 

// function add(a:tip,b:tip){
//     if(typeof a === "number" && typeof b ==="number"){
//         return a+b;
//     }
//     if(typeof a === "string" && typeof b ==="string"){
//         return a.concat(b);
//     }
//     throw new Error("lütfen doğru formatta data gönderin");
    
// }

// console.log(add(5,6))

//!intence of

// class Customer{
//     isCreditAllowed():boolean{
//         return true
//     }
// }
// class Supplier{
//     isShortList():boolean{
//         return true
//     }
// }
// type BusinessPartner=Customer | Supplier;

// function signContract(partner:BusinessPartner):string{
//     let message:string;
//     if(partner instanceof Customer){
//         message=partner.isCreditAllowed() ? "aaaaa": "bbbbbb"
//     }
//     if(partner instanceof Supplier){
//         message=partner.isShortList() ? "ccccc" :"dddddddd"

//     }
//     return message
// }




//! GENERİC TYPE *************

function getRandomNumber(items:number[]):number{
    let randomIndex= Math.floor(Math.random()*items.length)
    return items[randomIndex];
}
let numbers=[1,54,65,7,8]
// console.log(getRandomNumber(numbers))


function getRandomString(items:string[]):string{
    let randomIndex= Math.floor(Math.random()*items.length)
    return items[randomIndex];
}
let adlarim=["can","tuba","merve"]
// console.log(getRandomString(adlarim))


// function getRandomElement(items:any[]):any{
//     let randomIndex= Math.floor(Math.random()*items.length)
//     return items[randomIndex];
// }

// console.log(getRandomElement(numbers))
// console.log(getRandomElement(adlarim));

// let degiskenlerim=[true,false,true]
// function getRandomElement<T>(items:T[]):T{
//     let randomIndex= Math.floor(Math.random()*items.length)
//     return items[randomIndex];
// }

// console.log(getRandomElement<number>(numbers))
// console.log(getRandomElement<string>(adlarim));
// console.log(getRandomElement<boolean>(degiskenlerim));

//!generic constraints


// function merge <U,V>(obj1:U,obj2:V){
// function merge <U extends object,V extends object>(obj1:U,obj2:V){
//     return {
//         ...obj1,...obj2
//     }
// }

// let person=merge(
//     { name:"kml"},
//     // {age:29}
//     29 // yazdığımızda hata almıyoruz o sebeble hata almak için extends obj eklememiz gerekiyor 
// )

// console.log(person)


//!GENERİC İNTERFACE

// interface Mounths<U,V>{

//     key:U,
//     value:V
// }

// let mounth:Mounths<number,string>={
//     key:1,
//     value:'januvary'
// }

// console.log(mounth)


// interface Collection<T>{
//     add(o:T):void;
//     remove(o:T):void;
// }

// class List<T> implements  Collection<T>{
// private items:T[]=[];
// add(o:T):void{
//     this.items.push(o);
//     console.log(this.items)
// }
// remove(o:T):void{
// let index=this.items.indexOf(o);
// if(index>-1){
//     this.items.splice(index,1)
// }
// }
// }


// let list=new List<number>();

// for(let i=0;i<10;i++){
//     list.add(i)
// }

class add<K,T>{


}