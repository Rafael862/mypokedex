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

/*const doGet = (url) => {
    const promiseCallback = (resolve, reject) => {
            fetch(url) // retorna uma promisse, então logo apos vem o then
        .then((response) => { // o response contem algumas informações que vieram do fetch API  
            if (!response.ok) throw  new Error('Erro ao executar requisição, status' + response.status);
            return response.json();//retorna um objeto
    })
        .then(resolve)
        .then(data)
        .catch(reject);
    }
    return new Promise(promiseCallback);
}

function submit (){
    var pokemon = document.getElementById('inputpokemon').value; //pego o que foi escrito e jogo dentro da variável
    doGet(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(console.log).catch(console.error); //aqui eu joguei dentro da url para pegar o pokemon desejado
    //let img = data['sprites']['front_defaut'];
    document.getElementById('pic').setAttribute('src', doGet);
}
document.getElementById('submit').addEventListener('click', submit);*/

 function submit() {

    var pokemon = document.getElementById('inputpokemon').value;

 console.log(pokemon);

 
 

//let pokemon = 25;
let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(url)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        console.log(data);
        document.querySelector('.namepokemon').innerHTML = data['name'];
        let img = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        document.getElementById('pic').setAttribute('src', img);
    })
    .catch((erro) => {
        console.log('Erro: ' + erro)
    });

}

    
    
document.getElementById('submit').addEventListener('click', submit);
    //document.getElementById('submit').onclick = loadapi;
