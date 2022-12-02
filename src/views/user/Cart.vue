<template>
    <div id="about">
        <header>
            <div class="container">
                <div class="brand">
                    <div class="logo">
                        <a href="index.html">
                            <img src="../../assets/icons/logo1.png">
                        </a>
                    </div> <!-- logo -->
                    <div class="shop-icon">
                        <div class="dropdown">
                            <img src="../../assets/icons/account.png">
                            <div class="dropdown-menu">
                                <ul>
                                    <li><a href="account.html">My Account</a></li>
                                    <li><a href="orders.html">My Orders</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="dropdown">
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
                        </div>
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
                                    <tbody>
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
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div> <!-- shop icons -->
                </div> <!-- brand -->

                <div class="menu-bar">
                    <div class="menu">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="shop.html">Shop</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
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
        <div class="container">
            <main>
                <div class="breadcrumb">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li> / </li>
                        <li><a href="shop.html">Shop</a></li>
                        <li> / </li>
                        <li>Cart</li>
                    </ul>
                </div> <!-- End of Breadcrumb-->
            
                <h2>Shopping Cart</h2>
                <div class="cart-page">
                    <div class="cart-items">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="3">Cart Items</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="width: 20%;"><img src="../../assets/product/Americano.jpg"></td>
                                    <td style="width: 60%;">
                                        <h2>Product Title</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <br>
                                        <h3>Price: Rs.1200</h3>
                                        <br>
                                        <a href="">x</a> Remove
                                    </td>
                                    <td class="qty" style="width: 15%;">
                                        <div class="prev">-</div>
                                        <div class="next">+</div>
                                        <input type="number" name="cartNumber" class="cartNumber" value="1" min="1" max="10">
                                        <br><br>
                                        <h3>Rs.1200</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><img src="../../assets/product/Americano-Starbucks.jpg"></td>
                                    <td style="width: 60%;">
                                        <h2>Product Title</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <br>
                                        <h3>Price: Rs.1200</h3>
                                        <br>
                                        <a href="">x</a> Remove
                                    </td>
                                    <td class="qty" style="width: 15%;">
                                        <div class="prev">-</div>
                                        <div class="next">+</div>
                                        <input type="number" name="cartNumber" class="cartNumber" value="1" min="1" max="10">
                                        <br><br>
                                        <h3>Rs.1200</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><img src="../../assets/product/Cappuccino.jpg"></td>
                                    <td style="width: 60%;">
                                        <h2>Product Title</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <br>
                                        <h3>Price: Rs.1200</h3>
                                        <br>
                                        <a href="">x</a> Remove
                                    </td>
                                    <td class="qty" style="width: 15%;">
                                        <div class="prev">-</div>
                                        <div class="next">+</div>
                                        <input type="number" name="cartNumber" class="cartNumber" value="1" min="1" max="10">
                                        <br><br>
                                        <h3>Rs.1200</h3>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="pagination">
                            <ul>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="cart-summary">
                        <div class="checkout-total">
                            <h3>Cart Summary</h3>
                            <ul>
                                <li>Number of Products x 15</li>
                                <li>Number of items x 20</li>
                                <hr>
                                <li>Cart Total <span style="float: right;">Rs.1200</span></li>
                                <li><a href="checkout.html">Go to Checkout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main> <!-- Main Area -->
        </div>
        <footer>
            <div class="container2">
                <div class="footer-widget">
                    <div class="widget">
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
                    </div>
                    <div class="widget">
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
                    </div>
                    <div class="widget">
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
                    </div>
                </div> <!-- Footer Widget -->
                <div class="footer-bar">
                    <div class="copyright-text">
                        <p>Copryright @2022CHOOSECOFFEE - All Rights Reserved</p>
                    </div>
                    <div class="payment-mode">
                        <img src="../../assets/icons/paper_money.png">
                        <img src="../../assets/icons/visa.png">
                        <img src="../../assets/icons/mastercard.png">
                    </div>
                </div> <!-- Footer Bar -->
            </div>
        </footer> <!-- Footer Area -->
    </div>
</template>
<script>
export default {
    name: 'ProfileAbout',
}
</script>

<style scoped>
.swiper {
    width: 100%;
    height: fit-content;
}

.swiper-slide img {
    width: 100%;
}

.dropdown img {
    vertical-align: middle;
    width: 48%;
}

h2 img {
    width: 4%;
}

.subscribe .form-group img {
    width: 9%;
}

.payment-mode img {
    width: 3%;
}

.payment-mode {
    margin-right: -110%;
}

/* main {
    width: 70%;
    margin-left: 15%;
}  */
</style>