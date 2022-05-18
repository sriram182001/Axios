const axios=require('axios');

/*
const makeCall = async (p)=>{

const res =  await axios.get("https://reqres.in/api/users?page="+p);
return  res;
}
*/


 async function x(){
    for(let i=1;i<=10;i+=2)
   {
   
       const res=await Promise.all([axios.get("https://reqres.in/api/users?page="+i),axios.get("https://reqres.in/api/users?page="+(i+1))]);
       console.log(res[0].data.page);
      console.log(res[1].data.page);
       console.log('\n');
   
    }
 }



/*
const x = async ()=>{
   console.log('Inside X')
   res=await axios.get("https://reqres.in/api/users?page=1");
   console.log(res.data.page);
   console.log("something");

}

x().then(()=>{
   console.log('In then')
});

console.log('Out');
*/

/*
function a()
{
   return ()=>
   {
      return 2;
   }
   
}
console.log(a()());
*/



