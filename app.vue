<template>
  <UApp>
    <UContainer>
      <Logo />
      <UContainer class="main">
        <img class="gif" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjM3MmtqZWZ0cmVzNXdlc3BzdXgzaGZscHRyMHVwMXBka2gxbTM4bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2AF5KbIaGVA36ZkiAm/giphy.gif" alt="Under Construction" />
        <h1>Welcome to <span class="logo">M&Q</span></h1>
        <p>We are glad to have you here.</p>
        <p>This site is currently under construction.</p>
        <p>We are working hard to bring you the best experience.</p>
        <p>Stay tuned for updates!</p>
      </UContainer>
    </UContainer>
  </UApp>
</template>

<style>

body {
  height: 100svh;
  margin: 0;
  padding: 0;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70svh;
}

.gif {
  width: 200px;
  margin: 0 auto;
}

.logo {
  font-family: 'Orbitron', sans-serif;
  font-size: 1em;
  color: #00DC82;
}

h1 {
  font-size: 2em;
  text-align: center;
  margin: 20px 0 20px 0;
}

p {
  font-size: 1em;
  text-align: center;
  margin: 5px 0 5px 0;
}
</style>

<script setup lang="ts">
import Logo from "~/components/Logo.vue";

</script>