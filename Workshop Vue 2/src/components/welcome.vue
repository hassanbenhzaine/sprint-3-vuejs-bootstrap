<template>
    <div class="container-fluid welcome d-flex justify-content-center flex-column">
        <div class="row d-flex justify-content-center">
            <div class="col d-flex justify-content-center welcometext name">
                HASSAN BENHZAINE
            </div>
        </div>
        <div class="row d-flex justify-content-center ">
            <div class="col-md-5 border">
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col d-flex justify-content-center welcometext job">
                Full-Stack Developer
            </div>
        </div>
    </div>
</template>

<style scoped>
    .welcometext{
        color:#fff;
    }
    .name{

             font-size: 39px;
    padding-bottom: 20px;
    font-weight: 700;
    }
    .job{
        font-size: 25px;
            margin-top: 7px;
    }
    .welcome{
        min-height: 100vh;
    }
    .border{
        border:1px double #fff;
    }
</style>
