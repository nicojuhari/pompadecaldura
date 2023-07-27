<script setup>
    let list = [
        'https://1foodmenu-demos.b-cdn.net/pompa-de-caldura-q-term.jpg',
        'https://1foodmenu-demos.b-cdn.net/pompa-de-caldura-q-term.jpg',
        'https://1foodmenu-demos.b-cdn.net/q-term-benefits.jpg',
        'https://1foodmenu-demos.b-cdn.net/pompa-de-caldura-q-term.jpg',
        'https://1foodmenu-demos.b-cdn.net/q-term-benefits.jpg',
        'https://1foodmenu-demos.b-cdn.net/q-term-benefits.jpg',
    ]
</script>
<template>
    <section>
        <div class="section-title">Proiectele Noastre</div>
        <div class="container">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div v-for="item in list" :key="item" class="h-72 rounded-lg">
                        <img  :src="item"  class="object-cover h-full w-full rounded-lg"/>
                    </div>
                </div>
            </div>
    </section>
</template>
<style>

</style>