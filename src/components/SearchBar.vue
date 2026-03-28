<script setup>
import { ref } from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "Search a suburb or address",
  },
  buttonLabel: {
    type: String,
    default: "Find Home",
  },
  compact: {
    type: Boolean,
    default: false,
  },
  chips: {
    type: Array,
    default: () => [],
  },
  showButton: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["submit"]);
const keyword = ref("");

function handleSubmit() {
  emit("submit", keyword.value.trim());
}
</script>

<template>
  <div
    :class="
      compact
        ? 'bg-white/90 backdrop-blur-xl p-2 rounded-xl shadow-2xl border border-white/20'
        : 'bg-surface-container-lowest/95 backdrop-blur-md p-2 rounded-xl shadow-2xl'
    "
  >
    <div class="flex flex-col md:flex-row items-center gap-2">
      <div class="flex-1 flex items-center px-4 py-3 bg-surface-container-highest rounded-lg w-full">
        <span class="material-symbols-outlined text-outline mr-3">search</span>
        <input
          v-model="keyword"
          class="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline"
          :placeholder="placeholder"
          type="text"
          @keyup.enter="handleSubmit"
        />
        <span v-if="compact" class="material-symbols-outlined text-outline cursor-pointer">mic</span>
      </div>
      <button
        v-if="showButton"
        class="w-full md:w-auto px-8 py-4 bg-tertiary-fixed text-on-tertiary-fixed font-bold rounded-lg hover:brightness-105 transition-all"
        @click="handleSubmit"
      >
        {{ buttonLabel }}
      </button>
    </div>
    <div v-if="chips.length" class="flex items-center gap-2 px-1 mt-3 flex-wrap">
      <button
        v-for="chip in chips"
        :key="chip"
        class="px-4 py-1.5 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full hover:bg-surface-variant transition-all"
      >
        {{ chip }}
      </button>
    </div>
  </div>
</template>
