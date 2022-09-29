    function insert(){

    let namepokemon = document.getElementById('inputpokemon').value;
    //console.log(namepokemon);
    let imgpokemon = document.createElement("img");
    let linkimg = document.createTextNode(`src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${namepokemon}.gif";`);
        imgpokemon.appendChild(linkimg);
        let body = document.querySelector('.imgpokemon');
        body.appendChild(imgpokemon);
        console.log(imgpokemon);
    

}

document.getElementById('submit').onclick = insert;



