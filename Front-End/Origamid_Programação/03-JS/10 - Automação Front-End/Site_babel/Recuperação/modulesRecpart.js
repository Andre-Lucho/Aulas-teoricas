/* NAVEGAÇÃO POR TABS */

.js [data-tab="content"] section {
  display: none;
}

[data-tab="content"] section.actived {
  display: block !important;
}

[data-tab="content"] section.actived.show-right {
  animation: show-right 0.7s forwards;
  /* show= nome da animação no @keyframes;
  0.7s = tempo de duração da animação;
  forwards = a animação permanece no posição 'to' do @keyframes  */
}

[data-tab="content"] section.actived.show-down {
  animation: show-down 0.7s forwards;
  /* show= nome da animação no @keyframes;
  0.7s = tempo de duração da animação;
  forwards = a animação permanece no posição 'to' do @keyframes  */
}

/* NAVEGAÇÃO ACCORDION */

.js [data-anime="accordion"] dd {
  display: none;
}

[data-anime="accordion"] dd.actived {
  display: block;
  animation: slideDown 0.9s forwards;
}

[data-anime="accordion"] dt::after {
  content: "🐺";
  margin-left: 5px;
}

[data-anime="accordion"] dt.actived::after {
  content: "🐯";
  margin-left: 5px;
}

.js [data-anime="scroll"] {
  opacity: 0;
  transition: 0.3s;
  transform: translate3d(-20px, 0px, 0px);
}

[data-anime="scroll"].actived {
  opacity: 1;
  transform: translate3d(10px, 0px, 0px);
}
