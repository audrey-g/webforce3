<?php 


function getMessages(){
    
    
    $dsn        = "mysql:dbname=ajax;hostname=localhost;charset=utf8";
    $user       = "root";
    $password   = "";
    
    $db = new PDO($dsn, $user, $password);
    
    $statement = $db->query('SELECT * FROM messages ORDER BY moment DESC LIMIT 20');
    
    // Récupération des données
    $messages = $statement->fetchAll(PDO::FETCH_ASSOC);
    
    // J'affiche le résultat en JSON
    echo json_encode($messages);
    
}

function postMessages(){
    
    $author = $_POST["author"];
    $content = $_POST["content"];
    
    $dsn        = "mysql:dbname=ajax;hostname=localhost;charset=utf8";
    $user       = "root";
    $password   = "";
    
    $db = new PDO($dsn, $user, $password);
    
    $statement = $db->prepare('INSERT INTO messages SET author = :author, content = :content, moment = NOW()');
    
    $statement->execute([
        'author' => $author,
        'content'=> $content
        ]);

    
}



$action = $_GET["task"];

if ($action == "ecrire"){
    
    postMessages();
    
} else {
    
    getMessages();
    
}
