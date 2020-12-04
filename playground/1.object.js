/**
 * Declaration : 不重要！遇事不決用Let. 想搞事就用var
 */

const staticObject = {}
let activeObject = {}
var godObject = {}


/**
 * 什麼是prototype的精髓？  任何人在何時何地都可以為某物件加上資訊
 */

let person = {
    name: 'Kiara'
};

console.log(person)

// append variable as property
person.wife = 'Cali'


// append function as property
person.eat = function eat(food) {
    console.log(this.name + ' eat ' + food); 
 }  

console.log(person)

/**
 * 執行我們剛剛加到 person 物件上的 function-eat
 */
person.eat('ice cream')
