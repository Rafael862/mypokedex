/*function insert(){


    let namepokemon = document.getElementById('inputpokemon').value;
    //console.log(namepokemon);
    let imgpokemon = document.createElement("div");
    let linkimg = document.create(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${namepokemon}.gif" alt="">`);
        imgpokemon.appendChild(linkimg);
        let body = document.querySelector('.imgpokemon');
        body.appendChild(imgpokemon);
        console.log(imgpokemon);
    

}

document.getElementById('submit').onclick = insert;*/

const doGet = (url) => {
    const promiseCallback = (resolve, reject) => {
            fetch(url) // retorna uma promisse, então logo apos vem o then
        .then((response) => { // o response contem algumas informações que vieram do fetch API  
            if (!response.ok) throw  new Error('Erro ao executar requisição, status' + response.status);
            return response.json();//retorna um objeto
    })
        .then(resolve)
        .catch(reject);
    }
    return new Promise(promiseCallback);
}

var pokemon = 'ditto'
doGet(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(console.log).catch(console.error);


 


