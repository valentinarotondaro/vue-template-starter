<template>
  <nav class="sticky top-0 z-50 flex items-center justify-between px-8 py-3 bg-[#F0FAE0] border-b-2 border-[#1A1A2E]">
    
    <RouterLink to="/" class="border-2 border-[#1A1A2E] rounded-xl px-4 py-2 bg-[#F0FAE0] hover:bg-[#FFE600] transition-colors duration-200">
      <span class="block text-[#00B050] leading-none text-xl font-lilita">RAIZ &</span>
      <span class="block text-[#00B050] leading-none text-xl font-lilita">SAZON</span>
    </RouterLink>

    <div class="flex items-center gap-8">
      <RouterLink to="/recipes" class="text-sm font-bold text-[#1A1A2E] hover:text-[#FF3B30] transition-colors duration-200">
        Recipes
      </RouterLink>
      <RouterLink to="/about" class="text-sm font-bold text-[#1A1A2E] hover:text-[#FF3B30] transition-colors duration-200">
        About us
      </RouterLink>
      <RouterLink to="/quiz" class="btn-primary text-sm px-5 py-2">
        Start the quiz
      </RouterLink>
    </div>

  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>