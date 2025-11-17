<?php

// Função callback ativada qd entro na url do post

function api_produto_get($request){
  $response = produto_scheme($request['slug']);
  
  return rest_ensure_response($response);
};

function registrar_api_produto_get(){

  // funçao WP do tipo - registro de api | argumentos: a) rota b) rota c) opções

  $options = array(
    array(
      'methods' => WP_REST_Server::READABLE,
      'callback' => 'api_produto_get',
    ),
  );
  
  // WP - rota
  register_rest_route('api/v1', '/produto/(?P<slug>[-\w]+)', $options);
}

// 'rest_api_init' --> WP
add_action('rest_api_init', 'registrar_api_produto_get');
?>