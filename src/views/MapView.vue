<script setup>
import { RouterLink } from "vue-router";
import { useLocationStore } from "../stores/useLocationStore";
import MapContainer from "../components/MapContainer.vue";

const locationStore = useLocationStore();
</script>

<template>
  <div class="bg-surface font-body text-on-surface selection:bg-tertiary-fixed">
    <nav class="fixed top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-xl dark:bg-slate-900/80">
      <div class="mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-4">
        <div class="text-2xl font-bold tracking-tighter text-navy-900 dark:text-white">Yarra Vista</div>
        <div class="hidden items-center gap-8 font-manrope text-sm font-medium tracking-tight md:flex">
          <RouterLink class="text-slate-500 transition-colors duration-200 ease-in-out hover:text-navy-700" to="/">
            Explore
          </RouterLink>
          <RouterLink class="border-b-2 border-mint-400 pb-1 text-navy-900 dark:text-white" to="/map">
            Map
          </RouterLink>
          <RouterLink class="text-slate-500 transition-colors duration-200 ease-in-out hover:text-navy-700" to="/compare">
            Compare
          </RouterLink>
        </div>
        <div class="flex items-center gap-4">
          <button class="rounded-lg bg-primary-container px-5 py-2 font-medium text-on-primary transition-colors duration-200 hover:bg-primary">
            Sign In
          </button>
          <span class="material-symbols-outlined cursor-pointer text-navy-900 dark:text-navy-100">account_circle</span>
        </div>
      </div>
    </nav>

    <main class="flex h-screen overflow-hidden pt-[72px]">
      <aside
        class="relative z-40 flex h-full w-96 flex-shrink-0 flex-col overflow-y-auto border-r border-outline-variant/15 bg-surface-container-lowest"
      >
        <div class="relative h-64 w-full">
          <img
            alt="Prahran street view"
            class="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA50lDDwetuk1BXAHidh4pjxRCNB4iCLmW3cQGNscK5baKLCwnJ91x4HXuBehE5Bk8CaR1hoef42xLQTnKYRysIZB9N9tjkEvkJrrR77spH14F-4PKbzfWOaYPTS9HUpu3LLY95gYh6SvTOhZ25BD69HaY7Fiokz5qTZg1MraEZfayd_sqrXc1TV246z5L2JBWIQalHdKU4kvSayeyKcWzlecgE8veJ-UsLnWCIP5NZjAYvOPw2CI9u4-M-uXUAc24ZxijTRQgrnYhz"
          />
          <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary-container/80 to-transparent p-6">
            <h2 class="text-3xl font-bold tracking-tighter text-white">{{ locationStore.selectedLocation.name }}</h2>
            <p class="text-sm font-medium uppercase tracking-widest text-on-primary-container">
              Postcode {{ locationStore.selectedLocation.postcode }}
            </p>
          </div>
        </div>

        <div class="space-y-10 p-8">
          <div class="grid grid-cols-2 gap-4">
            <div class="flex h-32 flex-col justify-between rounded-xl bg-surface-container-low p-4">
              <span class="text-xs uppercase tracking-widest text-on-surface-variant">Safety Score</span>
              <div class="flex items-end gap-1">
                <span class="text-3xl font-extrabold text-primary">{{ locationStore.selectedLocation.score }}</span>
                <span class="pb-1 text-sm text-on-surface-variant">/10</span>
              </div>
            </div>
            <div class="flex h-32 flex-col justify-between rounded-xl bg-tertiary-fixed p-4">
              <span class="text-xs uppercase tracking-widest text-on-tertiary-fixed">Greenery</span>
              <div>
                <span class="block text-xl font-bold text-on-tertiary-fixed">Excellent</span>
                <span class="text-xs text-on-tertiary-fixed-variant">12 Parks within 2km</span>
              </div>
            </div>
          </div>

          <section>
            <div class="mb-4 flex items-center justify-between">
              <h3 class="text-xs uppercase tracking-widest text-on-surface-variant">Transit Connectivity</h3>
              <span
                class="rounded bg-secondary-container px-2 py-0.5 text-[10px] font-bold uppercase text-on-secondary-fixed-variant"
              >
                High
              </span>
            </div>
            <div class="space-y-3">
              <div class="flex items-center gap-4">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-highest text-primary">
                  <span class="material-symbols-outlined text-lg">train</span>
                </div>
                <div>
                  <p class="text-sm font-bold text-on-surface">Prahran Station</p>
                  <p class="text-xs text-on-surface-variant">Sandringham Line • 4 min walk</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-highest text-primary">
                  <span class="material-symbols-outlined text-lg">tram</span>
                </div>
                <div>
                  <p class="text-sm font-bold text-on-surface">Route 72 Tram</p>
                  <p class="text-xs text-on-surface-variant">Commercial Rd • 2 min walk</p>
                </div>
              </div>
            </div>
          </section>

          <section class="rounded-xl bg-primary-container p-6 text-white">
            <h3 class="mb-4 text-xs uppercase tracking-widest text-on-primary-container">Market Insight</h3>
            <div class="space-y-4">
              <div>
                <p class="text-xs text-on-primary-container">Median House Price</p>
                <p class="text-2xl font-bold">
                  {{ locationStore.selectedLocation.medianPrice }}
                  <span class="ml-1 text-xs font-normal text-tertiary-fixed">↑ 4.2%</span>
                </p>
              </div>
              <button
                class="w-full rounded bg-tertiary-fixed py-3 text-sm font-bold text-on-tertiary-fixed transition-all hover:brightness-110"
              >
                View Market Report
              </button>
            </div>
          </section>

          <section>
            <h3 class="mb-4 text-xs uppercase tracking-widest text-on-surface-variant">Choose Suburb</h3>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="suburb in locationStore.suburbs"
                :key="suburb.id"
                class="rounded-full px-3 py-1 text-xs transition-all"
                :class="
                  locationStore.selectedLocationId === suburb.id
                    ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                    : 'bg-surface-container text-on-surface-variant'
                "
                @click="locationStore.selectLocation(suburb.id)"
              >
                {{ suburb.name }}
              </button>
            </div>
          </section>
        </div>
      </aside>

      <MapContainer />
    </main>
  </div>
</template>
