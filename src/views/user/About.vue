<template>
    <div id="about">
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
        <div class="container">
            <main>
                <div class="about">
                    <h2 class="heading">About</h2>
                    <p>Our journey was inspired from the growing coffee culture in Dhaka. 
                    We support the growth of coffee culture partnering with other cafés and provide opportunities for working students to gather valuable work experience. 
                    Our vision is to make our customers experience our quality brew and create special memories. 
                    We value our customers and want to make sure that when you enter our cafes you become part of ChooseCoffee</p>
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
                   

                    <!-- <div class="payment-mode">
                        <img src="../../assets/icons/paper_money.png">
                        <img src="../../assets/icons/visa.png">
                        <img src="../../assets/icons/mastercard.png">
                    </div> -->
                </div> <!-- Footer Bar -->
                <div class="copyright-text">
                        <p>Copryright @2022CHOOSECOFFEE - All Rights Reserved</p>
                    </div>
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

main {
    width: 70%;
    margin-left: 15%;
}

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
footer .copyright-text p {
    color: #fbfbfb;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-left: 270px;
}
footer {
    height: 300px;
    background-color: #0e0906;
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
footer {
  margin-top: 15%;
}
</style>