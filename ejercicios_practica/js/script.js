"use strict";

console.log("----------------------------------------");
console.log("Fetch Poke JSON");


const blb= async () =>{
    const response= await fetch("./bulbasaur.json")
    const data= await response.json()
    let string=""
    data.forEach(element => {
      
        string+=`
        <h1>${element.name}</h1>
        <span>${element.types.name}</span>
        <table>${element.atats.base_stat.name}</table>`
        document.getElementById("pokeName").innerHTML=string
        
    });
    
  
}
blb()

/*fetch("./bulbasaur.json")
.then(r => r.json())
.then(data=>{
    renderPokemonData(data)
});
    
    function renderPokemonData(data){
        const stats=data.stats;
        const ul=document.createElement("ul")
        stats.forEach(stat => {
            const li=document.createElement("li");
            li.textContent=`${stat.stat.name}:${stat.base_stat}`;
            ul.appendChild(li);

            
        });
        const container=document.getElementById("pokeStats");
        container.appendChild(ul);
    }*/