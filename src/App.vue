<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/recipes">Recetas</RouterLink>
  <RouterView />
    </nav>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>