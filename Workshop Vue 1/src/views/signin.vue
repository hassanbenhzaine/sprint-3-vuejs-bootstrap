<template>
    <div class="container-sm login">
        <div class="row loginname">
            <div class="col">Sign in</div>
        </div>
        <div class="row">
            <div class="col">
                <form class="d-flex" v-on:submit.prevent="register()">
                    <label for="email">Email address</label>
                    <input type="email" name="email" v-model="email" required>
                    <label for="pass">Password</label>
                    <input type="password" name="pass" v-model="pass" required>
                    <button class="actionbutton">Sign in</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col already d-flex justify-content-end">
                <router-link to="/forgotpassword">Forgot password ?</router-link>
            </div>
        </div>
        <div class="row d-flex justify-content-center flex-row social">
            <div class="socialbox d-flex justify-content-center"><img src="../assets/google.svg" alt=""></div>
            <div class="socialbox d-flex justify-content-center spacer"><img src="../assets/facebook.svg" alt=""></div>
            <div class="socialbox d-flex justify-content-center"><img src="../assets/twitter.svg" alt=""></div>
        </div>
    </div>
</template>

<style scoped>
    .socialbox{
        background:#f4f6ff;
        border:1px solid #e4e9f9;
        height:32px;
        width: 60px;
    }
    .social{
        margin-top:15px;
    }
    img{
        width:18px;
        height: auto;
    }
    .spacer{
        margin:0 4px;
    }
</style>

<script>
export default {
      data(){
        return{
            email:null,
            pass:null
        }
    },
    methods:{
        register(){

            this.$router.push({
                name: 'Data',
                params: {email: this.email, pass: this.pass}
            })

        }
    }

}
</script>