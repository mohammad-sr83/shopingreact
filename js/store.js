let product=[
    {id:5,name:'Albom1',img:'Images/Album 1.png',price:12.99},
    {id:6,name:'Albom2',img:'Images/Album 2.png',price:14.99},
    {id:1,name:'Albom3',img:'Images/Album 3.png',price:23.45},
    {id:2,name:'Albom4',img:'Images/Album 4.png',price:53.00},
    {id:3,name:'Albom5',img:'Images/Band Members.png',price:34.6},
    {id:4,name:'Albom6',img:'Images/Cofee.png',price:87.45},   
]
let shopItems=document.querySelector('.shop-items')
let btn = document.querySelector('.btn')
let cartRow=document.querySelector('.cart-row')
let priceCart=document.querySelector('.cart-total-price')
let sum = 0 ;
let result = []
product.forEach(function(item){
    shopItems.insertAdjacentHTML('beforeend','<div class="shop-item"><span class="shop-item-title">'+item.name+'</span><img class="shop-item-image" src="'+item.img+'"><div class="shop-item-details"><span class="shop-item-price">'+item.price+'</span><button class="btn btn-primary shop-item-button" onclick="AddProduct('+ item.id+')">ADD TO CART</button></div></div>')
    
})

function BoxRow(resultProduct){
    resultProduct.forEach(function(item){
        cartRow.insertAdjacentHTML('afterend','<div class="cart-row"><div class="cart-item cart-column"><img class="cart-item-image" src="'+item.img+'"><span class="cart-item-title">'+item.name+'</span></div><span class="cart-price cart-column">'+item.price+'</span><div class="cart-quantity cart-column"><input class="cart-quantity-input" type="number" value="1"><button class="btn btn-danger" onclick="removeProduct('+item.id+')">REMOVE</button></div></div>')
    })
}
function AddProduct(productid){
    result=[]
    let productItem=product.find(function(product){
        return product.id === productid
    })
    result.push(productItem)
    BoxRow(result)
}
function removeProduct(productid){
    let index = result.filter(function(product){
        return product.id !==productid
    })
    result.splice(index,1)
    BoxRow(result)
}



