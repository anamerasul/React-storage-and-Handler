//use lacal stroage to manage cart data

const addToDb=id=>{

let shoppingCart={}


// get the shopping cart
const storedCart=localStorage.getItem('shopping-Cart')

if (storedCart){
 shoppingCart=JSON.parse(storedCart)

}

else{
    shoppingCart={}
}


    // const quantity=localStorage.getItem(id)

    //add quantity
    const quantity=shoppingCart[id]
    if(quantity){
// console.log('alreday exsits')
// const newQuantity=+quantity+1
const newQuantity=quantity+1
shoppingCart[id]=newQuantity

// const newQuantity=(parseInt(quantity))+1;
// localStorage.setItem(id,newQuantity)

    }

    else{

        shoppingCart[id]=1;
        // console.log('new item')
        // localStorage.setItem(id,1)
    }
    localStorage.setItem('shopping-Cart',JSON.stringify(shoppingCart))
}

export {addToDb}