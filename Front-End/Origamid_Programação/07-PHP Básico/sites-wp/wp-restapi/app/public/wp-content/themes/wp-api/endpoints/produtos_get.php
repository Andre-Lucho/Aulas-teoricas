<?php 

function api_produtos_get($request) {

  $q = sanitize_text_field($request['q']) ?: ''; // ternario
  $_page = sanitize_text_field($request['_page']) ?: 0;
  $_limit = sanitize_text_field($request['_limit']) ?: 10;
  $usuario_id = sanitize_text_field($request['usuario_id']);

  $usuario_id_query = null;
  if($usuario_id) {
    $usuario_id_query = array(
      'key' => 'usuario_id',
      'value' => $usuario_id,
      'compare' => '='
    );
  }

  $vendido = array(
    'key' => 'vendido',
    'value' => 'false',
    'compare' => '='
  );

  $query = array(
    'post_type' => 'produto',
    'posts_per_page' => $_limit,
    'paged' => $_page,
    's' => $q,
    'meta_query' => array(
      $usuario_id_query,
      $vendido,
    )
  );

  $loop = new WP_Query($query);
  $posts = $loop->posts;
  $total = $loop->found_posts;

  $produtos = array();
  foreach ($posts as $key => $value) {
    $produtos[] = produto_scheme($value->post_name);
  }

  $response = rest_ensure_response($produtos);
  $response->header('X-Total-Count', $total);

  return $response;
}

function registrar_api_produtos_get() {
  register_rest_route('api/v1', '/produto', array(
    array(
      'methods' => WP_REST_Server::READABLE,
      'callback' => 'api_produtos_get',
    ),
  ));
}
add_action('rest_api_init', 'registrar_api_produtos_get');

?>