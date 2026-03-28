import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useInsightsStore = defineStore("insights", () => {
  const neighborhoodScores = ref([
    { label: "Public Transport", value: 9.8 },
    { label: "Healthcare", value: 8.5 },
    { label: "Amenities", value: 9.2 },
  ]);

  const demographics = ref([
    { label: "Young Professionals", value: 45 },
    { label: "Families", value: 25 },
    { label: "Retirees", value: 30 },
  ]);

  const commute = ref({
    fitzroy: "12-15 min",
    stkilda: "22-28 min",
  });

  const averageScore = computed(() => {
    const total = neighborhoodScores.value.reduce((sum, item) => sum + item.value, 0);
    return (total / neighborhoodScores.value.length).toFixed(1);
  });

  return {
    neighborhoodScores,
    demographics,
    commute,
    averageScore,
  };
});
