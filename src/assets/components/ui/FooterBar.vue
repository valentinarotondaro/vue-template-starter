<template>
  <footer class="bg-[#1A1A2E] px-10 py-5 flex items-center justify-between">
    
    <RouterLink to="/" class="bg-[#F0FAE0] border-[1.5px] border-[#00B050] rounded-xl px-3 py-2 hover:bg-[#FFE600] transition-colors duration-200">
      <span class="block text-[#00B050] leading-none text-base font-lilita">RAIZ &</span>
      <span class="block text-[#00B050] leading-none text-base font-lilita">SAZON</span>
    </RouterLink>

    <div class="flex gap-6">
      <RouterLink
        v-for="link in links"
        :key="link.label"
        :to="link.to"
        class="text-xs text-white/50 hover:text-white transition-colors font-medium"
      >
        {{ link.label }}
      </RouterLink>
    </div>

  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const links = [
  { label: 'Recipes', to: '/recipes' },
  { label: 'About us', to: '/about' },
  { label: 'Instagram', to: '#' },
  { label: 'TikTok', to: '#' },
]
</script>