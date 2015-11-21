<?php

    $username = "root";
    $password = "";
    $host = "localhost";
    $dbname = "evineer";

    // use utf8
    $options = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');

    try
    {
        $db = new PDO("mysql:host={$host};dbname={$dbname};charset=utf",
                    $username,$password,$options);
    } 
    catch(PDOException $ex)
    {
        die("<h1 style='font-family:arial, sans-serif'> Error connecting to database<h1>\n");
        //need to add something better to do here when this happens
    }
    
    // Throws an exception when a database error occurs
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //makes the PDO return content as a string indexed array, where
    //the indices are column names
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    // This fucks off magic quotes cause who the fuck wants them anyway
    if(function_exists('get_magic_quotes_gpc') && get_magic_quotes_gpc()) 
    { 
        function undo_magic_quotes_gpc(&$array) 
        { 
            foreach($array as &$value) 
            { 
                if(is_array($value)) 
                { 
                    undo_magic_quotes_gpc($value); 
                } 
                else 
                { 
                    $value = stripslashes($value); 
                } 
            } 
        } 
     
        undo_magic_quotes_gpc($_POST); 
        undo_magic_quotes_gpc($_GET); 
        undo_magic_quotes_gpc($_COOKIE); 
    } 

    // This tells the browser to submit content encoded in utf8
    header('Content-Type: text/html; charset=utf-8'); 
    session_start(); 
