//map,filter,find
// const students =[
//     {id:57,name:"hasan"},
//     {id:58,name:"korim"},
//     {id:50,name:"jobhaiyer"},
//     {id:222,name:"moin"}
// ];
// const names =students.map(s=>s.name);
// const ids =students.map(s=>s.id);
// const bigger =students.filter(s=>s.id>50);
// //const find =students.find(s=>s.id>50);

// console.log(names,ids,bigger);

const  student=[
    {id:123,name:'hasan'},
    {id:123,name:'hasan'},
    {id:13,name:'hasan'},
    {id:12,name:'hasan'}
];
const names=student.map(x=>x.name)
const id=student.map(x=>x.id)
const bigger=student.find(x=>x.id>14)
console.log(names,id,bigger)