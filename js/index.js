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
            <div class="card_action" onclick="comprar(${conteudo[i].product_id})">COMPRAR!</div>
        </div>`;
    
        document.getElementById('produtos').innerHTML += template;
        
    }}


async function comprar(id) {
    console.log(id);

    var dados = new FormData();
    dados.append("product_id", id);

    fetch("php/comprar.php", {
        method: "POST",
        body: dados
    });
}