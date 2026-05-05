<template>
  <RouterLink
    :to="`/recipes/${recipe.slug}`"
    class="block bg-[#FFF9F0] border-2 border-[#1A1A2E] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[4px_4px_0px_#1A1A2E] transition-all duration-200 group"
  >
    <div
      class="h-40 flex items-center justify-center relative overflow-hidden"
      :style="{ background: recipe.bgColor }"
    >
      <span class="text-6xl group-hover:scale-110 transition-transform duration-200">
        {{ recipe.emoji }}
      </span>

      <span
        v-if="recipe.badge"
        class="absolute top-2 left-2 bg-[#FFE600] border-[1.5px] border-[#1A1A2E] rounded-full text-[10px] text-[#1A1A2E] px-2 py-0.5 font-lilita"
      >
        {{ recipe.badge }}
      </span>

      <button
        class="absolute top-2 right-2 w-8 h-8 bg-[#FFF9F0] border-2 border-[#1A1A2E] rounded-full flex items-center justify-center text-sm hover:bg-[#FF3B30] hover:text-[#FFE600] transition-colors duration-200"
        @click.prevent="toggleSave"
      >
        {{ saved ? '♥' : '♡' }}
      </button>
    </div>

    <div class="p-3">
      <p class="text-[#1A1A2E] text-sm mb-2 leading-tight font-lilita">
        {{ recipe.title }}
      </p>
      <div class="flex gap-1.5 flex-wrap mb-2">
        <span
          class="border-2 border-[#1A1A2E] rounded-full text-[10px] font-bold px-2 py-0.5"
          :style="{ background: recipe.countryColor, color: '#FFF9F0' }"
        >
          {{ recipe.country }}
        </span>
        <span
          class="border-2 border-[#1A1A2E] rounded-full text-[10px] font-bold px-2 py-0.5"
          :style="{ background: difficultyColor, color: difficultyTextColor }"
        >
          {{ recipe.difficulty }}
        </span>
      </div>
      <p class="text-[10px] font-bold text-[#1A1A2E] opacity-50 uppercase tracking-wide">
        {{ recipe.time }}
      </p>
    </div>
  </RouterLink>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  recipe: { type: Object, required: true }
})

const saved = ref(false)
const toggleSave = () => { saved.value = !saved.value }

const difficultyColor = computed(() => {
  const map = { Easy: '#FFE600', Medium: '#FF8C00', Hard: '#FF3B30' }
  return map[props.recipe.difficulty] || '#FFE600'
})

const difficultyTextColor = computed(() => {
  return props.recipe.difficulty === 'Easy' ? '#1A1A2E' : '#FFF9F0'
})
</script>