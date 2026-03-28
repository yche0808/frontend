import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useLocationStore = defineStore("location", () => {
  const suburbs = ref([
    {
      id: "south-yarra",
      name: "South Yarra",
      postcode: "3141",
      medianPrice: "$2.1M",
      score: 9.8,
      coords: { top: "35%", left: "52%" },
    },
    {
      id: "prahran",
      name: "Prahran",
      postcode: "3181",
      medianPrice: "$1.7M",
      score: 8.5,
      coords: { top: "45%", left: "48%" },
    },
    {
      id: "windsor",
      name: "Windsor",
      postcode: "3181",
      medianPrice: "$1.5M",
      score: 8.1,
      coords: { top: "58%", left: "45%" },
    },
  ]);

  const selectedLocationId = ref("prahran");

  const selectedLocation = computed(
    () => suburbs.value.find((item) => item.id === selectedLocationId.value) ?? suburbs.value[0],
  );

  function selectLocation(id) {
    selectedLocationId.value = id;
  }

  return {
    suburbs,
    selectedLocationId,
    selectedLocation,
    selectLocation,
  };
});
