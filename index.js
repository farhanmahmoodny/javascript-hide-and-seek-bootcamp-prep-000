
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  var app = document.getElementById('app')
  var nested = app.children[4]
  var target = nested.getElementByClassName('target')
  return target
}
