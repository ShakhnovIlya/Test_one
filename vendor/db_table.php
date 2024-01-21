<?php

    $pdo = new PDO('mysql:host=localhost;dbname=test_one;', 'root', '');

    $statement = $pdo->prepare(
                        "SELECT orders.id, users.name, orders.title, orders.cost, orders.user_id  
                                FROM orders 
                                JOIN users 
                                ON orders.user_id = users.id;");
    $statement->execute();

    $users = $statement->fetchAll(PDO::FETCH_ASSOC);