<?php

// Função callback ativada qd entro na url do post

function api_usuario_put($request){

  // verificar se está logada
  $user = wp_get_current_user();
  $user_id = $user->ID;

  if($user_id > 0){
    $nome = sanitize_text_field($request['nome']);
    $email = sanitize_email($request['email']);
    $senha = sanitize_text_field($request['senha']);
    $rua = sanitize_text_field($request['rua']);
    $cep = sanitize_text_field($request['cep']);
    $numero = sanitize_text_field($request['numero']);
    $bairro = sanitize_text_field($request['bairro']);
    $cidade = sanitize_text_field($request['cidade']);
    $estado = sanitize_text_field($request['estado']);
  
    $email_exists = email_exists($email);
  
    if($email_exists && $email_exists === $user_id){
      
      $response = array(
        'ID' => $user_id,
        'user_pass' => $senha,
        'user_email' => $email,
        'display_name' => $nome,
        'firts_name' => $nome,
      );

      // WP não permite a mudança de usuário == email
  
      wp_update_user($response);
  
      update_user_meta($user_id, 'cep', $cep);
      update_user_meta($user_id, 'rua', $rua);
      update_user_meta($user_id, 'numero', $numero);
      update_user_meta($user_id, 'bairro', $bairro);
      update_user_meta($user_id, 'cidade', $cidade);
      update_user_meta($user_id, 'estado', $estado);
  
    } else {
      $response = new WP_Error('email', 'O email já foi cadastrado', array('status' => 403));
    }
  } else {
      $response = new WP_Error('permissão', 'Usuário não possui permissão de edição', array('status' => 401));

  }

  return rest_ensure_response($response);
};

function registrar_api_usuario_put(){

  // funçao WP do tipo - registro de api | argumentos: a) rota b) rota c) opções

  $options = array(
    array(
      'methods' => WP_REST_Server::EDITABLE, // == Método PUT
      'callback' => 'api_usuario_put',
    ),
  );
  
  // WP - rota
  register_rest_route('api/v1', '/usuario', $options);
}

// 'rest_api_init' --> WP
add_action('rest_api_init', 'registrar_api_usuario_put');
?>