<script setup>
import { computed, useSlots } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "insights",
  },
  items: {
    type: Array,
    default: () => [],
  },
  subtitle: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
});

const slots = useSlots();
const hasImage = computed(() => Boolean(props.image));
const hasDefaultSlot = computed(() => Boolean(slots.default));
</script>

<template>
  <div
    v-if="hasImage"
    class="group rounded-lg bg-surface-container-lowest p-6 transition-shadow duration-300 hover:shadow-xl"
  >
    <div class="relative mb-6 h-48 overflow-hidden rounded-lg">
      <img :src="image" :alt="alt || title" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <h4 class="mb-2 font-headline text-xl font-bold text-primary">{{ title }}</h4>
    <div class="flex items-center justify-between">
      <span class="text-sm text-on-surface-variant">{{ subtitle }}</span>
      <span class="material-symbols-outlined text-tertiary-container">arrow_forward</span>
    </div>
  </div>
  <div v-else-if="hasDefaultSlot" v-bind="$attrs">
    <slot />
  </div>
  <div v-else class="rounded-xl bg-surface-container-low p-8">
    <span class="material-symbols-outlined text-primary mb-4">{{ icon }}</span>
    <h3 class="font-bold text-xl mb-4">{{ title }}</h3>
    <ul class="space-y-3 text-on-surface-variant text-sm">
      <li
        v-for="(item, index) in items"
        :key="`${title}-${item.name}`"
        class="flex justify-between pb-2"
        :class="index !== items.length - 1 ? 'border-b border-outline-variant/10' : ''"
      >
        <span>{{ item.name }}</span>
        <span class="text-xs font-bold">{{ item.distance }}</span>
      </li>
    </ul>
  </div>
</template>
