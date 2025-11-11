<!-- 

Loop
------------------------------------------------

O loop que mais iremos utilizar é o foreach() -->

<?php
for($i = 0; $i <= 10; $i++) {
  echo $i;
}

$produtos = [
  [
    'nome' => 'Camisa Preta',
    'preco' => 'R$ 49'
  ],
  [
    'nome' => 'Bermuda Branca',
    'preco' => 'R$ 99'
  ]
];

foreach($produtos as $produto) {
  echo '<h1>' . $produto['nome'] . '</h1>';
}
?>

<!-- 

Loop e html
------------------------------------------------
Podemos fechar e abrir o php para interagirmos direto no html. -->

<?php foreach($produtos as $produto) { ?>

  <h1><?= $produto['nome']; ?></h1>
  <span><?= $produto['preco']; ?></span>

<?php } ?>

<!-- Sintaxe alternativa com o endforeach -->

<?php foreach($produtos as $produto) : ?>

  <h1><?= $produto['nome']; ?></h1>
  <span><?= $produto['preco']; ?></span>

  <?php endforeach; ?>
<!--  -->

<!-- 

$key => $value
------------------------------------------------
Podemos puxar também o valor da chave direto no foreach. -->

<?php
$produto = [
  'nome' => 'Camisa Preta',
  'preco' => 'R$ 29'
];
foreach($produto as $key => $value) { ?>

  <p><?= $key; ?>: <?= $value; ?></p>

<?php } ?>


<!-- 

Condicionais
------------------------------------------------
Temos if, else e elseif -->

<?php
$vitalicio = true;

if($vitalicio) {
  $liberar_curso = true;
} else {
  $liberar_curso = false;
}
?>

<?php
$produto = [];

if(!empty($produtos)) {
  echo $produto;
} else {
  echo "Não existe nenhum produto";
}
?>

<?php
if($vitalicio || $anual) {
  echo "Entre em contato com o suporte";
} elseif($mensal) {
  echo "Você não possui suporte";
} else {
  echo "Faça o login na sua conta";
}
?>

<?php if($vitalicio) : ?>
  <h1>Bem vindo ao vitalício</h1>
<?php endif; ?>

<!-- Ternário -->

<?php
$preco = 120;
$mensagem = $preco > 100 ? "Caro" : "Barato";
echo $mensagem;
?>
