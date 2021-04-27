<template>

  <Navbar/>
  <router-view/>

</template>

<script>
import Navbar from '@/components/navbar'

export default {

  components:{
    Navbar
  }

}
</script>

<style>
    body{
        background: #0d6efd;
    }
    .login{
        background:#fff;
        width: 380px;
        border-radius: 11px;
        padding: 35px;
    }
    .loginname{
        font-size: 23px;
        text-align: center;
    }
    form{
        flex-direction: column;
    }
    label{
        font-size: 13px;
        margin-bottom: 5px;
    }
    input{
        border-radius: 3px;
        border:1px solid rgb(211, 211, 211);
        height: 38px;
        margin-bottom: 13px;
    }
    .actionbutton{
        background:#343A40;
        color:#fff;
        border-radius: 3px;
        border: 0;
        height: 36px;
        margin-bottom: 10px;
    }
    .already{
        font-size: 11px;
    }
    .already a{
        color:#0d6efd;
        margin-left:3px;
    }
    a{
      text-decoration: none;
    }
    #app{
      height: 100vh;
    }
</style>