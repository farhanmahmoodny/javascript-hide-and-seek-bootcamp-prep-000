
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
  // var numbers = []
  // numbers = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  // for (var i = 0; i < numbers.length; i++){
  //   var num = []
  //   num += (parseInt(numbers[i])) + n
  // }
  // return num
var elements = document.getElementsByClassName('ranked-list')
for(var i = 0; i < elements.length; i++){
  var list = []
  list += parse(elements[i])
}
  for(var j = 0; j < list.length; j++){
    var listPlusN += list[j] + n
}
return listPlusN
}
