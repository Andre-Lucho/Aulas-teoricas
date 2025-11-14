<?php

// Função callback ativada qd entro na url do post

function api_usuario_post($request){
  // request == corpo e demais dados da requisição

  $nome = sanitize_text_field($request['nome']);
  $email = sanitize_email($request['email']);
  $senha = sanitize_text_field($request['senha']);
  $rua = sanitize_text_field($request['rua']);
  $cep = sanitize_text_field($request['cep']);
  $numero = sanitize_text_field($request['numero']);
  $bairro = sanitize_text_field($request['bairro']);
  $cidade = sanitize_text_field($request['cidade']);
  $estado = sanitize_text_field($request['estado']);


  $user_exists = username_exists($email);
  $email_exists = email_exists($email);

  
  if(!$user_exists && !$email_exists && $email && $senha){
    // funçao WP do tipo - criar usuário | argumentos: username, senha, email
    $user_id = wp_create_user($email, $senha, $email);
    
    $response = array(
      'ID' => $user_id,
      'display_name' => $nome,
      'firts_name' => $nome,
      'role' => 'subscriber'
    );

    wp_update_user($response);

    // meta-dados que serão atualizados no BD
    update_user_meta($user_id, 'cep', $cep);
    update_user_meta($user_id, 'rua', $rua);
    update_user_meta($user_id, 'numero', $numero);
    update_user_meta($user_id, 'bairro', $bairro);
    update_user_meta($user_id, 'cidade', $cidade);
    update_user_meta($user_id, 'estado', $estado);

  } else {
    $response = new WP_Error('email', 'O email já foi cadastrado', array('status' => 403));
  }
  // ultima array - escolho os tipos de status de erro que quero mostrar
  // 403 - Post - alteração não permitida

    // funçao WP do tipo - resposta de api
  return rest_ensure_response($response);
};

function registrar_api_usuario_post(){

  // funçao WP do tipo - registro de api | argumentos: a) rota b) rota c) opções

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