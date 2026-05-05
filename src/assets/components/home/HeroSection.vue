<template>
  <section class="grid grid-cols-2 border-b-2 border-[#1A1A2E] min-h-[420px]">

    <div class="px-10 py-12 flex flex-col justify-center gap-5 border-r-2 border-[#1A1A2E]">
      <div class="flex gap-2 flex-wrap">
        <span
          v-for="tag in countryTags"
          :key="tag.label"
          class="border-2 border-[#1A1A2E] rounded-full px-3 py-1 text-xs font-bold text-white"
          :style="{ background: tag.color }"
        >
          {{ tag.label }}
        </span>
      </div>

      <h1 class="text-[58px] leading-[0.92] text-[#1A1A2E] tracking-tight font-lilita">
        Plant-based<br>
        <span class="text-[#FF3B30]">Latin food</span><br>
        that tastes<br>
        like home.
      </h1>

      <p class="text-sm text-[#1A1A2E] leading-relaxed max-w-sm opacity-80">
        Discover traditional recipes from Latin America, reimagined without meat.
        Same flavors, same soul.
      </p>

      <div class="flex gap-3 flex-wrap">
        <RouterLink to="/quiz" class="btn-primary">
          Start the quiz
        </RouterLink>
        <RouterLink to="/recipes" class="btn-secondary">
          Browse recipes
        </RouterLink>
      </div>
    </div>

    <div class="bg-[#FFE600] flex items-center justify-center relative overflow-hidden">
      <div
        class="absolute inset-0 opacity-10"
        style="background: repeating-linear-gradient(45deg, #FF8C00 0, #FF8C00 2px, transparent 2px, transparent 20px)"
      ></div>
      <div class="text-center relative z-10">
        <div class="text-[110px] leading-none mb-4 animate-bounce-slow">🫔</div>
        <div class="inline-block bg-[#FF3B30] border-2 border-[#1A1A2E] rounded-full px-5 py-2">
          <span class="text-[#FFE600] text-sm font-lilita">Recipe of the week</span>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const countryTags = [
  { label: 'Argentina', color: '#FF2D9B' },
  { label: 'Mexico', color: '#00B050' },
  { label: 'Peru', color: '#0057FF' },
  { label: 'Colombia', color: '#FF8C00' },
]
</script>

<style scoped>
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}
</style>