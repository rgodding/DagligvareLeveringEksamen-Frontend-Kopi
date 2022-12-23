function getTableHead(type){
    switch(type){
      case "delivery":
      case "product":
        return getTableHeadProduct()
      case "order":
      case "van":
    }
  }
  
  function getTableBody(type, object){
    switch(type){
      case "delivery":
      case "product":
        return getTableBodyProduct(object)
      case "order":
      case "van":
    }
  }