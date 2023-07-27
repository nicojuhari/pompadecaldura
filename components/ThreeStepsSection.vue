<script setup>
let list = [
    {
        title: 'Proiectare și Design',
        image: '/images/q-term-proiectare-si-design.png',
        text: 'transparent images. The format uses compression, but the files can still be large. Use TinyPNG to shrink images for your apps and sites. It will use less bandwidth and load faster.',
    },
    {
        title: 'Instalare Profesională',
        image: '/images/q-term-instalare-profesionala.png',
        text: 'transparent images. The format uses compression, but the files can still be large. Use TinyPNG to shrink images for your apps and sites. It will use less bandwidth and load faster.',
    },
    {
        title: 'Deservire și Mentenanță',
        image: '/images/q-term-instalare-profesionala.png',
        text: 'transparent images. The format uses compression, but the files can still be large. Use TinyPNG to shrink images for your apps and sites. It will use less bandwidth and load faster.',
    }
]
</script>   
<template>
    <section>
        <div class="container">
            <div class="section-title">Proiectare, Instalare și Deservire</div>
            <div class="grid md:grid-cols-3 gap-6">
                <div class="rounded-lg bg-white shadow overflow-hidden" v-for="item in list">
                    <div class="h-[240px]">
                        <img :src="item.image" :title="item.title" class="object-cover w-full h-full"/>
                    </div>
                    <div class="p-6">
                        <div class="text-center font-bold text-2xl">{{ item.title }}</div>
                        <div class="text-lg mt-6">{{ item.text }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
