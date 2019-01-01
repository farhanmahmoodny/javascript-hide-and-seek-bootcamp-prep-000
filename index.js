
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  // className ==='target'
  return document.app.nested.getElementByClassName('target')
}
