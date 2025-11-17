<?php 

// importando o caminho de custom-post-type
$template_diretorio = get_template_directory();

require_once($template_diretorio . "/custom-post-type/produto.php");
require_once($template_diretorio . "/custom-post-type/transacao.php");

require_once($template_diretorio ."/endpoints/usuario_post.php");
require_once($template_diretorio ."/endpoints/usuario_get.php");
require_once($template_diretorio ."/endpoints/usuario_put.php");

require_once($template_diretorio ."/endpoints/produto_post.php");
require_once($template_diretorio ."/endpoints/produto_get.php");
require_once($template_diretorio ."/endpoints/produtos_get.php");


// pegando o produto no DB
function get_produto_id_by_slug($slug) {
  $query = new WP_Query(array(
    'name' => $slug,
    'post_type' => 'produto',
    'numberposts' => 1,
    'fields' => 'ids'
  ));
  $posts = $query->get_posts();
  return array_shift($posts);
}

// dados de retorno(scheme) para o get em produto.php e produtos.php
function produto_scheme($slug){
  $post_id = get_produto_id_by_slug($slug);

  if($post_id){
    $post_meta = get_post_meta($post_id);

    // pegando dados da imagem no DB
    // arg - 1)tipo de dado
    $images = get_attached_media('image', $post_id);
    $images_array = null;

    if($images) {
      $images_array = array();
      foreach($images as $key => $value) {
        $images_array[] = array(
          'titulo' => $value->post_name,
          'src' => $value->guid,
        );
      }
    }

    $response = array(
      'id'=> $slug,
      'fotos'=> $images_array,
      'nome'=> $post_meta['nome'][0],
      'preco'=> $post_meta['preco'][0],
      'descricao'=> $post_meta['descricao'][0],
      'usuario_id'=> $post_meta['usuario_id'][0],
    );

  } else {
    $response = new WP_Error('não existe', 'Produto não encontrado', array('status' => 404));
  }

  return $response;
}

// adiando a validade do token para + 12h
function expire_token(){
  return time() + (60 * 60 * 24);
};

add_action('jwt_auth_expire', 'expire_token');


?>

