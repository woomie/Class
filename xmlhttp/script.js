let btn =document.getElementById("getinfo")
btn.addEventListener('click', getIp);


function getIp(){
    const xhr = new XMLHttpRequest();
    const url = "https://ipinfo.io/json";
    xhr.responseType = "json";

xhr.onload =() =>{
    console.log(xhr.response)
    let responsedata =xhr.response
    let city = document.getElementById("city");
    city.textContent =responsedata.city;
    let timezone = document.getElementById("timezone");
    timezone.innerText = responsedata.timezone
}
xhr.open("GET", url);
xhr.send();

}
