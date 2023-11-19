$(document).ready(function() {
  //  botão de feedback
  const btn_thunb = $("#thunbs")
  const contador = $("#feedback #thunbs .contador span")
  const like = function() {

    if (btn_thunb.hasClass("disabled")) {
      return
    }
    const numero = parseInt(contador.text())
    contador.text(numero + 1)
    btn_thunb.addClass("disabled")
    const p = $('<p>', {
      text: 'Obrigado pelo seu feedback!'
    })
    btn_thunb.after(p)
  }


  btn_thunb.on("click", like)
  // botão de quantidade
  const btn_mais = $("#mais_q")
  const btn_menos = $("#menos_q")
  const contador_q = $("#quantidade #contador_q span")
  const up = function() {
    const numero = parseInt(contador_q.text())
    contador_q.text(numero + 1)
  };
  const down = function() {
    const numero = parseInt(contador_q.text())
    if (numero > 0) { contador_q.text(numero - 1) }

  };

  btn_mais.on("click", up)
  btn_menos.on("click", down)

});
