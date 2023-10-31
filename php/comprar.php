<?php
    
    $conection__db = mysqli_connect('localhost:3307', 'root', 'Civic_93','loja');
    $resultado = mysqli_query($conection__db, "INSERT INTO `loja`.`cart` (`batatão`, `prod_description`, `prod_price`) VALUES ('', 'bababab', '13');");
    $dados = array();

    while( $registro = mysqli_fetch_assoc($resultado) ){
        array_push($dados, $registro);
    };

    $json = json_encode($dados);
    echo $json;

?>