<?php 

    require("connect.php");
    include("common.php");
    
    $errors = "";

    if(!empty($_POST))
    {
        if(empty($_POST['email']))
            die("&#8226 Please enter an email<br>");

        if(empty($_POST['role']))
            die("&#8226 Please enter a role:$role<br>");

        elseif(!filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
            die("&#8226 Invalid email address<br>");

        $query = "SELECT 1 
                  FROM signups
                  WHERE email = :email";

        $queryParams = array(':email' => $_POST['email']);

        try
        {
            $stmt = $db->prepare($query);
            $result = $stmt->execute($queryParams);
        }
        catch(PDOException $ex)
        {
            //TODO
            die("failed to run query" . $ex->getMessage());
        }

        $row = $stmt->fetch();

        if($row)
            die($errors . "&#8226 This email is already registered<br>");
        elseif($errors)
            die($errors);

	
        $query = "INSERT INTO signups( 
                email,
                role,
                hostname
                ) VALUES ( 
                    :email,
                    :role,
                    :hostname
                ) 
        "; 

        if($_POST['role'] != 'Student' &&
            $_POST['role'] != 'Business')
            die("Invalid role selected");

        $query_params = array(
            'email' => $_POST['email'],
            'role' => $_POST['role'],
	    'hostname' => get_client_ip()
        );

        try 
        {
            $stmt = $db->prepare($query);
            $result = $stmt->execute($query_params);
        }
        catch(PDOException $ex)
        {
            //TODO
            die("database insert error " . $ex->getMessage());
        }
        die();
    }
