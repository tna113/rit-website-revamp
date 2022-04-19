<?php
//supress warnings & errors
error_reporting(0);

//constant, notice without slash at the end
//sets the base of the url we want to hit
define ('HOSTNAME', 'http://www.ist.rit.edu/api');

//access the api - remember we have to send in a leading '/'
//so the path variable could be '/about/'
$url=HOSTNAME.$_GET['path'];

//set up curl (Client Uniform Resource Locator)
//scrape the page and return what we want
	//  Initiate curl
	$ch = curl_init();

	//set up 3 different options	
	// allow us to include a header in the return (we are setting to false as we don't need to) we dont want it so we set it to false!
	curl_setopt($session, CURLOPT_HEADER, false);
	// Will return the response, if false it print the response (we want to capture it in a variable $result) and not blurt it out
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	// Set the url
	curl_setopt($ch, CURLOPT_URL,$url);
	// Execute
	$result=curl_exec($ch);
	// Closing
	curl_close($ch);

//file type like .doc .pdf etc... telling the browser what type of thing is coming in so they can deal with it accordingly
//we want json back so set the correct mimetype
header("Content-Type: application/json"); //could do text/plain but leaves us vulnerable to security threats

//give it to me!
echo $result;

//we're building the URL in order to get specific data we want
//if feeding /people, would give us /people data...etc
?>