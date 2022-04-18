const nome = {
    name: "bacon"
}

const enviarnome = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants');

enviarnome.then(console.log("deu bom"));
enviarnome.catch(console.log("deu ruim"));

imprimir();

function imprimir (){
    const recebermensagems = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    recebermensagems.then(imprimirchat);
    recebermensagems.catch(console.log("deu bom não"));
}


function imprimirchat (array){
    console.log(array)
    const chat = document.querySelector(".chat");
    chat.innerHTML = "";
    chat.innerHTML += `
        <div class="correcao1"></div>
        `
    for (var i =0; i<=100; i++){
        if (array.data[i].type == "status"){
            chat.innerHTML += `
            <div class="mensagemStatus"><h2>${array.data[i].time}</h2><h1><strong>${array.data[i].from}</strong>${array.data[i].text}</h1></div>
            `
        }
        if (array.data[i].type == "message"){
            chat.innerHTML += `
            <div class="mensagemPublica"><h2>${array.data[i].time}</h2><h1><strong>${array.data[i].from}</strong> para ${array.data[i].to}: ${array.data[i].text}</h1></div>
            `
        }
        if (array.data[i].type == "private"){
            chat.innerHTML += `
            <div class="mensagemPrivada"><h2>${array.data[i].time}</h2><h1><strong>${array.data[i].from}</strong> reservadamente para ${array.data[i].to}: ${array.data[i].text}</h1></div>
            `
        }
    }
    chat.innerHTML += `
        <div class="correcao2"></div>
    `
    console.log(array.data[0].time)
}