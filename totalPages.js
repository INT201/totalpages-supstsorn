const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  let a = arrayItems;
  let b = rowsPerPage;

  if( a == null || a == undefined ){
    return undefined;
  }else if(b == null || b == undefined || b == 0){
    return 1;
  }else{
    return Math.ceil(a.length/b);
  }
 
}
module.exports = totalPages
