"use strict";

console.log("----------------------------------------");
console.log("Fetch Poke JSON");


const blb= async () =>{
    const response= await fetch("./bulbasaur.json");
    const data= await response.json();
    
    const pokeName=data.name;
    const pokeTypes=data.types.map(type=>type.type.name).join(",");
    const pokeStats=data.stats.map(stat=>`${stat.stat.name}:${stat.base_stat}`).join(",");

    document.getElementById("pokeName").innerText=`${pokeName}`;
    document.getElementById("pokeTypes").innerText=`${pokeTypes}`;
    document.getElementById("pokeStats").innerText=`${pokeStats}`;

    
  
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