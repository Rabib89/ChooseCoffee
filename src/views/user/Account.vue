<template>
    <div id="account">

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
        <div class="container1">
            <main>
                <div class="breadcrumb">
                    <ul>
                        <li><a href="index.html">Home</a> / Account</li>


                    </ul>
                </div> <!-- End of Breadcrumb-->

                <div class="account-page">
                    <div class="profile">
                        <div class="profile-img">
                            <img src="../../assets/product/Americano-Starbucks.jpg">
                            <h2>John Doe</h2>
                            <p>john_doe@mail.com</p>
                        </div>
                        <ul>
                            <li><a href="account.html" class="active">Account <span>></span></a></li>
                            <li><a href="orders.html">My Orders <span>></span></a></li>
                            <li><a href="change-password.html">Change Password <span>></span></a></li>
                            <li><a href="">Logout <span>></span></a></li>
                        </ul>
                    </div>
                    <div class="account-detail">
                        <h2>Account</h2>
                        <div class="billing-detail">
                            <form class="checkout-form">
                                <div class="form-inline">
                                    <div class="form-group">
                                        <label>First Name</label>
                                        <input type="text" id="fname" name="fname" value="John">
                                    </div>
                                    <div class="form-group">
                                        <label>Last Name</label>
                                        <input type="text" id="lname" name="lname" value="Doe">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Company Name (Optional)</label>
                                    <input type="text" id="cname" name="cname">
                                </div>
                                <div class="form-inline">
                                    <div class="form-group">
                                        <label>Country</label>
                                        <select id="country" name="country">
                                            <option selected>---Select a Country---</option>
                                            <option value="pakistan">Pakistan</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>City</label>
                                        <select id="city" name="city">
                                            <option selected>---Select a City---</option>
                                            <option value="karachi">Karachi</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Address</label>
                                    <textarea style="resize:none" id="address" name="address"
                                        rows="3">xyz area, street 24 </textarea>
                                </div>
                                <div class="form-inline">
                                    <div class="form-group">
                                        <label>Tel</label>
                                        <input type="text" id="tel" name="tel" minlength="11" maxlength="11"
                                            value="555-XXXXXXX">
                                    </div>
                                    <div class="form-group">
                                        <label>Mobile</label>
                                        <input type="text" id="mobile" name="mobile" minlength="11" maxlength="11"
                                            value="555-XXXXXXX">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <input type="submit" id="update" name="update" value="Update">
                                </div>
                            </form>
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

main .breadcrumb {
    background-color: var(--khaki);
    padding: 10px 0;
    margin-bottom: 25px;
}

main .breadcrumb ul li {
    padding: 0 10px;
}

main .breadcrumb ul li a {
    color: #d04e4e;
    text-decoration: none;
}

input {
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: fieldtext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    cursor: text;
    background-color: field;
    margin: 0em;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(black, black);
    border-image: initial;
}

main form.checkout-form .form-group input,
main form.checkout-form .form-group select,
main form.checkout-form .form-group textarea {
    width: 100%;
    padding: 10px 35px;
}

.form-inline .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
    margin-right: 3%;
}

.active {
    background-color: var(--darkStaleGray) !important;
    color: #faf7f5 !important;
}

select {
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: fieldtext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    box-sizing: border-box;
    align-items: center;
    white-space: pre;
    -webkit-rtl-ordering: logical;
    background-color: field;
    cursor: default;
    margin: 0em;
    border-width: 1px;
    border-style: solid;
    border-color: -internal-light-dark(black, black);
    border-image: initial;
    border-radius: 0px;
}

textarea {
    writing-mode: horizontal-tb !important;
    font-family: monospace;
    text-rendering: auto;
    color: fieldtext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    resize: auto;
    cursor: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    background-color: field;
    column-count: initial !important;
    margin: 0em;
    border-width: 1px;
    border-style: solid;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
    padding: 2px;
}

main form.checkout-form label {
    color: var(--darkStaleGray);
    display: block;
    margin-bottom: 6px;
}


</style>
	

