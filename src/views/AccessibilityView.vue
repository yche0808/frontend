<script setup></script>

<template>
  <div class="bg-background text-on-surface selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
    <nav class="fixed top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-xl dark:bg-slate-900/80">
      <div class="mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-4">
        <RouterLink class="text-2xl font-bold tracking-tighter text-navy-900 dark:text-white" to="/">
          Yarra Vista
        </RouterLink>
        <div class="hidden items-center space-x-8 font-manrope text-sm font-medium tracking-tight md:flex">
          <RouterLink class="text-slate-500 transition-colors duration-200 ease-in-out hover:text-navy-700 dark:text-slate-400 dark:hover:text-slate-200" to="/">Explore</RouterLink>
          <RouterLink class="text-slate-500 transition-colors duration-200 ease-in-out hover:text-navy-700 dark:text-slate-400 dark:hover:text-slate-200" to="/map">Map</RouterLink>
          <RouterLink class="border-b-2 border-mint-400 pb-1 text-navy-900 dark:text-white" to="/compare">Compare</RouterLink>
        </div>
        <div class="flex items-center space-x-4">
          <button class="rounded-full p-2 transition-colors duration-200 ease-in-out hover:bg-slate-50 dark:hover:bg-slate-800/50">
            <span class="material-symbols-outlined text-on-surface-variant">account_circle</span>
          </button>
          <button class="rounded-lg bg-primary-container px-5 py-2 text-sm font-semibold text-on-primary-container transition-all hover:opacity-90">
            Sign In
          </button>
        </div>
      </div>
    </nav>

    <main class="mx-auto max-w-screen-2xl px-8 pb-24 pt-32">
      <header class="mb-16">
        <span class="mb-4 block font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">Market Analysis</span>
        <h1 class="mb-4 font-headline text-5xl font-extrabold tracking-tighter text-primary">Suburb Comparison Tool</h1>
        <p class="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
          A data-driven deep dive into Melbourne's most iconic neighborhoods. Evaluate lifestyle metrics, financial
          benchmarks, and urban connectivity side-by-side.
        </p>
      </header>

      <div class="relative grid grid-cols-12 gap-0 overflow-hidden rounded-xl border border-outline-variant/10 shadow-sm">
        <div class="col-span-12 bg-surface-container-low pt-0 lg:col-span-2 lg:pt-[320px]">
          <div class="flex h-24 items-center border-b border-outline-variant/15 p-4 md:h-48 md:p-8">
            <h3 class="font-label text-xs font-bold uppercase tracking-widest text-on-secondary-fixed-variant">Average Rent</h3>
          </div>
          <div class="flex h-24 items-center border-b border-outline-variant/15 p-4 md:h-48 md:p-8">
            <h3 class="font-label text-xs font-bold uppercase tracking-widest text-on-secondary-fixed-variant">Walkability Score</h3>
          </div>
          <div class="flex h-24 items-center border-b border-outline-variant/15 p-4 md:h-48 md:p-8">
            <h3 class="font-label text-xs font-bold uppercase tracking-widest text-on-secondary-fixed-variant">Green Space</h3>
          </div>
          <div class="flex h-24 items-center border-b border-outline-variant/15 p-4 md:h-48 md:p-8">
            <h3 class="font-label text-xs font-bold uppercase tracking-widest text-on-secondary-fixed-variant">Commute to CBD</h3>
          </div>
        </div>

        <div class="col-span-12 border-r border-outline-variant/15 bg-surface-container-lowest transition-all hover:bg-white lg:col-span-5">
          <div class="group relative h-80 overflow-hidden">
            <img
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2TQ83gY3CXQ4Vzsv_FSBnlqNyNyhZDnNdgkY6ExLpzndado9ExaTxvNmzWzXU8bNWPxRg06vRqrZNBItbennTXTN3DFjDlkN-1-nwrvSTQPz1lDP-0pj1iyKjYxM-Rcv9-TwXJ_I6i7oxL_wNOW_ehw25E0oPD0I7feexKh68kI-MIJ246XiFKzBLiunLNBXb2cHQYK0A2JMANmW8_E49NgXXOQXV2N7sJYNb2XEnHKvuNHeB0wQFF5TmgdRM1OW5pkEAU80bZgF4"
              alt="Fitzroy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div class="absolute bottom-6 left-8">
              <h2 class="font-headline text-3xl font-extrabold tracking-tight text-white">Fitzroy</h2>
              <span class="text-sm font-medium text-tertiary-fixed">Inner North / Cultural Hub</span>
            </div>
          </div>

          <div class="h-24 border-b border-outline-variant/15 p-4 md:h-48 md:p-8">
            <div class="flex items-baseline gap-2">
              <span class="text-4xl font-extrabold text-primary">$780</span>
              <span class="text-sm font-medium text-on-surface-variant">/ week avg</span>
            </div>
            <p class="mt-2 text-sm text-on-surface-variant">
              High demand for heritage terrace houses and warehouse conversions.
            </p>
          </div>

          <div class="flex h-24 items-center gap-8 border-b border-outline-variant/15 p-4 md:h-48 md:p-8">
            <div class="relative flex h-16 w-16 items-center justify-center md:h-24 md:w-24">
              <svg class="-rotate-90 h-full w-full">
                <circle class="text-surface-container-high" cx="48" cy="48" r="42" fill="transparent" stroke="currentColor" stroke-width="8" />
                <circle class="text-tertiary-fixed" cx="48" cy="48" r="42" fill="transparent" stroke="currentColor" stroke-width="8" stroke-dasharray="263" stroke-dashoffset="5" />
              </svg>
              <span class="absolute text-lg font-bold text-primary md:text-xl">98</span>
            </div>
            <div>
              <span class="rounded-full bg-tertiary-fixed px-3 py-1 text-xs font-bold uppercase tracking-wider text-on-tertiary-fixed">Walker's Paradise</span>
              <p class="mt-2 text-sm leading-snug text-on-surface-variant">
                Everything is accessible via Brunswick or Gertrude Street.
              </p>
            </div>
          </div>

          <div class="flex h-24 flex-col justify-center border-b border-outline-variant/15 p-4 md:h-48 md:p-8">
            <div class="mb-3 flex items-end justify-between">
              <span class="text-sm font-bold text-on-surface">Canopy Coverage</span>
              <span class="font-bold text-primary">64%</span>
            </div>
            <div class="h-2 w-full overflow-hidden rounded-full bg-surface-container-high">
              <div class="h-full bg-primary-container" style="width: 64%" />
            </div>
            <p class="mt-4 text-sm leading-snug text-on-surface-variant">Centred around Carlton Gardens and Edinburgh Gardens.</p>
          </div>

          <div class="flex h-24 items-center border-b border-outline-variant/15 p-4 md:h-48 md:p-8">
            <div class="flex w-full items-center gap-4 rounded-xl bg-surface-container-low p-4">
              <span class="material-symbols-outlined text-3xl text-primary">directions_transit</span>
              <div>
                <span class="block text-2xl font-extrabold text-primary">12-15 min</span>
                <span class="text-xs font-bold uppercase text-on-surface-variant">Via Route 96 or 11</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 bg-surface-container-lowest transition-all hover:bg-white lg:col-span-5">
          <div class="group relative h-80 overflow-hidden">
            <img
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnrW2UPl4i09rI9qZAok4D5fIpbJVkxhWGK44kHoKEjMs8J_wu2sK5dB4XaLlrXsaHADeUMJt4r0pft-5rAXrLgHdc0V-6fDZeXCEatexIKBxCOvA913HvHCtft3L4dB_uDppXIhwlCkr3GI3Cukyzzn5bnSO2Rj4n24Tw0sB0UpDojxL9qro9rj80b_qou5Rh8jM-XUxMAaivsAEnR2bfb1J0D19v1RgWUt9ejEGFcA3DEBJzdxCiDKb4oLl7jRXafQtyZT5hpMeQ"
              alt="St Kilda"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div class="absolute bottom-6 left-8">
              <h2 class="font-headline text-3xl font-extrabold tracking-tight text-white">St Kilda</h2>
              <span class="text-sm font-medium text-tertiary-fixed">Bayside / Coastal Lifestyle</span>
            </div>
          </div>

          <div class="h-24 border-b border-outline-variant/15 p-4 md:h-48 md:p-8">
            <div class="flex items-baseline gap-2">
              <span class="text-4xl font-extrabold text-primary">$695</span>
              <span class="text-sm font-medium text-on-surface-variant">/ week avg</span>
            </div>
            <p class="mt-2 text-sm text-on-surface-variant">
              Mixed housing stock from Art Deco apartments to luxury seaside builds.
            </p>
          </div>

          <div class="flex h-24 items-center gap-8 border-b border-outline-variant/15 p-4 md:h-48 md:p-8">
            <div class="relative flex h-16 w-16 items-center justify-center md:h-24 md:w-24">
              <svg class="-rotate-90 h-full w-full">
                <circle class="text-surface-container-high" cx="48" cy="48" r="42" fill="transparent" stroke="currentColor" stroke-width="8" />
                <circle class="text-tertiary-fixed" cx="48" cy="48" r="42" fill="transparent" stroke="currentColor" stroke-width="8" stroke-dasharray="263" stroke-dashoffset="35" />
              </svg>
              <span class="absolute text-lg font-bold text-primary md:text-xl">87</span>
            </div>
            <div>
              <span class="rounded-full bg-surface-container-high px-3 py-1 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Very Walkable</span>
              <p class="mt-2 text-sm leading-snug text-on-surface-variant">
                Strong scores around Acland and Fitzroy Streets.
              </p>
            </div>
          </div>

          <div class="flex h-24 flex-col justify-center border-b border-outline-variant/15 p-4 md:h-48 md:p-8">
            <div class="mb-3 flex items-end justify-between">
              <span class="text-sm font-bold text-on-surface">Canopy Coverage</span>
              <span class="font-bold text-primary">42%</span>
            </div>
            <div class="h-2 w-full overflow-hidden rounded-full bg-surface-container-high">
              <div class="h-full bg-primary-container" style="width: 42%" />
            </div>
            <p class="mt-4 text-sm leading-snug text-on-surface-variant">
              Coastal parks dominate, though street-level shade is lower.
            </p>
          </div>

          <div class="flex h-24 items-center border-b border-outline-variant/15 p-4 md:h-48 md:p-8">
            <div class="flex w-full items-center gap-4 rounded-xl bg-surface-container-low p-4">
              <span class="material-symbols-outlined text-3xl text-primary">directions_transit</span>
              <div>
                <span class="block text-2xl font-extrabold text-primary">22-28 min</span>
                <span class="text-xs font-bold uppercase text-on-surface-variant">Via Route 16 or 96</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="mx-auto mt-24 max-w-4xl">
        <div class="group relative overflow-hidden rounded-2xl bg-primary-container p-12">
          <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-tertiary-fixed/10 blur-3xl transition-transform duration-1000 group-hover:scale-150" />
          <div class="relative z-10">
            <div class="mb-8 flex items-center gap-3">
              <div class="h-px w-12 bg-tertiary-fixed" />
              <span class="font-label text-xs uppercase tracking-widest text-tertiary-fixed">The Curator's Verdict</span>
            </div>
            <h2 class="mb-8 font-headline text-4xl font-bold tracking-tight text-white">Choice for the Modern Urbanist</h2>
            <div class="grid gap-12 md:grid-cols-2">
              <div>
                <h4 class="mb-3 text-lg font-bold text-tertiary-fixed">Why Fitzroy?</h4>
                <p class="leading-relaxed text-on-primary-container">
                  Choose Fitzroy if your priority is cultural proximity and pedestrian ease. Its unbeatable walk
                  score and tight-knit community feel justify the premium rent.
                </p>
              </div>
              <div>
                <h4 class="mb-3 text-lg font-bold text-tertiary-fixed">Why St Kilda?</h4>
                <p class="leading-relaxed text-on-primary-container">
                  Choose St Kilda if you require nature as a mental reset. While the commute is longer, seaside living
                  has strong lifestyle upside.
                </p>
              </div>
            </div>
            <div class="mt-12 flex flex-wrap items-center gap-6">
              <button class="rounded-lg bg-tertiary-fixed px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-tertiary-fixed transition-all hover:brightness-105">
                Book Market Consultation
              </button>
              <button class="rounded-lg border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white/5">
                Download Full Report
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="w-full border-t border-slate-200 bg-slate-50 px-8 py-12 dark:border-slate-800 dark:bg-slate-950">
      <div class="mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 md:grid-cols-3">
        <div class="flex flex-col gap-4">
          <div class="text-lg font-bold text-navy-900 dark:text-white">Yarra Vista</div>
          <p class="font-manrope text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
            © 2024 Yarra Vista. Curated Melbourne Living.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-x-8 gap-y-4">
          <a class="font-manrope text-xs uppercase tracking-widest text-slate-500 opacity-80 transition-all hover:text-navy-700 hover:opacity-100 dark:text-slate-400 dark:hover:text-white" href="#">About Us</a>
          <a class="font-manrope text-xs uppercase tracking-widest text-slate-500 opacity-80 transition-all hover:text-navy-700 hover:opacity-100 dark:text-slate-400 dark:hover:text-white" href="#">Market Reports</a>
          <a class="font-manrope text-xs uppercase tracking-widest text-slate-500 opacity-80 transition-all hover:text-navy-700 hover:opacity-100 dark:text-slate-400 dark:hover:text-white" href="#">Privacy Policy</a>
          <a class="font-manrope text-xs uppercase tracking-widest text-slate-500 opacity-80 transition-all hover:text-navy-700 hover:opacity-100 dark:text-slate-400 dark:hover:text-white" href="#">Terms of Service</a>
        </div>
        <div class="flex items-center justify-start gap-6 md:justify-end">
          <div class="flex flex-col items-end">
            <span class="mb-1 text-[10px] uppercase tracking-widest text-slate-400">Stay Updated</span>
            <div class="flex border-b border-slate-300 pb-1 dark:border-slate-700">
              <input
                class="w-32 border-none bg-transparent p-0 text-[10px] text-navy-900 placeholder:text-slate-300 focus:ring-0 dark:text-white"
                type="email"
                placeholder="EMAIL ADDRESS"
              />
              <button class="material-symbols-outlined text-sm text-mint-600 dark:text-mint-400">
                arrow_forward
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
