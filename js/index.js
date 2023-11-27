window.onload = async function() {
    
    var promise = await fetch("php/obter.php",{
        method: "GET"
    })

    conteudo = await promise.json();

    for(var i = 0; i < conteudo.length; i++) {

        var template = 
        `<div class="card_product">
            <div class="card_price">${conteudo[i].prod_price}</div>
            <div class="card_name"> <img src="img/id_${conteudo[i].product_id}.jpeg"  height="200px" width="200px"> </div>
        </div>`;
    
        document.getElementById('produtos').innerHTML += template;
        
    }}


async function adicionar() {
    console.log(id);

    var dados = new FormData();
    dados.append("product_id", id);

    fetch("php/comprar.php", {
        method: "POST",
        body: dados
    });
}