<?php
    
    $remove = $_POST['remove'];


    $conection__db = mysqli_connect('localhost:3307', 'root', 'Civic_93','loja');
    $resultado = mysqli_query($conection__db, "DELETE FROM `loja`.`products` WHERE `product_id` = $remove");
    $dados = array();

    while( $registro = mysqli_fetch_assoc($resultado) ){
        array_push($dados, $registro);
    };

    $json = json_encode($dados);
    echo $json;

?>