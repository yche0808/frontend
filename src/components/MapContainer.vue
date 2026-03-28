<script setup>
import { useLocationStore } from "../stores/useLocationStore";

const locationStore = useLocationStore();
</script>

<template>
  <section class="flex-grow relative bg-surface-container-high overflow-hidden">
    <div class="absolute inset-0 map-mesh flex items-center justify-center">
      <svg class="absolute w-[600px] h-[600px] text-primary/10 pointer-events-none" viewBox="0 0 100 100">
        <path
          d="M20,20 L80,15 L90,60 L40,85 L15,70 Z"
          fill="currentColor"
          stroke="#003366"
          stroke-dasharray="2 1"
          stroke-width="0.5"
        />
      </svg>

      <div
        v-for="suburb in locationStore.suburbs"
        :key="suburb.id"
        class="absolute transition-opacity cursor-pointer"
        :class="locationStore.selectedLocationId === suburb.id ? 'z-30 opacity-100' : 'z-20 opacity-70 hover:opacity-100'"
        :style="{ top: suburb.coords.top, left: suburb.coords.left }"
        @click="locationStore.selectLocation(suburb.id)"
      >
        <div
          class="bg-surface-container-lowest rounded-full shadow-md flex items-center gap-2"
          :class="
            locationStore.selectedLocationId === suburb.id
              ? 'px-4 py-2 border-2 border-tertiary-fixed shadow-lg'
              : 'px-3 py-1.5'
          "
        >
          <div
            v-if="locationStore.selectedLocationId === suburb.id"
            class="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"
          />
          <span class="text-xs sm:text-sm font-bold text-on-surface">{{ suburb.name }}</span>
          <span class="text-[10px] sm:text-xs text-on-surface-variant">{{ suburb.medianPrice }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
