<template>
  <Welcome/>
  <AboutMe/>
  <Experience/>
  <Skills/>
  <Projects/>
  <Footer/>
  <router-view/>
</template>

<script>
import Welcome from './components/welcome'
import AboutMe from './components/aboutme'
import Experience from './components/experience'
import Skills from './components/skills'
import Projects from './components/projects'
import Footer from './components/footer'

export default {
  components:{
    Welcome,
    AboutMe,
    Experience,
    Skills,
    Projects,
    Footer
  }
}
</script>

<style>
  body{
    overflow-x: hidden;
    background-image: url("./assets/bg.jpg");
        background-attachment: fixed;
    background-size: cover;
    font-family: Montserrat,'sans-serif';
  }

@font-face {
  font-family: 'Montserrat';
  src: url("./assets/fonts/Montserrat-Regular.ttf") format('truetype'),
  url("./assets/fonts/Montserrat-Medium.ttf") format('truetype'),
  url("./assets/fonts/Montserrat-MediumItalic.ttf") format('truetype');
}
*{
  color:#2a2a2a;
}
</style>