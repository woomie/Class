// document.addEventListener("DOMContentLoaded", ()=>{
//     //create the table header
//     let dataTable = document.getElementById("data-section");
//     const headers= ["ID", "Name", "Company", "Email"]
//     const headerRow = document.createElement("tr")
//     headers.forEach((head) => {
//         const header =document.createElement("th")
//         header.textContent = head;
//         headerRow.appendChild(header)
//     })
//     dataTable.prepend(headerRow)
//     fetch ("https://jsonplaceholder.typicode.com/users")
//     .then((response) =>{
//         return response.json()
//     })
//     .then ((jsonResponse) =>{
//         console.log(jsonResponse)
//         jsonResponse.forEach((item)=>{
//             //console.log(item)
//             const tbody = document.querySelector("tbody")
//             const row = document.createElement("tr")
//             const idCell = document.createElement ("td")
//             idCell.textContent =item.id
//             row.appendChild(idCell)
//             const nameCell = document.createElement("td")
//             nameCell.textContent = item.name;
//             row.appendChild(nameCell)
//             const companyCell = document.createElement("td")
//             companyCell.textContent = item.company.name;
//             row.append(companyCell)
//             const emailCell = document.createElement("td")
//             emailCell.textContent = item.email;
//             row.append(emailCell)


//             tbody.appendChild(row)

//   https://jsonplaceholder.typicode.com/todos
//         })
//     })
// })
const tmdbKey = '6c4171d7992f22114727ab05140c8c55';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';

// async function getAll(){
    
//     const requestParams = `?api_key=${tmdbKey}`;
//     const endpoint = "/genre/movie/list"
//     const urlToFetch = tmdbBaseUrl + endpoint + requestParams;
//     try{
        
//         const request = await fetch(urlToFetch)
//         //console.log(request)
//         if (request.ok){
//             const jsonResponse = await request.json();
            
//             console.log(jsonResponse.genres);

//         }
//     }
//     catch(e){
//         console.log(e)
//     }


// Real-World Scenario (Small Web App Breakdown):
// User clicks a button → JS listens to the click event.
// JS fetches data from an API (maybe user info or posts).
// While waiting, a loading spinner is shown (async behavior).
// When data returns, JS updates the DOM and displays results.