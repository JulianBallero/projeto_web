window.onload = async function() {
    
    var promise = await fetch("php/obter.php",{
        method: "GET"
    })

    conteudo = await promise.json();

    for(var i = 0; i < conteudo.length; i++) {

        var template = 
        `<div class="card_product">
            <div class="card_name"> <h3>${conteudo[i].prod_name}</h3> </div>
            <div class="card_descrip">
                <div class"descrip_text">${conteudo[i].prod_description}</div>
                <div class="card_price">${conteudo[i].prod_price}</div>
            </div>
            <div class="card_action" onclick="comprar(${conteudo[i].id})">COMPRAR!</div>
        </div>`;
    
        document.getElementById('produtos').innerHTML += template;
    }}

function comprar(id) {

    var dados = new FormData();
    dados.append("id_product", id);

    fetch("php/comprar.php", {
        method: "POST",
        body: dados
    });
}