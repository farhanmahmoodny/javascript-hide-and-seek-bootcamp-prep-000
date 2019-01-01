
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  var app = document.getElementById('app')
  var nested = app.children[3]
  // var className = 'target'
  var target = nested.getElementByclassName('target')
  return target
}
