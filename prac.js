const axios=require('axios').default;

/*axios.get('https://reqres.in/api/users?page=2').then((response)=>{
    console.log(response.data);
})*/

/*
axios({
    method:"get",
    url:"https://reqres.in/api/users?page=2"
})
.then((response)=>{
    console.log(response.data);
    return response.data;
})
.then((response1)=>{
    console.log(response1.page);
})*/


/*
    const p1=axios({
        method:"get",
        url:"https://reqres.in/api/users?page=1"
        });

    const p2=axios({
            method:"get",
            url:"https://reqres.in/api/users?page=2"
        });

    const p3=axios({
            method:"get",
            url:"https://reqres.in/api/users?page=3"
            });
    
    const p4=axios({
                method:"get",
                url:"https://reqres.in/api/users?page=4"
            });


*/
const Waiting=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("delay...");
        },1000);
    })
    
}

async function displayItems()
{
    try {
        const response1=await Promise.all([axios({
            method:"get",
            url:"https://reqres.in/api/users?page=1"
            }),
        axios({
                method:"get",
                url:"https://reqres.in/api/users?page=2"
            })]);
        console.log("From page:"+response1[0].data.page)
        console.log(response1[0].data.support.text);
        console.log("From page:"+response1[1].data.page)
        console.log(response1[1].data.support.text);  

        //const temp=await Waiting();
        //console.log(temp);

        const response2=await Promise.all([axios({
            method:"get",
            url:"https://reqres.in/api/users?page=3"
            }),
            axios({
                method:"get",
                url:"https://reqres.in/api/users?page=4"
            })]);
        console.log("From page:"+response2[0].data.page)
        console.log(response2[0].data.support.text);
        console.log("From page:"+response2[1].data.page)
        console.log(response2[1].data.support.text); 

        }
    catch (error) {
        console.log(error);
    }
}

displayItems();
