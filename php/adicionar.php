<?php
    $_nome = $_POST['nome'];
    $_descricao = $_POST['descricao'];
    $_preco = $_POST['preco'];

    $conection__db = mysqli_connect('localhost:3307', 'root', 'Civic_93','loja');
    $resultado = mysqli_query($conection__db, "INSERT INTO `loja`.`products` (`prod_name`, `prod_description`, `prod_price`) VALUES ('$_', 'bababab', '13');");
    $dados = array();

    while( $registro = mysqli_fetch_assoc($resultado) ){
        array_push($dados, $registro);
    };

    $json = json_encode($dados);
    echo $json;

?>