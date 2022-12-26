function getTableHead(type){
    switch(type){
      case "delivery":
        return getTableHeadDelivery()
      case "product":
        return getTableHeadProduct()
      case "order":
        return getTableHeadOrder()
      case "van":
        return getTableHeadVan()
    }
  }
  
  function getTableBody(type, object) {
    console.log('tablebody: (' + type +')')
    switch (type) {
      case "delivery":
        return getTableBodyDelivery(object);
      case "product":
        return getTableBodyProduct(object);
      case "product-view-all":
        return getTableBodyProduct(object);
      case "order":
        return getTableBodyOrder(object);
      case "van":
        return getTableBodyVan(object);
      case "van-view-all":
        return getTableBodyVanDetail(object);
    }
  }