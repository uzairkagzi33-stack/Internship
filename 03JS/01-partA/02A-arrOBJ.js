//Array of object
let products = [

    {
        id:1,
        name:"mouse",
        price:499,
        inStock:"yes"
    },
    {
        id:2,
        name:"kayboard",
        price:799,
        inStock:"yes"
    },
    {
        id:3,
        name:"display",
        price:1799,
        inStock:"no"
    },
    
]
//new object
const newProduct ={
    id:11,
    name:"cable",
    price:299,
    inStock:"yes"
}
//before push
console.log('BeforePush');
console.log(products);

products.push(newProduct)
//after push
console.log('AfterPush');
console.log(products);
//deleting last element
console.log('Poped an element');
products.pop();
console.log(products);

// console.log(products[0].price);
console.log('After Price Update');
products[0].price = 599;
console.log(products);

//printing names
console.log('all products name:');
let arrayLength = products.length;
// console.log(arrayLength);
products.forEach(element => {
    console.log(element.name);
});
// console.log(products[0].name);

//filtering elements
console.log('after filtering Products inStock:');
// let productInStock = products.filter(
//         e => {e.inStock==="yes"|| e.inStock==="Yes"
//     })
const productsInStock = products.filter(product => {
  return product.inStock == 'yes';
})
console.log(productsInStock);