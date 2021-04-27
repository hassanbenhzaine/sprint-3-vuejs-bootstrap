<template>
   <div class="container-fluid">
        <div class="row navrow">
            <div class="col-5 d-flex justify-content-center align-items-center logo">
                <router-link to="/">Youcode Youssoufia</router-link>
            </div>
            <div class="col-5 d-flex justify-content-center">
                <button type="button" class="btn btn-outline-primary login-btn">
                    <router-link to="/signin">Sign in</router-link>
                    </button>
                <button type="button" class="btn btn-outline-primary">
                    <router-link to="/">Sign up</router-link>
                    </button>
            </div>
        </div>
   </div>
</template>

<style scoped>
    .logo{
        color:#0d6efd;
        font-size: 18px;
    }
    .navrow{
        justify-content: space-between;
        padding: 8px;
        box-shadow: 0 0 20px 0px #0000006e;
        background: #fff;
        position: fixed;
        top: 0;
        width: 100%;
    }
    .login-btn:hover,.login-btn:active,.login-btn{
        color:#0d6efd;
        background:#fff;
        border:0;
    }
</style>
