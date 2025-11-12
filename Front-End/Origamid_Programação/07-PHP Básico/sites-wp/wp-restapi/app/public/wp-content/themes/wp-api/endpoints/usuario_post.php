<?php

// Função callback ativada qd entro na url do post

function api_usuario_post($request){
  // request == corpo e demais dados da requisição

  // mokado
  $response = array(
    'nome' => 'André',
    'email' => 'andre@gmail.com'
  );

  // funçao WP do tipo - resposta de api
  return rest_ensure_response($response);
};

function registrar_api_usuario_post(){

  // funçao WP do tipo - registro de api:
  // argumentos: 
  // a) rota b) rota c) opções

  $options = array(
    array(
      'methods' => WP_REST_Server::CREATABLE, // == Método PUT
      'callback' => 'api_usuario_post',
    ),
  );
  
  // WP - rota
  register_rest_route('api/v1', '/usuario', $options);
}

// 'rest_api_init' --> WP
add_action('rest_api_init', 'registrar_api_usuario_post');
?>