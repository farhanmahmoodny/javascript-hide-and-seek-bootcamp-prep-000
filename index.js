
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  var app = document.getElementById('app')
  var nested = app.div
  // var className = 'target'
  var target = nested.getElementByTagName('target')
  return target
}
