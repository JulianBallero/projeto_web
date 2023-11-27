window.onload = async function() {
    
    var promise = await fetch("../php/cart.php",{
        method: "GET"
    })

    conteudo = await promise.json();

    for(var i = 0; i < conteudo.length; i++) {

        var template =
        `<div class="card_produtos">
            <h4>id do produto:</h4>
            <h4>${conteudo[i].product_id}</h4>
            <br>
            <h4>nome do produto:</h4>
            <h4>${conteudo[i].prod_name}</h4>
            <br>
            <h4>descrição do produto:</h4>
            <h4">${conteudo[i].prod_description}</h4>
            <br>
            <h4>preço do produto:</h4>
            <h4">${conteudo[i].prod_price}</h4>
            <br>
            <h4>status do produto:</h4>
            <h4">${conteudo[i].prod_status}</h4>
            <br>  
        </div>
        `;
    
        document.getElementById('garfield').innerHTML += template;    
    }}