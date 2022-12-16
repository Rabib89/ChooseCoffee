<template>
    <div id="dashboard">
        <div class="container">
            <h1>We Are Now at Your Town</h1>
            </div>

        <header>
            <div class="container">
                <div class="brand">
                    <div class="logo">
                        <a href="/dashboard">
                            <img src="../../assets/icons/logo1.png">
                        </a>
                    </div> <!-- logo -->
                    <div class="shop-icon">
                        <div class="dropdown">
                            <img src="../../assets/icons/account.png">
                            <div class="dropdown-menu">
                                <ul>
                                    <li><a href="/account">My Account</a></li>
                                    <li><a href="/orders">My Orders</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- <div class="dropdown">
                            <img src="../../assets/icons/heart.png">
                            <div class="dropdown-menu wishlist-item">
                                <table border="1">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><img src="../../assets/product/Americano-Starbucks.jpg"></td>
                                            <td>product name</td>
                                        </tr>
                                        <tr>
                                            <td><img src="../../assets/product/Americano-Starbucks.jpg"></td>
                                            <td>product name</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div> -->
                        <div class="dropdown">
                            <img src="../../assets/icons/shopping_cart.png">
                            <div class="dropdown-menu cart-item">
                                <table border="1">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th class="center">Price</th>
                                            <th class="center">Qty.</th>
                                            <th class="center">Amount</th>
                                        </tr>
                                    </thead>
                                    <!-- <tbody>
                                        <tr>
                                            <td><img src="../../assets/product/Americano-Starbucks.jpg"></td>
                                            <td>product name</td>
                                            <td class="center">1200</td>
                                            <td class="center">2</td>
                                            <td class="center">2400</td>
                                        </tr>
                                        <tr>
                                            <td><img src="../../assets/product/Americano-Starbucks.jpg"></td>
                                            <td>product name</td>
                                            <td class="center">1500</td>
                                            <td class="center">2</td>
                                            <td class="center">3000</td>
                                        </tr>
                                    </tbody> -->
                                </table>
                            </div>
                        </div>
                    </div> <!-- shop icons -->
                </div> <!-- brand -->

                <div class="menu-bar">
                    <div class="menu">
                        <ul>
                            <li><a href="/dashboard">Home</a></li>
                            <li><a href="/shop">Shop</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="search-bar">
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" name="search" placeholder="Search">
                                <img src="../../assets/icons/search.png">
                            </div>
                        </form>
                    </div>
                </div> <!-- menu -->
            </div> <!-- container -->
        </header>
        <div class="container1">
            <main>
                <div class="slider">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <!-- Slides -->
                            <div class="swiper-slide">
                                <img src="../../assets/slider/item1.jpg">
                                <!-- <div class="slider-text">
                                            <h3>Sale 40% off</h3>
                                            <h2>All Regular Coffee Items</h2>
                                            <a href="#">Shop Now</a>
                                        </div> -->
                            </div>
                            <div class="swiper-slide">
                                <img src="../../assets/slider/item2.jpg">
                                <!-- <div class="slider-text">
                                            <h3>Sale 20% off</h3>
                                            <h2>Top Items</h2>
                                            <a href="#">Shop Now</a>
                                        </div> -->
                            </div>
                            <div class="swiper-slide">
                                <img src="../../assets/slider/item3.jpg">
                                <!-- <div class="slider-text">
                                            <h3>Sale 50% off</h3>
                                            <h2>Special Items</h2>
                                            <a href="#">Shop Now</a>
                                        </div> -->
                            </div>
                        </div>
                        <!-- If we need pagination -->
                        <div class="swiper-pagination"></div>
        
                        <!-- If we need navigation buttons -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div> <!-- slider -->
        
                <div class="new-product-section">
                    <div class="product-section-heading">
                        <h2>Our Coffee Items <img src="../../assets/icons/increase.png"></h2>
                        <!-- <h3>Most selling Coffee Item for the month</h3> -->
                    </div>
                    <div class="product-content">
                        <div class="product">
                            <a href="product.html">
                                <img src="../../assets/product/Americano-Starbucks.jpg">
                            </a>
                            <div class="product-detail">
                                <h2>Gray Color Men's Watch</h2>
                                <a href="#">Add to Cart</a>
                                <p>BDT 400/-</p>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product.html">
                                <img src="../../assets/product/Cappuccino.jpg">
                            </a>
                            <div class="product-detail">
                                <h2>Black Men's Watch</h2>
                                <a href="#">Add to Cart</a>
                                <p>BDT 400/-</p>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product.html">
                                <img src="../../assets/product/Chocolate_Cappuccino.jpg">
                            </a>
                            <div class="product-detail">
                                <h2>Nick Black Sneakers</h2>
                                <a href="#">Add to Cart</a>
                                <p>BDT 320/-</p>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product.html">
                                <img src="../../assets/product/cold_coffee.jpg">
                            </a>
                            <div class="product-detail">
                                <h2>Wood Frame Sun Glass</h2>
                                <a href="#">Add to Cart</a>
                                <p>BDT 120/-</p>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product.html">
                                <img src="../../assets/product/Hot_chocolate_marshmallows.webp">
                            </a>
                            <div class="product-detail">
                                <h2>Leather Hand Bag</h2>
                                <a href="#">Add to Cart</a>
                                <p>BDT 380/-</p>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product.html">
                                <img src="../../assets/product/Hot_chocolate_marshmallows.webp">
                            </a>
                            <div class="product-detail">
                                <h2>Brown Leather Hand Bag</h2>
                                <a href="#">Add to Cart</a>
                                <p>BDT 520/-</p>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product.html">
                                <img src="../../assets/product/Hot_chocolate_marshmallows.webp">
                            </a>
                            <div class="product-detail">
                                <h2>Leather Hand Bag</h2>
                                <a href="#">Add to Cart</a>
                                <p>BDT 380/-</p>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product.html">
                                <img src="../../assets/product/oat-milk-latte.jpg">
                            </a>
                            <div class="product-detail">
                                <h2>Men's Sneaker</h2>
                                <a href="#">Add to Cart</a>
                                <p>BDT 350/-</p>
                            </div>
                        </div>
                    </div>
                </div> <!-- New Product Section -->
                <div class="new-product-section">
                    <div class="product-section-heading">
                        <h2>Top Coffee Item <img src="../../assets/icons/good_quality.png"></h2>
                        <h3>OUR BEST COFFEE RECOMMENDED FOR YOU</h3>
                    </div>
                    <div class="product-content">
                        <div class="product">
                            <a href="product.html">
                                <img src="../../assets/product/Hot_chocolate_marshmallows.webp">
                            </a>
                            <div class="product-detail">
                                <h3>Our Top Coffe Item</h3>
                                <h2>Chocolate Marshmallows</h2>
                                <a href="#">Add to Cart</a>
                                <p>BDT 120/-</p>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product.html">
                                <img src="../../assets/product/oat-milk-latte.jpg">
                            </a>
                            <div class="product-detail">
                                <h3>Our Top Coffe Item</h3>
                                <h2>Oat Milk Latte</h2>
                                <a href="#">Add to Cart</a>
                                <p>BDT 450/-</p>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product.html">
                                <img src="../../assets/product/Chocolate_Cappuccino.jpg">
                            </a>
                            <div class="product-detail">
                                <h3>Our Top Coffe Item</h3>
                                <h2>Chocolate Cappuccino</h2>
                                <a href="#">Add to Cart</a>
                                <p>BDT 450/-</p>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product.html">
                                <img src="../../assets/product/Americano-Starbucks.jpg">
                            </a>
                            <div class="product-detail">
                                <h3>Our Top Coffe Item</h3>
                                <h2>Americano Starbucks</h2>
                                <a href="#">Add to Cart</a>
                                <p>BDT 390/-</p>
                            </div>
                        </div>
                    </div>
                </div> <!-- Recommend Product Section -->
            </main> <!-- Main Area -->
        </div>
        <footer>
            <div class="container2">
                <div class="footer-widget">
                    <div class="coffee">
                         <img src="../../assets/icons/logo2.png">
                         <p>The Best Online Cafe In Bangladesh!</p>
                    </div>
                    <!-- <div class="widget">
                        <div class="widget-heading">
                            <h3>Important Link</h3>
                        </div>
                        <div class="widget-content">
                            <ul>
                                <li><a href="about.html">About</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="refund.html">Refund Policy</a></li>
                                <li><a href="terms.html">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div> -->
                    <!-- <div class="widget">
                        <div class="widget-heading">
                            <h3>Information</h3>
                        </div>
                        <div class="widget-content">
                            <ul>
                                <li><a href="account.html">My Account</a></li>
                                <li><a href="orders.html">My Orders</a></li>
                                <li><a href="cart.html">Cart</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                            </ul>
                        </div>
                    </div> -->
                    <!-- <div class="widget">
                        <div class="widget-heading">
                            <h3>Follow us</h3>
                        </div>
                        <div class="widget-content">
                            <div class="follow">
                                <ul>
                                    <li><a href="#"><img src="../../assets/icons/facebook.png"></a></li>
                                    <li><a href="#"><img src="../../assets/icons/twitter.png"></a></li>
                                    <li><a href="#"><img src="../../assets/icons/instagram.png"></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="widget-heading">
                            <h3>Subscribe for Newsletter</h3>
                        </div>
                        <div class="widget-content">
                            <div class="subscribe">
                                <form>
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="subscribe" placeholder="Email">
                                        <img src="../../assets/icons/paper_plane.png">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> -->
                </div> <!-- Footer Widget -->
                <!-- <div class="footer-bar"> -->
                   

                    <!-- <div class="payment-mode">
                        <img src="../../assets/icons/paper_money.png">
                        <img src="../../assets/icons/visa.png">
                        <img src="../../assets/icons/mastercard.png">
                    </div> -->
                <!-- </div> -->
                 <!-- Footer Bar -->


            </div>
        </footer> <!-- Footer Area -->


        <div class="container4">
                    <div class="copyright-text">
                        <p>Copryright @2022CHOOSECOFFEE - All Rights Reserved</p>
                    </div>


                </div>
        

    </div>
</template>
<script>
export default {
    name: 'MyDashboard',
}
</script>

<!-- <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
<script>
    
    const swiper = new Swiper('.swiper', {

        loop: true,

    pagination: {
        el: '.swiper-pagination',
  },

    navigation: {
        nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
</script> -->
<style scoped>
/* .slider{
        width:100%;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content: center;
    } */
.swiper {
    width: 100%;
    height: fit-content;
}

.swiper-slide img {
    width: 100%;
}

/* .dropdown img {
    vertical-align: middle;
    width: 48%;
} */
h2 img{
    width:4%;
}
.subscribe .form-group img{
    width: 9%;
}
.payment-mode img{
    width: 3%;
}
.payment-mode {
    margin-right: -110%;
}
 .dropdown img {
    vertical-align: middle;
    width: 68%;
    /* margin-left: 175%; */
} 
.container4 .copyright-text {
    color: #fbfbfb;
    /* text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-left: 270px; */
    display: flex;
    margin-top: 2%;
    align-content: flex-start;
    margin-bottom: 2%;
    margin-left: 10%;
}
footer {
    height: 220px;
    background-image: linear-gradient(to bottom right, #3e7575, #b72a2a);
}
.container h1{
    margin-left: 38%;
    color: white;
    font-size: 190%;

}
header .dropdown:hover .dropdown-menu {
    display: inline-block;
    margin-left: -50%;
}
.container4{
    height: 5%;
    margin-top: 5%;
} 
.coffee img{
    height: 11%;
    margin-left: -6%;
    margin-top: -3%;

}
.coffee p{
    /* height: 11%; */
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    margin-left: -4%;
    margin-top: -2%;
    color: #fbfbfb;

}

</style>
	

