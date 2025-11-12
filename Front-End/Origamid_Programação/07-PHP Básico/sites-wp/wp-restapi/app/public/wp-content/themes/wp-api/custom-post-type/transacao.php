<?php

  $args = array(
    'label' => 'Transacao',
    'description' => 'Transacao',
    'public' => true,
    'show_ui' => true,
    'capability_type' => 'post',
    'rewrite' => array('slug'=> 'transacao', 'with_front' => true),
    'query_var' => true,
    'suports' => array('custom-fields', 'author', 'title'),
    'public_queryable' => true,
  );

  function registrar_cpt_transacao(){
    global $args;

   // função do WP
    register_post_type('transacao', $args);
  };

  // função do WP para ativar a funct acima
  add_action('init', 'registrar_cpt_transacao');
  
?>