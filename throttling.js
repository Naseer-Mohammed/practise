throttle = (fun,delay) =>{
  let flag= true;
  return function(){
    if(flag){
      fun();
      flag=false;
      setTimeout(() => {
        flag=true;
      }, delay);
    }
}
}

document.getElementById('abc').addEventListener('click' , throttle(()=>{console.log('working')},5000));





