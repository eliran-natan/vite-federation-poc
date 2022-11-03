<script setup>
import Card from './Card.vue'
</script>

<template>
  <div class="axonius-dashboard">
    <h1>Welcome to the Axonius Dashboard</h1>
    <h2>Made with Vue + Vite</h2>
    <div class="axonius-card-panel">
        <Card/>
        <Card/>
    </div>
  </div>
</template>

<style>
.axonius-dashboard {
  display: flex;
  flex-direction: column;
  text-align: center;
  color:  #dc3545;
}

.axonius-card-panel {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
}
</style>