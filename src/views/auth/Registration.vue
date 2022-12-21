<template>
    <div class="container">
        <div class="main">
            <!-- <h1 style="text-align: center;">Sign In Here</h1> -->
            <form action="">
                <router-link to="/login">
                <img src="../../assets/icons/logo1.png" alt="Logo" width="500" height="300">
                </router-link>
                <div class="name">
                    <input type="text" name="fullname" placeholder="Full Name" class="in"><br><br>
                    <input type="email" name="email" placeholder="Enter Email Address" class="in"><br><br>
                    <input type="password" name="password" placeholder="Password" class="in"><br><br>
                    <input type="tel" name="phone" placeholder="Enter Phone Number" class="in"><br><br>
                    <input type="tel" name="Address" placeholder="Please Enter Your Address" class="in"><br><br>
                    <input type="text" name="gender" placeholder="Gender" class="in"><br><br>
                    <input type="text" name="dob" placeholder="date of birth" class="in"><br><br>
                </div>
                <input type="submit" value="Sign In" class="btn"><br><br>
                <p>Do You Have an Account?Then <a href="/login">Login Here</a></p>
            </form>
        </div>

    </div>

</template>

<script>
export default {
    name: 'ChooseCoffee Registration',

    methods: {
        signin() {
            this.$router.push('/Registration');
        }
    }
}
</script>

<style scoped>
.container h1 {
    width: 550px;
    background-color: rgb(0, 0, 0, 6);
    margin: auto;
    color: #ffffff;
    padding: 10px 0px 10px 0px;
    text-align: center;
}

.container {
    margin-top: 10%;
}
 .in,select, textarea {
    width: 87%;
    margin-left: 9%;
}
.btn{
    margin-top: 1rem;
    display: inline-block;
    padding: .8rem 3rem;
    font-size: 1.4rem;
    border-radius: .5rem;
    border: .2rem solid var(--black);
    color: var(--black);
    cursor: pointer;
    background: white;
    margin-left: 69%;
}

.btn:hover{
    background: var(--darkStaleGray);
    color: #fff;
}
.main {
    background-color: rgb(0, 0, 0, .5);
    width: 550px;
    margin: auto;
}

form {
    padding: 10px;
    width: 100%;
    height: 100%;
}

.name {
    margin-left: 80px;
    margin-top: 30px;
    width: 500px;
    color: white;
    font-size: 18px;
    font-weight: 700;
}
a {
    color: #9abad4;
    font-weight: bold;
  
}
p {
    color: #c3cbd1;
    margin-left: 28%;
}
img {
    margin-left: 13%;
}
.main {
    width: 680px;
}
</style>