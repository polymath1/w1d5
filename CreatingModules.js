var list = []
var lola =  function(num){
  list.push(num)

}

// lola("1");
// lola("22");
// lola("3");
// lola("42");
// lola("5");
// console.log(list)


function sortList() {
  return list.sort(function(a,b) {
    return a - b;
  });
}

module.exports = {
  lola: lola,
  sortList: sortList
}