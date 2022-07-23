// var a=['sam','sammy','aqw','smx',"sammy",300,200,400,500];
// a.forEach((element,index)=>{
//     console.log(element+":"+index);
// })


// console.log(a.indexOf("sammy",1)); //1 ->strting of search
// console.log(a.lastIndexOf("sammy",2)); // backword search
// console.log(a.includes("samm")); // case sensitive, forward search
// const findElem = a.find( (element) => {
//     return element < 400;
// })
// console.log(findElem);// only return first satisfied element
// const findElem = a.findIndex( (element) => {
//     return element < 400;
// })
// console.log(findElem);
// find returns undefined and findIndex returns -1 when value not found;
// var a=['sam','sammy','aqw','smx',"sammy",400,500,200,300];
// const newPriceTag=a.filter((element,index)=>{
//     return element<400;
// });
// console.log(newPriceTag);
// console.log(a.sort());//sort with repect to string
// var a=['sam','sammy','aqw','smx',"sammy","SAAsy"];
// a.push("sim");//push returns new length of array
// a.unshift('sss');//add element at first
// a.pop();//delete last
// a.shift();//delete first
// const s=a.splice(3,2);
// console.log(a);
// var a=[100,200,300,400];
// const Mapping=a.map((elem,index) =>{
//     return (elem*2);
// }).filter((elem) =>{
//     return elem>500;
// }).reduce((accmulator,elem)=>{
//     return accmulator+=elem;
// },7);
// console.log(Mapping);
let t=new Date();
    console.log(t.toLocaleString());