<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require_once 'config/db.php';
require 'vendor/autoload.php';

spl_autoload_register(function ($classname) {
    require ("classes/" . $classname . ".php");
});

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$config['db']['host']   = DB_HOST;
$config['db']['user']   = DB_USERNAME;
$config['db']['pass']   = DB_PASSWORD;
$config['db']['dbname'] = DB_NAME;

$app = new \Slim\App(["settings" => $config]);

$container = $app->getContainer();

$container['db'] = function ($c) {
    $db = $c['settings']['db'];
    $pdo = new PDO("mysql:host=" . $db['host'] . ";dbname=" . $db['dbname'], $db['user'], $db['pass']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    return $pdo;
};

$app->get('/standings', function (Request $request, Response $response) {
	//$this->logger->addInfo("Current Standings");
	$mapper = new StandingsMap($this->db);
	$standings = $mapper->getStandings();
	$response->getBody()->write(var_export($standings, true));
	return $response;	
});

$app->get('/teams', function (Request $request, Response $response) {
	$mapper = new TeamsMap($this->db);
	$teams = $mapper->getTeams();
	$response->getBody()->write(var_export($teams, true));
	return $response;
});

$app->get('/players', function (Request $request, Response $response) {
	$mapper = new PlayersMap($this->db);
	$players = $mapper->getPlayers();
	$response->getBody()->write(var_export($players, true));
	return $response;
})




$app->run();

