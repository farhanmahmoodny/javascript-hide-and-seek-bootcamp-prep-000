
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
  // var doc = document
  // .getElementById('app')
  // .querySelectorAll('ul.randked-list li')
  // for(var i = 0; i < doc.length; i++){
  //   var increaseBy = n
  //   doc[i].innerHTML = (i + increaseBy).parseInt()
  // }
  // return doc
  return parseInt(document.getElementById('app').querySelectorAll('ul.ranked-list li') + n
}
