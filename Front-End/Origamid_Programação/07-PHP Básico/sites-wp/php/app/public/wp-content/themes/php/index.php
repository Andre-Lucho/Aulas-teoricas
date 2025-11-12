<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
    
  <?php

    $marca = 'Handel';
    $compras = 125;
    $aluno_comprou = true;
    $nome = 'André';
    $nome2 = ' Lucho';

    // echo get_the_title();
    // echo $nome;


    $nome_completo = "Esse é o meu nome: $nome ";
    // aspas duplas permitem setar variáveis dentro de strings === template string - JS


// Arrays

    $placas_de_video = ['RTX5090', 'RTX4060', 'RX580', 'RX7600', 'RX9060'];
    ?>

  <?php
    $lista_de_produtos = [
      [
        'nome' => 'Camisa Preta',
        'preco' => 'R$ 129,00',
        'estoque' => 10,
        'foto' => [
          'src' => './img/foto.jpg',
          'alt' => 'Foto do Produto'
        ],
      ],
      [
        'nome' => 'Bermuda',
        'preco' => 'R$ 89,00',
        'estoque' => 18,
        'foto' => [
          'src' => './img/foto.jpg',
          'alt' => 'Foto do Produto'
        ],
      ]
    ];

  ?>
<body>
  <h1><?php echo 'ssssssssssss'; ?></h1>
  <!-- uma string direto -->

  <h1>
    <?php echo $nome; ?> 
    <?= $nome2; ?>
  </h1>

  <h1><?= $nome . $nome2; ?></h1> 
  <!-- concatenação de variaveis -->

  <h2><?= $nome_completo; ?></h2>

  <p> ---------------------------------------------------------------- </p>

  <pre>
    <ul>
      <li><?= print_r($placas_de_video); ?></li>
      <li><?= var_dump($placas_de_video); ?></li>
    </ul>
  <!-- para debug  || <pre> == formatação  -->
    <p>
      <?= print_r($lista_de_produtos)?>
    </p>
  </pre>

  <h2><?= $lista_de_produtos[0]['nome']; ?></h2>
  <p><?= $lista_de_produtos[0]['preco']; ?></p>
  <p><?= $lista_de_produtos[0]['foto']['alt']; ?></p>
  <!-- retorno em tela dos elementos do objeto de acordo com o seu índice -->

  <p> ---------------------------------------------------------------- </p>
<!-- Loops -->


<?php

  for($i=0; $i<=10;$i++){
      echo $i . ' ';
    };

    foreach($lista_de_produtos as $produto){
      echo '<h2>' . $produto['nome'] . '</h2>';
    }
    
?>
  <p> ---------------------------------------------------------------- </p>

<!-- ForEach-->


<!-- código php-->
  <?php foreach($lista_de_produtos as $produto) { ?>

<!-- html -->
  <h1><?= $produto['nome']; ?></h1>
  <span><?= $produto['preco']; ?></span>

<?php } ?>

  <?php

    $produtos = [
      'nome' => 'Camisa Preta',
      'preco' => 'R$ 129,00',
      'estoque' => 10,
  ];
  ?>

    <?php

    $produtos2 = [
      [
      'nome' => 'Camisa Preta',
      'preco' => 'R$ 129,00',
      'estoque' => 10,
      ],
      [
        'nome' => 'Bermuda',
        'preco' => 'R$ 89,00',
        'estoque' => 18,
      ]
  ];
  ?>


<!-- foreach key => value de uma array simples -->

<?php foreach($produtos as $key => $value) { ?>
  <p><?= $key; ?>: <?= $value; ?></p>
  <?php } ?>
  
  <p> ---------------------------------------------------------------- </p>

  <!-- foreach key => value de uma array de objetos -->

  <?php foreach($produtos2 as $key => $chave) { ?>
      <?php foreach($chave as $key => $valor) { ?>
        <h2><?= $key;?>: <?= $valor;?></h2>

      <?php }?>
  <?php }?>



</body>
</html>
