let counter =0;
const getData =()=>{
  console.log("Fetching data " + counter++);
}

const doSomeMagic =function(fun,delay){
   let timer;
  return function(){
    let context=this,args=arguments;
    clearTimeout(timer);
    timer= setTimeout(() => {
      getData.apply(this,args);
     }, delay);
  }
}


const betterFunction= doSomeMagic(getData,300)