<script setup>
    let list = [
        {
            icon: 'material-symbols:workspace-premium-rounded',
            color: 'brand',
            text: 'Calitate premium și ultra design',
        },
        {
            icon: 'prime:volume-down',
            color: 'blue-600',
            text: 'Funcționare silențioasă, sub 50 dB',
        },
         {
            icon: 'material-symbols:eco-outline',
            color: 'green-600',
            text: 'Ecologic, cu 70% emisii mai scăzute de CO₂',
        },
            {
            icon: 'system-uicons:lightning',
            color: 'yellow-600',
            text: 'Evaluarea energică europeană A+++',
        },
    ]
</script>   
<template>
    <section v-once>
        <div class="container">
            <div class="section-title">Beneficii</div>
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <!-- <div style="background-image: url('https://1foodmenu-demos.b-cdn.net/pompa-de-caldura-q-term.jpg');"></div> -->
                    <img class="object-cover h-[360px] w-full md:h-[500px] md:w-[400px] rounded-lg mx-auto" src="https://1foodmenu-demos.b-cdn.net/q-term-benefits.jpg" alt="pompa de caldură Q-Term">
                </div>
                <div class="grid place-content-center gap-6">
                    <div class="flex gap-4 items-center justify-left" v-for="item in list">
                        <div :class="' text-' + item.color" class="p-2 bg-opacity-20 rounded-full">
                            <Icon :name="item.icon" class="h-12 w-12" />
                        </div>
                        <div class="text-2xl">{{ item.text }}</div>
                    </div>
                </div>
            </div>
            <div class="grid md:grid-cols-2 text-center gap-6 gap-y-16 text-xl">


                


    
            </div>
        </div>
    </section>
</template>
