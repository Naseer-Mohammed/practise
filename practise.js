let arr =[1,2,9,5,8,9,4,3,6,8,7,8,10,100,100]
let output=arr.reduce((acc,curr)=>{
       if(acc[curr]){
         acc[curr]=++acc[curr];
       }else{
         acc[curr]=1
       }
       return acc;
},{})

console.log(output)
console.log(...new Set(arr)); 

let removedDuplicates =[];
arr.reduce((acc,curr)=>{
        if(!removedDuplicates.includes(curr)){
            removedDuplicates.push(curr)           
        }
},0)
console.log(removedDuplicates);