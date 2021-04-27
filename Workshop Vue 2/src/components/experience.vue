<template>
    <div class="container-fluid">
        <div class="row" data-aos="flip-up">
            <div class="col centertext about">EXPERIENCE</div>
        </div>
        <div class="row" data-aos="flip-up">
            <div class="col centertext aboutdesc">PROFESSIONAL AND ACADEMIC</div>
        </div>
        <div class="row d-flex justify-content-center" data-aos="flip-up">
            <div class="col-md-3 border2 centertext"></div>
        </div>
        <div class="row">
            <div class="col-lg-6 edu">
                <span>EDUCATION</span>
                <p class="err">From september 2017  </p>
                <p>Bachelor in Physics and Chemistry</p>
                <p class="min">Lycée Bilal Bnou Rabah</p>
                <p class="err">2020-2022</p>
                <p>Web Developer</p>
                <p class="min">YouCode by Simplon.co</p>
                <p class="err">2022-2025</p>
                <p>Programming bootcamp</p>
                <p class="min">A coding bootcamp is an intensive program that teaches people how to code in a short amount of time. It can be a more affordable alternative to a degree.</p>
            </div>
            <div class="col-lg-6 exp">
                PROFESSIONAL
                <p class="err">2022-2025</p>
                <p>Master Software Engineering</p>
                <p class="min">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore</p>
                <p class="err">2025-2026</p>
                <p>Software engineer at Google, Inc</p>
                <p class="min">Google LLC is an American multinational technology company that specializes in Internet-related services and products.</p>
                <p class="err">2027-2029</p>
                <p>Master Software Engineering</p>
                <p class="min">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    *{
        color:#fff;
    }
    .container-fluid{
        min-height: 100vh;
        background: #424242;
        padding-bottom: 45px;
    }
    .border2{
        border-bottom:1px solid #fff;
        margin-bottom: 40px;
    }
    .about{
        font-size: 40px;
        font-weight: 600;
        margin-top: 45px;
    }
    .centertext{
        text-align:center;
    }
    .aboutdesc{
        font-size:14px;
        margin-bottom: 15px;
    }
    .edu{
        border-right:1px solid #fff;
        text-align: right;
    }
    .exp{
        border-left:1px solid #fff;
        text-align: left;
    }
    .edu, .exp{
        font-weight: 700;
    }
    .min{
        font-weight: 400;
        font-size: 14px;
    }
    .err{
        color:#d3dcdf;
        margin-top: 20px;
        margin-bottom:3px;
            font-size: 14px;
    }
    p{
        margin:0;
    }
    span{
        font-size: 17px;
    }
    @media only screen and (max-width: 992px) {
        .exp,.edu{
            text-align: center;
        }
    }
</style>