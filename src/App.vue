<script setup lang="ts">
  //import HelloWorld from './components/HelloWorld.vue'
  import Navbar from './components/Navbar.vue';
  import Hero from './components/Hero.vue';
  import About from './components/About.vue';
  import Skills from './components/Skills.vue';
  import Exp from './components/Exp.vue';
  import Projects from './components/Projects.vue';
  import Contact from './components/Contact.vue';
  import Footer from './components/Footer.vue';
</script>

<template>
  <Navbar />
    <Main>
        <Hero />
        <About />
        <Skills />
        <Exp />
        <Projects />
        <Contact />
    </Main>
    <Footer/>
  <!-- <HelloWorld /> -->
</template>
