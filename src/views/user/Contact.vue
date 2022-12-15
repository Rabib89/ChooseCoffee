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
        <div class="Container1">
            <img src="../../assets/image/contact.jpg">
        </div>
        <div class="container1">
            <div class="content">
                <div class="left-side">
                    <div class="address details">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="topic">Address</div>
                        <div class="text-one">Banasree</div>
                        <div class="text-two">Dhaka</div>
                    </div>
                    <div class="phone details">
                        <i class="fas fa-phone-alt"></i>
                        <div class="topic">Phone</div>
                        <div class="text-one">+8801533499903</div>
                        <!-- <div class="text-two">+0096 3434 5678</div> -->
                    </div>
                    <div class="email details">
                        <i class="fas fa-envelope"></i>
                        <div class="topic">Email</div>
                        <div class="text-one">info.choosecoffee@gmail.com</div>
                        <!-- <div class="text-two">info.codinglab@gmail.com</div> -->
                    </div>
                </div>
                <div class="right-side">
                    <div class="topic-text">Send us a message</div>
                    <p>If you have any types of quries related to Our Services, you can send Us message from
                        here</p>
                    <form action="#">
                        <div class="input-box">
                            <input type="text" placeholder="Enter your name">
                        </div>
                        <div class="input-box">
                            <input type="text" placeholder="Enter your email">
                        </div>
                        <div class="input-box message-box">
                            <input type="textarea" placeholder="Enter your message">
                        </div>
                        <div class="button">
                            <input type="button" value="Send Now">
                        </div>
                    </form>
                </div>
            </div>
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
.container1 .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.container1 .content .left-side {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    position: relative;
}

.content .left-side::before {
    content: '';
    position: absolute;
    height: 70%;
    width: 2px;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    background: #afafb6;
}

.content .left-side .details {
    margin: 14px;
    text-align: center;
}

.content .left-side .details i {
    font-size: 30px;
    color: #3e2093;
    margin-bottom: 10px;
}

.content .left-side .details .topic {
    font-size: 18px;
    font-weight: 500;
}

.content .left-side .details .text-one,
.content .left-side .details .text-two {
    font-size: 14px;
    color: #afafb6;
}

.container1 .content .right-side {
    width: 75%;
    margin-left: 75px;
}

.content .right-side .topic-text {
    font-size: 23px;
    font-weight: 600;
    color: #3e2093;
}

.right-side .input-box {
    height: 50px;
    width: 100%;
    margin: 12px 0;
}

.right-side .input-box input,
.right-side .input-box textarea {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    background: #a7a8af;
    border-radius: 6px;
    padding: 0 15px;
    resize: none;
}

.right-side .message-box {
    min-height: 110px;
}

.right-side .input-box textarea {
    padding-top: 6px;
}

.right-side .button {
    display: inline-block;
    margin-top: 12px;
}

.right-side .button input[type="button"] {
    color: #fff;
    font-size: 18px;
    outline: none;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    background: #3e2093;
    cursor: pointer;
    transition: all 0.3s ease;
}

.button input[type="button"]:hover {
    background: #5029bc;
}

.container1 {
    width: 85%;
    background: #fff;
    border-radius: 6px;
    padding: 20px 60px 30px 40px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.Container1 img{
    margin-left: 25%;
    margin-top: 1%;
    margin-bottom: 1%;
    width: 50%;
}
</style>