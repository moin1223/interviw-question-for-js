//normal

// const numbers = [2, 3, 4, 5, 6]
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);



//map:1
// const numbers = [2, 3, 4, 5, 6]

// numbers.map(function(element,index,array){    //map er modde 3 ta peramiter ne
//     console.log(element,index,array)
// })



//map diye squre ber kra

// const numbers = [2, 3, 4, 5, 6]

// const result=numbers.map(function(element){
//     return element*element;
// })
// console.log(result);


//opoer squre er kajtai eksate arrow function and map sortcut kre kra
// const numbers = [2, 3, 4, 5, 6]
// const result=numbers.map(x=>x*x)
// console.log(result);


// //filter///
// const numbers = [2, 3, 4, 5, 6]
// const bigger =numbers.filter(x=>x<5);   // array thke olpo kico select kra
// console.log(bigger);


// const numbers = [2, 3, 4, 5, 6]
// const bigger =numbers.find(x=>x<5);   // array thke soto man oi valu gulai retun korbe
// console.log(bigger);

const numbers1=[2,3,4,5]
const result =  numbers1.map(function(element){
    return element*element;
})
console.log(result)


const result2=numbers1.map(x=>element*element)
console.log("result2",result2)




