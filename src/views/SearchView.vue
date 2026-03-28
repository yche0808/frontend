<script setup>
import { RouterLink, useRoute } from "vue-router";
import SearchBar from "../components/SearchBar.vue";
import InsightCard from "../components/InsightCard.vue";
import { useInsightsStore } from "../stores/useInsightsStore";

const route = useRoute();
const insightsStore = useInsightsStore();

const suburbCards = [
  {
    name: "St Kilda",
    median: "$1.4M",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2lGs3tFqmm-CjgzARTpv_ve63vKHkRx04dOKS5F-hgylTSZsfgAxky9z6rcOyldCBTlv-MRbxQBJq3DJAiR3Z5mDtPcfrCWO_3Pha-CYJNwbAIzR3pDU_-zn2eX1LglUyvvx3qeJZn_HgsqMte0QKGfIZF5vT6oM9OQHR39N-945J2CtPHp-WUyUoVlFfDNIcAyV0i0H5zSPJPusIdj5B8L1ENPfkDIrOsNL8NEGIEuqhqR1AqJsZKDc3DfG8Qqm7k1W_Fsp--F2d",
    alt: "St Kilda pier at sunset with palm trees and the iconic silhouette of the beach architecture",
  },
  {
    name: "Carlton",
    median: "$1.1M",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3D2Jb-mtivjjaA36AMSseCeJquQj1cMXjld12-AJEdAXKn0JYlJTez854hjAQWVADlojigItdB1Pjlf2wt5GrVzO99duvPCImtdrtQbxDlQu8YOVRtnkgjpM7RSEdZnKjIq-6_QYNKj3mZJx1cx8VOYbjZrJ07NtbF3grHTo34ZTmQ7aP1LtvJOyJmtM4yV8Mmu5-pB0fYqr-Rtforsuhy1Pt6oMdjVM5p9oqan_5CilehMEuMRiFASv_3wNfsyX0Qjag1ihQ-MOb",
    alt: "Princes Park in Carlton with historic University of Melbourne buildings and autumn leaves",
  },
  {
    name: "Toorak",
    median: "$5.2M",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7LaYxmyuZJ_XgyyyiSjy25UyxSoiNFmRsIbNTUfZ0J9kjgmheYXMA1lCFSauc8x6smd1xUXIt_P300x8Hh6GqrxUH_mjrEbCn-aYvIgfl8z3iBJKtcIrwBNCbJ2JMqvTO4d_hkibQupPsoWYhu3iTvZVq5Odto7gMJ3Dm9Goi4Tvq57e8Do7kJkWu-x-0unwJ70DpLgzeqhbS0_R6hn0RA5KwDFpHUPlv9DfhovPMXJcWkCVRPWazDOR81u1Mfsn302tOZnjVHfo_",
    alt: "luxury residential street in Toorak with grand wrought iron gates and established plane trees",
  },
  {
    name: "Brighton",
    median: "$3.4M",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvmh5yGBul0ogGmKkxlWJTsY2aniblW5DkEbojVj-CsWNfzH3Hzjpmsf1zBT0qiTnPv6yd35gZ12qDj8HRJlwpWuodWnFZTCjvC-D9Mn7sDNKzCzVWWftVvpHuov1KqdBZhyyOVGNPp_jVyo8noCCaYFcVf7PatJib0mnfRTDeMEnGtq-Y2uETJqq9wP76QL2IzSNINbYNxhua7uCvKoTRaM2Ux6CkzbYWsT6hLIS32elUQtPPPk6XX_L6L9FYB-qN3HNK2HNnRsK6",
    alt: "coastal walk in Brighton with colorful bathing boxes and calm ocean waters",
  },
];
</script>

<template>
  <div class="text-on-surface">
    <nav class="fixed top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-xl dark:bg-slate-900/80">
      <div class="mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-4">
        <div class="text-2xl font-bold tracking-tighter text-navy-900 dark:text-white">Yarra Vista</div>
        <div class="hidden items-center space-x-8 font-manrope text-sm font-medium tracking-tight md:flex">
          <RouterLink
            to="/"
            class="pb-1"
            :class="
              route.name === 'explore'
                ? 'text-navy-900 dark:text-white border-b-2 border-mint-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-navy-700 dark:hover:text-slate-200 transition-colors duration-200 ease-in-out'
            "
          >
            Explore
          </RouterLink>
          <RouterLink
            to="/map"
            class="pb-1"
            :class="
              route.name === 'map'
                ? 'text-navy-900 dark:text-white border-b-2 border-mint-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-navy-700 dark:hover:text-slate-200 transition-colors duration-200 ease-in-out'
            "
          >
            Map
          </RouterLink>
          <RouterLink
            to="/compare"
            class="pb-1"
            :class="
              route.name === 'compare'
                ? 'text-navy-900 dark:text-white border-b-2 border-mint-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-navy-700 dark:hover:text-slate-200 transition-colors duration-200 ease-in-out'
            "
          >
            Compare
          </RouterLink>
        </div>
        <div class="flex items-center space-x-4">
          <button
            class="px-4 py-2 font-manrope text-sm font-medium text-navy-900 transition-colors duration-200 hover:bg-slate-50 dark:text-navy-100 dark:hover:bg-slate-800/50"
          >
            Sign In
          </button>
          <span class="material-symbols-outlined cursor-pointer text-navy-900 dark:text-navy-100">
            account_circle
          </span>
        </div>
      </div>
    </nav>

    <main class="pt-16">
      <section class="relative flex min-h-[870px] items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img
            class="h-full w-full object-cover"
            alt="cinematic wide-angle shot of Melbourne skyline at twilight with the Yarra River reflecting city lights and warm architectural glow"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0mmSf6uhVKkCbZfoBXhTH9ji7IaoYQ_NbeSHWuLIan0xWKGZYt2AsO3i__kZNcVRJ6AzqCbHQHV51C0z52IxgY286BDC8N8OPcI7X7-h0EpT7tYUaJZda5wJ0seluqGyH6Hg8Y_2BExTsmKEvmVNcHH_7PqaAgkEQgmmmwmmFh0N15gMIueWwqnea3OmLYP0iBN8ICviDBHgBnKNodgj91Exx5BqK8rJSv3MO_Qeg0S5X1KA6qU4OYVaB7c-L6ZPVkZpKE5Vd0o2O"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary-container/80"></div>
        </div>
        <div class="relative z-10 w-full max-w-4xl px-8 text-center">
          <h1 class="mb-8 font-headline text-5xl font-extrabold tracking-tighter text-white md:text-7xl">
            Your Melbourne,<br />
            Curated.
          </h1>
          <SearchBar placeholder="Search a suburb or address" button-label="Find Home" />
          <div class="mt-8 flex justify-center gap-6 font-label text-xs uppercase tracking-widest text-white/80">
            <span class="flex items-center gap-2">
              <span class="material-symbols-outlined text-sm">apartment</span> Luxury Rentals
            </span>
            <span class="flex items-center gap-2">
              <span class="material-symbols-outlined text-sm">home</span> Premium Sales
            </span>
            <span class="flex items-center gap-2">
              <span class="material-symbols-outlined text-sm">map</span> Neighborhood Insights
            </span>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-screen-2xl px-8 py-32">
        <div class="mb-16 flex flex-col items-end justify-between gap-4 md:flex-row">
          <div>
            <span class="mb-4 block font-label text-sm font-bold uppercase tracking-widest text-tertiary-container">
              Neighborhood Curation
            </span>
            <h2 class="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
              Discover Melbourne
            </h2>
          </div>
          <p class="max-w-md font-body leading-relaxed text-on-surface-variant">
            Our editors have hand-selected the city's most vibrant pockets, from the historic charm of
            Fitzroy to the modern elegance of South Yarra.
          </p>
        </div>

        <div class="grid h-auto grid-cols-1 gap-6 md:h-[600px] md:grid-cols-12">
          <div
            class="group relative cursor-pointer overflow-hidden rounded-xl bg-surface-container-low transition-transform duration-500 md:col-span-8"
          >
            <img
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="elegant South Yarra street scene with manicured gardens and high-end residential architecture under soft afternoon light"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9GR4uF_i9i48LB071UlJyeukA_lmZCCnxgFK6ACe-ZkXn62f4oncae-wznn1ZFVyXpk1LU_9thc7iuP8C9WPrsXa5V0J0xh6ix5CbMcScXqtQIfWD1m5VHO5MByE83PJwhfmjqw_PBifbmTujkHYGKmZTS5mKUvhpYIstZdFB-sBYYQ1OecQtFgTNlKD-dVPy5wzL9Zv89elFPLXqfDbexWoBsv_Wrf8kcpV3uLFsxPJBw84OBzSrBhlmFd_FZd-3dQAYRxuzVPiy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-8 left-8 text-white">
              <h3 class="mb-2 font-headline text-3xl font-bold">South Yarra</h3>
              <p class="font-body text-white/80">The pinnacle of riverside sophistication.</p>
            </div>
          </div>
          <div
            class="group relative cursor-pointer overflow-hidden rounded-xl bg-surface-container-low transition-transform duration-500 md:col-span-4"
          >
            <img
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="vibrant Fitzroy street art on a brick Victorian terrace wall with lush green vines and a local cafe storefront"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgFrvAKRvQJI5GA_W2Hs4pJv0FI5cmR4LAPXgzeGuutfxPWvtVuXGcg6DMaT1oSQaIffOnSZUEzwPO3mQdJywcTXmXgTAoCR8UZFqslIFJHgyDJ06oIF-jbhkrgidH_DPReIf6q4AaJdzsfN99e0oGGtdFsBM0y_sd4jtBWBFRJYGZgznbPgly2MUnMKXbsPycDQxO-6_AsEfwKIODktB0lJktNzgWdG9WYCW-GXxXsGj36_6WMozMvrzderdrFM-dDWQQN56OI6SM"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-8 left-8 text-white">
              <h3 class="mb-2 font-headline text-3xl font-bold">Fitzroy</h3>
              <p class="font-body text-white/80">Arts, culture, and heritage.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-surface-container-low py-32">
        <div class="mx-auto max-w-screen-2xl px-8">
          <div class="mb-16 text-center">
            <h2 class="mb-4 font-headline text-4xl font-bold text-primary">Explore Popular Suburbs</h2>
            <div class="mx-auto h-1 w-12 bg-tertiary-fixed"></div>
          </div>
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <InsightCard
              v-for="card in suburbCards"
              :key="card.name"
              :title="card.name"
              :subtitle="`Median ${card.median}`"
              :image="card.image"
              :alt="card.alt"
            />
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-screen-2xl overflow-hidden px-8 py-32">
        <div class="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
          <div class="relative">
            <div class="absolute -left-12 -top-12 -z-10 h-64 w-64 rounded-full bg-secondary-container opacity-20"></div>
            <img
              class="relative z-10 aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl"
              alt="stylish modern apartment interior with floor-to-ceiling windows overlooking Melbourne CBD skyline at sunset"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPyhEbvDZByw1W_oHjwHEVXu5fKdtdJ6ZBayrFomTax2-weLJm2Qvo4pIZWXiV81SVkC_eWSnlpWypt6rkk3mKhlzjRtq15dZAJ6G1jYc3_tMRLQbBN1FWjYOKMVzqWRJ1OgQsDp2Or3ZfubrTjcmCC0P-a9CbL78KIuWETMlxQ3OI4CzG2kbvQ7qxS48__bj5oj8jwKw2jBBh8dtL9MROocP-Dn-cAYsUWORc-UdP3hO8boQ8qImGkd1Q4mbuklPd_MzKg5_BZqgc"
            />
            <div class="absolute -bottom-10 -right-10 z-20 hidden rounded-xl bg-primary p-12 md:block">
              <span class="font-headline text-6xl font-extrabold text-tertiary-fixed">01</span>
              <p class="mt-4 font-label tracking-widest text-white">RELOCATION<br />EXCELLENCE</p>
            </div>
          </div>
          <div>
            <span class="mb-4 block font-label text-sm font-bold uppercase tracking-widest text-tertiary-container">
              Moving to the City
            </span>
            <h2 class="mb-8 font-headline text-4xl font-bold leading-tight text-primary md:text-5xl">
              Your Seamless Transition to Melbourne Living
            </h2>
            <p class="mb-12 text-lg leading-relaxed text-on-surface-variant">
              Relocating requires more than just a new address. Our comprehensive guides cover everything
              from school zones and transport connectivity to the best hidden coffee spots in your new
              neighborhood.
            </p>
            <ul class="mb-12 space-y-6">
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined mt-1 text-tertiary-container">check_circle</span>
                <div>
                  <h5 class="font-headline font-bold text-primary">Education &amp; Catchment Mapping</h5>
                  <p class="text-sm text-on-surface-variant">
                    Detailed analysis of public and private schooling boundaries.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined mt-1 text-tertiary-container">check_circle</span>
                <div>
                  <h5 class="font-headline font-bold text-primary">Lifestyle &amp; Amenity Index</h5>
                  <p class="text-sm text-on-surface-variant">
                    Walkability scores, park access, and local cultural staples.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined mt-1 text-tertiary-container">check_circle</span>
                <div>
                  <h5 class="font-headline font-bold text-primary">Market Intelligence</h5>
                  <p class="text-sm text-on-surface-variant">
                    Quarterly reports on capital growth and rental yields.
                  </p>
                </div>
              </li>
            </ul>
            <button
              class="group flex items-center gap-3 font-headline font-extrabold text-primary transition-colors hover:text-primary-container"
            >
              View Relocation Guides
              <span class="material-symbols-outlined transition-transform group-hover:translate-x-2">
                east
              </span>
            </button>
          </div>
        </div>
      </section>

      <section class="mx-auto mb-32 max-w-screen-2xl px-8">
        <div class="relative overflow-hidden rounded-3xl bg-primary-container p-12 text-center md:p-24">
          <div class="absolute -mr-48 -mt-48 right-0 top-0 h-96 w-96 rounded-full bg-white/5"></div>
          <div class="relative z-10">
            <h2 class="mb-6 font-headline text-3xl font-bold text-white md:text-5xl">
              Market insights, delivered.
            </h2>
            <p class="mx-auto mb-12 max-w-2xl text-lg text-on-primary-container">
              Join 12,000+ Melburnians receiving our weekly curated list of off-market gems and
              neighborhood transformations.
            </p>
            <form class="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                class="flex-1 rounded-lg border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-white/40 focus:border-tertiary-fixed focus:ring-tertiary-fixed"
                placeholder="Your email address"
                type="email"
              />
              <button
                class="rounded-lg bg-tertiary-fixed px-8 py-4 font-bold text-on-tertiary-fixed transition-all hover:brightness-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer class="w-full border-t border-slate-200 bg-slate-50 px-8 py-12 dark:border-slate-800 dark:bg-slate-950">
        <div class="mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 md:grid-cols-3">
          <div class="space-y-4">
            <div class="text-lg font-bold uppercase tracking-tighter text-navy-900 dark:text-white">
              Yarra Vista
            </div>
            <p class="font-manrope text-xs uppercase tracking-widest leading-relaxed text-slate-500 dark:text-slate-400">
              © 2024 Yarra Vista. Curated Melbourne Living.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <a
              class="font-manrope text-xs uppercase tracking-widest text-slate-500 opacity-80 transition-all hover:text-navy-700 hover:opacity-100 dark:text-slate-400 dark:hover:text-white"
              href="#"
            >
              About Us
            </a>
            <a
              class="font-manrope text-xs uppercase tracking-widest text-slate-500 opacity-80 transition-all hover:text-navy-700 hover:opacity-100 dark:text-slate-400 dark:hover:text-white"
              href="#"
            >
              Market Reports
            </a>
            <a
              class="font-manrope text-xs uppercase tracking-widest text-slate-500 opacity-80 transition-all hover:text-navy-700 hover:opacity-100 dark:text-slate-400 dark:hover:text-white"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              class="font-manrope text-xs uppercase tracking-widest text-slate-500 opacity-80 transition-all hover:text-navy-700 hover:opacity-100 dark:text-slate-400 dark:hover:text-white"
              href="#"
            >
              Terms of Service
            </a>
          </div>
          <div class="flex gap-6 text-navy-900 dark:text-white md:justify-end">
            <span class="material-symbols-outlined cursor-pointer transition-colors hover:text-mint-600">
              share
            </span>
            <span class="material-symbols-outlined cursor-pointer transition-colors hover:text-mint-600">
              notifications
            </span>
            <span class="material-symbols-outlined cursor-pointer transition-colors hover:text-mint-600">
              language
            </span>
          </div>
        </div>
      </footer>
    </main>
    <div class="fixed bottom-6 right-6 rounded-full bg-white p-3 shadow-lg">
      <span class="material-symbols-outlined">arrow_downward</span>
    </div>
    <section class="mx-auto max-w-screen-2xl px-8 pb-16">
      <p class="text-xs uppercase tracking-widest text-on-surface-variant">
        Live Score Average: {{ insightsStore.averageScore }}
      </p>
    </section>
  </div>
</template>
