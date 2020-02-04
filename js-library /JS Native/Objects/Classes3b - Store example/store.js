class Store {
  constructor(name,stock) {
    this.name = name
    this.stock = stock
    this.revenue = 0
  }

  processProductSale(name){
    if(name.count === 0){
      return console.log("You can't buy this! It's out of stock!")
    }
    this.stock.forEach((item,index)=>{
      if(item.name === name){
        console.log(this.revenue)
        this.revenue += this.stock[index].price
        console.log(this.revenue)
        this.stock[index].count--
      }
    })
  }
  
  replenishStock(name,count){
    this.stock.forEach((item,index)=>{
      if(item.name === name){
        this.stock[index].count += count
      }
    })
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

var myStore = new Store("Br's",[{name:"Some",price:50},{name:"yeah",price:50}])
myStore.processProductSale("yeah")
module.exports = Store;
