 function submit() {

    var pokemon = document.getElementById('inputpokemon').value;
    
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
        document.getElementById('tipo').innerHTML = data['types'][0]['type']['name'];
        document.getElementById('atk').innerHTML = data['stats']['1']['stat']['name'] + ':';
        document.getElementById('batk').innerHTML = data['stats']['1']['base_stat'];
        document.getElementById('def').innerHTML = data['stats']['2']['stat']['name'] + ':';
        document.getElementById('bdef').innerHTML = data['stats']['2']['base_stat'];
        document.getElementById('spe').innerHTML = data['stats']['5']['stat']['name'] + ':';
        document.getElementById('bspe').innerHTML = data['stats']['5']['base_stat'];
    })  
    .catch((erro) => {
        console.log('Erro: ' + erro)
        alert('nome inválido')
    });

}
function clear(){
    //document.getElementById('inputpokemon').innerHTML = '';
    alert('teste');
 }
 document.getElementById('submit').addEventListener('click', submit, clear);


