const products = [
    {
        id:1,
        image:"./asset/products1.jpg",
        title:"Raymond Shirt and Pant Set",
        rating:"4.0",
        pricing:"60"
        
    },
    {
        id:2,
        image:"./asset/product2.jpg",
        title:"Turtle Casual Wear",
        rating:"4.2",
        pricing:"45"
    },
    {
        id:3,
        image:"./asset/products3.jpg",
        title:"Trousers",
        rating:"4.5",
        pricing:"25"
    },
    {
        id:4,
        image:"./asset/product4.jpg",
        title:"Occassion Suits",
        rating:"4.5",
        pricing:"120"
    },
    {
        id:5,
        image:"./asset/products5.png",
        title:"Campus Style Set",
        rating:"4.3",
        pricing:"150"
    },
    {
        id:6,
        image:"https://img.freepik.com/free-photo/full-length-view-lovely-french-girl-with-handbag-studio-shot-glamorous-young-woman-posing-pink-background_197531-17439.jpg?size=626&ext=jpg",
        title:"Campus Style Set",
        rating:"4.3",
        pricing:"150"
    },
    {
        
            id:7,
            image:"https://image.freepik.com/free-photo/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing_197531-11045.jpg",
            title:"Campus Style Set",
            rating:"4.3",
            pricing:"150"
        
    },
    {
        
        id:8,
        image:"https://img.freepik.com/free-photo/perky-girl-stylish-glasses-stares-amazement-walking-pink-wall-brunette-culottes-orange-blouse-posing-with-red-handbag_197531-14254.jpg?size=626&ext=jpg&ga=GA1.2.2079282981.1626998400",
        title:"Campus Style Set",
        rating:"4.3",
        pricing:"150"
    },
    {
        
        id:9,
        image:"https://image.freepik.com/free-photo/style-fashion-mens-wear-concept-handsome-positive-young-businessman-posing-isolated-with-hand-pocket-stylish-black-jeans-looking-back-having-cheerful-facial-expression_343059-4598.jpg",
        title:"Campus Style Set",
        rating:"4.3",
        pricing:"150"
    },
    {
        
        id:10,
        image:"https://hips.hearstapps.com/elleuk.cdnds.net/17/14/4000x2666/gallery-1491388792-2017-03-10-elle-armani-look-60080.jpg?resize=480:*",
        title:"Campus Style Set",
        rating:"4.3",
        pricing:"150"
    },
    {
        
        id:11,
        image:"https://us.123rf.com/450wm/namiros/namiros1904/namiros190400117/121120936-beautiful-brunette-in-a-red-t-shirt-and-jeans-is-smiling-on-a-yellow-background.jpg?ver=6",
        title:"Campus Style Set",
        rating:"4.3",
        pricing:"150"
    },
    {
        
        id:12,
        image:"https://vwtrendz.com/wp-content/uploads/2019/07/woman-green-dress-hat-yellow-background_1303-10554-1.jpg",
        title:"Campus Style Set",
        rating:"4.3",
        pricing:"150"
    },
    {
        
        id:13,
        image:"https://i.pinimg.com/736x/71/e1/ee/71e1ee228d6825fa0c06e5b4b021802b.jpg",
        title:"Campus Style Set",
        rating:"4.3",
        pricing:"150"
    },
    {
        
        id:14,
        image:"https://cocainemodels.de/wp-content/uploads/2018/12/modeling-agency-modelagentur-jungs-junge-maenner-mode-boy-boys-fashion.jpg",
        title:"Campus Style Set",
        rating:"4.3",
        pricing:"150"
    },
    {
        
        id:15,
        image:"https://media.istockphoto.com/photos/full-length-portrait-of-excited-pretty-woman-with-brown-hair-in-and-picture-id1198136984?k=20&m=1198136984&s=612x612&w=0&h=pniiNt6Cxnt8Vm4rBdjod1q7fRFvBUdHJYCuBHEDhwA=",
        title:"Campus Style Set",
        rating:"4.3",
        pricing:"150"
    },
    {
        
        id:16,
        image:"https://image.freepik.com/free-photo/joyful-short-haired-guy-jumping-indoor-photo-stunning-male-model-green-t-shirt-having-fun_197531-20111.jpg",
        title:"Campus Style Set",
        rating:"4.3",
        pricing:"150"
    },
    
]
let cart = [];
let isCartVisible = false;
let currentProduct = products;
let lastActivePage = null;
function setActivePage(currentActive){
    
    if (lastActivePage != null && document.getElementById(lastActivePage))
        document.getElementById(lastActivePage.toString()).classList.remove('active-page')
    document.getElementById(currentActive).classList.add("active-page");
    lastActivePage = currentActive;
}

function getProducts(shop_products = products){
    
    let all_produts = "";
    shop_products.forEach(element => {
        all_produts+=`
    <div class="products-garments">
    <img src=${element.image} alt="" class="product-image">
        <div class="products-info">
            <p class="products-title">${element.title}</p>
            <p class="products-rating">Rating: ${element.rating}</p>
            <p class="products-price">price: $${element.pricing}</p>
            <div class="btns-container">
                <button class="btn-cart" onclick="addToCart(${element.id})">Add to Cart</button>
                <button class="btn-buy">Buy Now</button>
            </div>

        </div>
    </div>
    `
    
    const dom_element = document.getElementById('shop')
    dom_element.innerHTML = all_produts;
    
    });
}
function constructor_shop(){
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    pagination();
}
function alreadyPresent(id){
    const found  = cart.find(item=>item.id == id);
    if(found == undefined)
        return false;
    else
        return true;
}
function changeView(id){
    const element = document.getElementById(id)
    element.scrollIntoView({behavior:"smooth"});
}
function incrementQuantity(id){
    const found  = cart.find(item=>item.id == id);
    found.quantity++;
    found.total = found.quantity * found.pricing;
    showCart();
}
function decreaseQuantity(id){
    const found  = cart.find(item=>item.id == id);
    found.quantity--;
    if(found.quantity < 0)
        found.quantity = 0;
    found.total = found.quantity * found.pricing;
    showCart();
}
function addToCart(id){
    if(alreadyPresent(id)){
        incrementQuantity(id);
        return;
    }
    const item = products.filter(product=>product.id === id);
    item[0].quantity = 1;
    item[0].total = item[0].pricing;
    cart.push(item[0]);
    updateItems(cart.length);
    showCart();
}
function updateItems(length){
    const element = document.getElementById('cart-items');
    element.innerHTML=`Items ${length}`;
}
function removeItem(id){
    cart = cart.filter(item=>item.id !=id);
    showCart();
}
function showCart(){
    const Cart = document.getElementById('cart-show');
    let all_cart = "";
    let total = 0;
    cart.forEach(element=>{
        total += Number(element.total);
        all_cart += `
        <tr>
        <th>
            <div class="cart-product-image-section">
                <img src=${element.image} alt="" class="cart-product-image">
                <div class="info-products">
                    <p>${element.title}</p>
                    <p>${element.rating}</p>
                </div>
        </th>
        <th>
            <center>
            <div class="quantity-adjust">
                <button class="quantity-adjust-buttons" onclick="incrementQuantity(${element.id})"><i class="fa fa-plus" aria-hidden="true"></i></button>
                <input type="number" placeholder="1" value="${element.quantity}" class="quantity-adjust-input">
                <button class="quantity-adjust-buttons" onclick="decreaseQuantity(${element.id})"><i class="fa fa-minus" aria-hidden="true"></i></button>
            </div>
            </center>
        </th>
        <th>${element.pricing}</th>
        <th>${element.total}</th>
        <th><i class="fa fa-minus-circle remove" aria-hidden="true" onclick="removeItem(${element.id})"></i></th>
        </tr>
        `
    })
    Cart.innerHTML = all_cart;
    document.getElementById('total').innerText=`Total : ${total}`;
}

function toggleCart(){
    const btn = document.getElementById('cart-btn-show');
    const cart = document.getElementById('cart-page');
   
    if(isCartVisible){
        btn.innerHTML = 'Show Cart';
        cart.style.display = 'none';
    }
    else{
        btn.innerHTML = 'Hide Cart';
        cart.style.display = 'block';
    }
    isCartVisible = !isCartVisible;
}
function applyFilter(filter){
    let filtered = products;
    if(filter == "rating")
        filtered = products.filter(product=>Number(product.rating)>=4.5)
    else if(filter == "price"){
        filtered = products.slice();
        filtered.sort((a,b)=>b.pricing - a.pricing);
    }
    else{
        currentProduct = products;
    }
    if(filtered.length > 0){
        currentProduct = filtered;
        pagination(filtered);
    }
    
    //getProducts(filtered)
    updateActive(filter);
}
function updateActive(filter){
    const category = document.getElementsByClassName('products-category')
    for(let item of category)
        item.classList.remove('active');
    if(filter == 'rating')
        category.item(1).classList.add("active");
    else if(filter == "price")
        category.item(2).classList.add("active");
    else
        category.item(0).classList.add("active");
}
function pagination(list=products){
    const product_per_page = 8;
    const max_page = Math.floor(list.length / product_per_page) + 
    (list.length % product_per_page==0?0:1);
    
    let page_element = "";
    for(let i = 1;i<=max_page;i++){
        page_element+=`<p class="page" id="${i}" onclick="getElementsForPage(${i})">${i}</p>`;
    }
    document.getElementById('pagination').innerHTML = page_element;
    getElementsForPage(1);
}
function getElementsForPage(id){
    
    const product_per_page = 8;
    const starting_point = (id-1)*product_per_page;
    const ending_point = id*product_per_page;
    let product_page = [];
    for(let i = starting_point; i<currentProduct.length && i<ending_point;i++){
        product_page.push(currentProduct[i]);
    }
    setActivePage(id);
    getProducts(product_page)
}
