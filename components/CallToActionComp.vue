
<template>
    <section class="custom-bg" v-once>
        <div class="container flex items-center flex-col justify-center text-center text-white">
            <div class="text-center mb-8 md:mb-12 font-bold text-3xl md:text-5xl leading-snug">
                Consultație gratuită direct pe șantier</div>
            <div class="tracking-wider text-lg border-2 rounded-full">
                <a href="tel:+37362053053" class="py-2 px-4 flex items-center hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>062053053</span>
                </a>
            </div>
        </div>
    </section>
</template>
<style scoped>
    section.custom-bg {
        @apply bg-color2;
    }
</style>