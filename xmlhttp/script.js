// let btn =document.getElementById("getinfo")
// btn.addEventListener('click', getIp);


// function getIp(){
//     const xhr = new XMLHttpRequest();
//     const url = "https://ipinfo.io/json";
//     xhr.responseType = "json";

// xhr.onload =() =>{
//     console.log(xhr.response)
//     let responsedata =xhr.response
//     let city = document.getElementById("city");
//     city.textContent =responsedata.city;
//     let timezone = document.getElementById("timezone");
//     timezone.innerText = responsedata.timezone
// }
// xhr.open("GET", url);
// xhr.send();

// }


//Fetch API
//default is get
// function getData(){
//     fetch("https://ipinfo.io/json").then(response =>{
//         console.log(response)
//         if(response.ok){
//             //console.log(response.json())
//             return response.json()
//         }
//     }, networkError=> console.log(networkError.message))

//     .then(jsonResponse=>{
//         console.log(jsonResponse)
//     })
//     //console.log(fetch("https://ipinfo.io/json"))
// }

// getData()


//Async and Await
// async function getData2(){
//     try{
//         const response = await fetch ("https://ipinfo.io/json");
//         console.log(response)
//         if(response.ok){
//             const jsonResponse = await response.json()
//             console.log(jsonResponse)
//         }
//     }
//     catch(e){
//         console.log(e)
//     }
// }

// getData2()


//post fetch
async function postData(){
    try{
        const response = await fetch("https://httpbin.org/post", {
            method: "POST",
            body: JSON.stringify({
                name:"John",
                age: 30
            })
        });

        if (response.ok){
            const jsonResponse = await response.json()
            console.log(jsonResponse)
        }
    }
    catch (e){
        console.log(e)
    }
}
postData();