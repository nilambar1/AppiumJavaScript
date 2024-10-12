let mymap = new Map();
console.log(mymap)
console.log(typeof(mymap));
//mymap.add('age'=20)
mymap.set('age', 20);
console.log(mymap)
let age=mymap.get('age');
console.log(age)
mymap.set('user', {'id':1})
console.log(mymap.get('user'));
console.log(mymap)

mymap.forEach((key, val) =>{
console.log(key, val)
})