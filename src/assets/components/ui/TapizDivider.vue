<template>
  <div class="border-y-2 border-[#1A1A2E] overflow-hidden">
    <svg
      width="100%"
      height="28"
      viewBox="0 0 680 28"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="680" height="28" fill="#1A1A2E"/>

      <rect v-for="(block, i) in colorBlocks" :key="`b${i}`"
        :x="block.x" y="0" width="40" height="28"
        :fill="block.color"
      />

      <polygon v-for="(tri, i) in triangles" :key="`t${i}`"
        :points="tri.points"
        :fill="tri.color"
      />
    </svg>
  </div>
</template>

<script setup>
const colors = ['#FF3B30', '#FFE600', '#00B050', '#0057FF', '#FF2D9B', '#FF8C00']

const colorBlocks = Array.from({ length: 17 }, (_, i) => ({
  x: i * 40,
  color: colors[i % colors.length]
}))

const triColors = ['#FFE600', '#00B050', '#0057FF', '#FF2D9B', '#FF3B30', '#FFE600', '#00B050', '#0057FF', '#FF2D9B', '#FF8C00', '#FF3B30']

const triangles = triColors.map((color, i) => ({
  points: `${i * 40 + 20},0 ${i * 40 + 40},0 ${i * 40 + 20},28 ${i * 40},28`,
  color
}))
</script>