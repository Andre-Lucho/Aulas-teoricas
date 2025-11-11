<!-- 

Funções
------------------------------------------------
A maior parte da integração do WordPress com o Front é feita através de funções que 
retornam valores salvos no banco de dados. -->

<?php

function preco() {
  return 129;
}

function preco_final($valor) {
  return 'R$ ' . $valor;
}

echo preco_final(preco());

?>


<!-- 

Corpo da Função
------------------------------------------------
Caso exista código html dentro do corpo da função, o mesmo será retornado toda vez que essa for ativada. -->

<?php
function formulario_contato() {
?>
  <form>
    <input type="text" placeholder="Buscar...">
    <input type="submit" value="Enviar"/>
  </form>
<?php
}
?>

<?php formulario_contato(); ?>

<?php
function formulario_contato() {
  return '<form>
    <input type="text" placeholder="Buscar...">
    <input type="submit" value="Enviar"/>
  </form>';
}
?>

<?php echo formulario_contato(); ?>


<!-- Argumentos-->

<?php
function somar($a, $b) {
  return $a + $b;
}

echo somar(25, 15);
?>

function valor_final($valor, $moeda = 'R$ ') {
  return $moeda . $valor;
}

echo valor_final(100);
echo '<br>';
echo valor_final(100, '$');
