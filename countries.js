


// ten countries 

fetch("https://restcountries.com/v3.1/all")
.then((responses) =>responses.json())
.then(data => {
    let container = document.getElementById("container")
    let feedback =data.slice(0,10)
    for (let i=0; i<feedback.length; i++){
        console.log(feedback[2])
        let name = document.createElement("p")
        let flag = document.createElement("img")
        let capital = document.createElement("p")
        let region = document.createElement("p")

        container.appendChild(flag)
        container.appendChild(name)
        container.appendChild(capital)
        container.appendChild(region)
        
        name.innerHTML = `Name: ${feedback[i].name.official}`
        flag.src = feedback[i].flags.png
        capital.innerHTML = `Capital: ${feedback[i].capital}`
        region.innerHTML = ` Region: ${feedback[i].region}`

        region.style.marginBottom ="50px";
    }
})

.catch(err =>{console.log("erjhkyh")})


// Countries by search



// function render(name,flag,place,continent){
 
//  searchContainer.innerhtml = "";
//  let name = document.getElementById("hello");
//  let flag = document.getElementById("flag");
//  let place = document.getElementById("region");
//  let continent = document.getElementById("capital");

//  name.innerhtml = `Name: ${data[0].name.official}`;
//  flag.innerhtml = data[0].flags;
//  place.innerhtml = `Capital: ${data[0].capital}`;
//  continent.innerhtml = `Region: ${data[0].region}`;
 
// }


let searchInput = document.getElementById("input")
let searchBtn = document.getElementById("btn")

const search = () => {
 let name = searchInput.value.trim().toLocaleLowerCase();
        
 fetch(`https://restcountries.com/v3.1/name/${name}`)
 .then(responses =>responses.json())
 .then(data =>{
    console.log(data[0].name)
    //  let searchContainer = document.getElementById("search");
    // searchContainer.innerhtml = "";
 let namep = document.getElementById("hello");
 let flag = document.getElementById("flag");
 let place = document.getElementById("region");
 let continent = document.getElementById("capital");

 namep.innerhtml = `Name: ${data[0].name.official}`;
 flag.innerhtml = data[0].flags.svg;
 place.innerhtml = `Capital: ${data[0].capital}`;
 continent.innerhtml = `Region: ${data[0].region}`;
    
 })  
 .catch( error => console.log(error))
    

};

searchBtn.addEventListener("click",search);
searchInput.innerHTML="";