<!--

Classes
------------------------------------------------

Classes são "funções" especiais responsáveis pela a criação de objetos. -->

<?php

class Produto {
  public $preco = 14900;

  public function nome() {
    return 'Camisa Preta';
  }
  
  public function preco_final() {
    return 'R$ ' . $this->preco / 100;
  }
}
// $this-> === this.método ou propriedade no JS
// ao invés do .(ponto), tenho '->'

// instanciando Produto
$camisa = new Produto();

echo $camisa->preco;
echo $camisa->nome();
echo $camisa->preco_final();

?>


<!-- 

Propriedades e Métodos
------------------------------------------------
As funções abaixam listam as propriedades e métodos. -->

<?php
$classe_propriedades = get_class_vars('Produto');
$classe_metodos = get_class_methods('Produto');
?>


<!-- Classes de WordPress e Woo -->

<?php
$args = [
  'post_type' => 'product'
];
$query = new WP_Query($args);
?>

<?php foreach($query->posts as $post) { ?>
  <h1><?= $post->post_title; ?></h1>
  <p><?= $post->ID; ?></p>
<?php } ?>

$product = wc_get_product(10);
print_r($product);

echo $product->get_name();
echo $product->get_price();


<!-- Para mais classes https://codex.wordpress.org/Class_Reference 
 e https://docs.woocommerce.com/wc-apidocs/ -->