<template>
    <div class="container-fluid">
        <div class="row" data-aos="flip-up">
            <div class="col centertext about" >ABOUT ME</div>
        </div>
        <div class="row" data-aos="flip-up">
            <div class="col centertext aboutdesc">HOPE TO KNOW YOU AFTER</div>
        </div>
        <div class="row d-flex justify-content-center" data-aos="flip-up">
            <div class="col-md-3 border2 centertext"></div>
        </div>
        <div class="container d-flex justify-content-center marg" data-aos="fade-right">
            <div class="row d-flex justify-content-between">
                <div class="col-lg-8">
                    <p class="whoami" >WHO AM I?</p>
                    <p class="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis tortor metus, eget semper lacus pellentesque a. Etiam a auctor nisl. Etiam sed tempor magna. Donec laoreet at libero pulvinar finibus. Integer commodo purus non leo aliquam condimentum. Mauris ut maximus mauris, eu tempus sem. Maecenas dapibus mauris nisi, vel commodo erat hendrerit.<br>
                        at. Fusce sagittis et ex sit amet sagittis. Nam sodales, leo eget ultrices condimentum, nunc quam rutrum ligula, vestibulum gravida nisl neque quis nunc. Duis id dapibus neque, at pellentesque arcu. Phasellus ac felis lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam ut justo dui.
                        Cras et luctus elit. Mauris molestie convallis mi ac sagittis. Quisque ut sapien tortor. Vestibulum sollicitudin vehicula.
                </p>
                </div>
                <div class="col-3 d-flex align-items-center photo flex-column justify-content-center">
                    <img src="../assets/img/photo.jpg" alt="photo">
                    <p>HASSAN BENHZAINE</p>
                </div>

                
                <div class="col d-flex flex-lg-row flex-column justify-content-between">
                  <p class="text-end"><b>E-mail:</b> cbenhzaine@gmail.com</p> 
                  <p class="text-end"><b>Phone:</b> +212 607 873 886</p>
                  <p class="text-end"><b>City:</b> Rabat, Morocco</p>
                  <p class="text-end"><b>Languages:</b>  English, French</p>
                </div>


            </div>
        </div>
    </div>
</template>

<style scoped>
.marg{
    padding-bottom:45px;
}

    .container-fluid{
        background:#fff;
        min-height: 100vh;
    }
    .border2{
        border-bottom:1px solid #2a2a2a;
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
    .whoami{
        font-weight: 700;
        font-size: 22px;
        margin-bottom: 30px;
    }
    .photo img{
        border-radius: 100%;
        width: 100%;
        height: auto;
    }
    .description{
        font-size: 16px;
        margin-bottom: 50px;
    }
    .photo p{
        margin-top: 14px;
        font-size:18px;
        font-weight: 700;
        text-align:center;
    }
    .contacts{
        font-size: 10px;
    }
</style>