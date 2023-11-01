window.onload = async function() {
    
    var promise = await fetch("php/obtercart.php",{
        method: "GET"
    })

    conteudo = await promise.json();

    for(var i = 0; i < conteudo.length; i++) {

        var template = 
        `<div class="card_cart">
            <div class="card_name"> <img src="img/id_${conteudo[i].prod_id}.jpeg"  height="120px" width="120px"> </div>
            <div class="card_descrip">
                <div class"descrip_text">${conteudo[i].prod_description}</div>
                <div class="card_price">${conteudo[i].prod_price}</div>
            </div>
           
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