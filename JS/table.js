function getTableHead(type){
    switch(type){
      case "delivery":
        return getTableHeadDelivery()
      case "product":
        return getTableHeadProduct()
      case "order":
        return getTableHeadOrder()
      case "van":
    }
  }
  
  function getTableBody(type, object){
    switch(type){
      case "delivery":
        return getTableBodyDelivery(object)
      case "product":
        return getTableBodyProduct(object)
      case "order":
        return getTableBodyOrder(object)
      case "van":
    }
  }