<template>
    <div class="container-sm login">
        <div class="row loginname">
            <div class="col">Sign Up</div>
        </div>
        <div class="row">
            <div class="col">
                <form class="d-flex"  v-on:submit.prevent="register()">
                    <label for="fullname">Full Name</label>
                    <input type="text" name="fullname" v-model="fullname" required>
                    <label for="email">Email address</label>
                    <input type="email" name="email" v-model="email" required>
                    <label for="pass">Password</label>
                    <input type="password" name="pass" v-model="pass" required>
                    <button class="actionbutton" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col already d-flex justify-content-end">
                Already registered <router-link to="/signin">sign in?</router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
      data(){
        return{
            fullname:null,
            email:null,
            pass:null
        }
    },
    methods:{
        register(){

            this.$router.push({
                name: 'Data',
                params: {fullname: this.fullname, email: this.email, pass: this.pass}
            })

        }
    }

}
</script>