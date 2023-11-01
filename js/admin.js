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
            <div class="remove" onclick="remove(${conteudo[i].prod_price})>remover produto</div>
        </div>`;
    
        document.getElementById('produtos').innerHTML += template;
        
    }}

function remove() {
        var dados = new FormData();
        dados.append("product_id", product_id);
        fetch("php/remover.php", {
            method: "POST",
            body: dados
        });
    }

function add() {
    var dados = new FormData();
    dados.append("product_id", add);

    fetch("php/adicionar.php", {
        method: "POST",
        body: dados
    });
}
