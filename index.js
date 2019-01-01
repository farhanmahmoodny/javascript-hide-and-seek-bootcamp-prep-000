
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#app #nested .target')
}

function deepestChild(){
  return document.querySelector('#app #grand-node div div div div')
}

function increaseRankBy(n){
  var list = document.querySelector('#app ul.ranked-list').querySelectorAll('li')
  for(var i = 0; i <list.length; i++){
    parseInt(list[i].innerHTML) + n
  }
  return list
}
