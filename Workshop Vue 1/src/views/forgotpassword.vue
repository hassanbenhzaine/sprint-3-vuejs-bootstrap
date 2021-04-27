<template>
    <div class="container-sm login">
        <div class="row loginname">
            <div class="col">Forgot password</div>
        </div>
        <div class="row">
            <div class="col">
                <form class="d-flex" v-on:submit.prevent="register()">
                    <label for="email">Email address</label>
                    <input type="email" name="email" v-model="email" required>
                    <button class="actionbutton">Reset password</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
      data(){
        return{
            email:null
        }
    },
    methods:{
        register(){

            this.$router.push({
                name: 'Data',
                params: {email: this.email}
            })

        }
    }

}
</script>