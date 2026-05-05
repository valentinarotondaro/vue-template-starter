<template>
  <div class="bg-[#FF3B30] border-b-2 border-[#1A1A2E] overflow-hidden py-2">
    <div class="ticker-track">
      <span v-for="(item, i) in [...items, ...items]" :key="i" class="ticker-item">
        {{ item }}
        <span class="ticker-dot">*</span>
      </span>
    </div>
  </div>
</template>

<script setup>
const items = [
  'Plant-based & proud',
  'Sabor autentico',
  '100% Latin roots',
  'Sin carne, con alma',
  'Recetas con historia',
  'De raiz a mesa',
]
</script>

<style scoped>
.ticker-track {
  display: flex;
  gap: 2rem;
  white-space: nowrap;
  animation: ticker 20s linear infinite;
  width: max-content;
}

.ticker-track:hover {
  animation-play-state: paused;
}

.ticker-item {
  color: #FFE600;
  font-size: 13px;
  font-family: 'Lilita One', cursive;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.ticker-dot {
  color: #FFE600;
  font-weight: 900;
}

@keyframes ticker {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
</style>