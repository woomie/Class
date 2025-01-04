// Url = endpoints

// const endpoint = "https://jsonplaceholder.typicode.com/users"

// const request = fetch(endpoint)
// console.log(request)
// //use .then to handle our request



// async function getUsername(){
//     try{
//         const endpoint = "https://jsonplaceholder.typicode.com/users"
//         const request = await fetch(endpoint)
//         console.log(request)
//         if(request.ok){
//             const jsonResponse = await request.json()
//             console.log(jsonResponse)
//             let para = document.getElementById("para")
//             para.innerText = jsonResponse[0].name;
//         }
//     }
//     catch (e){

//     }
// }

//getUsername()

// async function getJokes(){
//     try{
//         const endpoint = "https://official-joke-api.appspot.com/random_joke "
//         const request = await fetch(endpoint)
//         console.log(request)
//         if (request.ok){
//             const jsonResponse = await request.json();
//             console.log(jsonResponse)
//             let card= document.getElementById("card")
//             card.innerHTML = `<p>${jsonResponse.setup}<p>
//             <p>${jsonResponse.punchline}<p>
//             <p>${jsonResponse.id}<p>`
//             ;      
//         }
//     }
//     catch(e){

//     }
// }

//getJokes()

async function getAll(){
    try{
        const endpoint = "https://jsonplaceholder.typicode.com/todos"
        const request = await fetch(endpoint)
        //console.log(request)
        if (request.ok){
            const jsonResponse = await request.json();
            console.log(jsonResponse)
            let all = document.getElementById("all")
            // for (const property in jsonResponse){
            //     all.innerHTML += `${jsonResponse[property]}`
            // }
            jsonResponse.forEach(users =>{
                all.innerHTML +=`<p> UserID: ${users.userId}<p>
                <p>ID: ${users.id}<p>
                <p>Title: ${users.title}<p>
                <p>Completed: ${users.completed}<p>`
            })
            
        }
    }
        
        
    catch(e){
        console.log(e)
    }
}

getAll()