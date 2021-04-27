<template>
    <div class="container-sm login">
        <div class="row" v-if="fullname!=null">
            <div class="col desc">Full name:</div>
            <div class="col data">{{fullname}}</div>
        </div>
        <div class="row" v-if="email!=null">
            <div class="col desc">Email:</div>
            <div class="col data">{{email}}</div>
        </div>
        <div class="row" v-if="pass!=null">
            <div class="col desc">Password:</div>
            <div class="col data">{{pass}}</div>
        </div>
    </div>
</template>

<style scoped>
    .data{
        text-align: end;
    }
    .desc{
        font-weight: 700;
    }
</style>

<script>
export default {
  props: ['fullname', 'email', 'pass'],
  data() {
    return {
    }
  }
}
</script>