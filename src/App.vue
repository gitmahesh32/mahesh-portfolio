<script setup lang="ts">
  //import HelloWorld from './components/HelloWorld.vue'
  import Navbar from './components/Navbar.vue';
  import Hero from './components/Hero.vue';
  import About from './components/About.vue';
  import Skills from './components/Skills.vue';
</script>

<template>
  <Navbar />
    <Main>
        <Hero />
        <About />
        <Skills />
    </Main>
  <!-- <HelloWorld /> -->
</template>
