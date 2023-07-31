<script setup>
    
</script>
<template>
    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 msd:h-[80vh] py-14 md:py-28 place-content-center ">
            <div>
                <h1 class="font-bold text-4xl md:text-6xl text-center md:text-left text-brand-dark-blue">Pompa de căldură <br>Q-TERM</h1>
                <div class="text-xl md:text-2xl mt-8">
                    <p>Încălzire, apă caldă și răcirea locuinței <b>fără GAZ și de 3 ori mai ieftin.</b></p>
                    <p class="pt-2">Recuperarea investiției din prima zi de utilizare.</p>
                </div>
                <div class="flex gap-4 mt-10">
                     <div class="bg-brand border-2 border-brand bg-opacity-90 text-white p-2 px-4 md:max-w-max rounded-lg text-xl text-center flex items-center gap-4 flex-col md:flex-row w-full">
                        <div class="w-12">
                            <Icon name="codicon:workspace-trusted" class="h-12 w-12 flex-shrink-0"/>
                        </div>
                        <div class="flex flex-col font-semibold"> 
                            <span class="uppercase text-3xl">5 ani</span>
                            <span>garanție</span></div>
                    </div> 
                    <div class="text-brand-dark-blue border-2 border-brand-dark-blue p-2 px-4 md:max-w-max rounded-lg text-xl text-center flex items-center gap-4 flex-col md:flex-row w-full cursor-pointer">
                        <div class="w-12">
                            <Icon name="ph:thumbs-up" class="h-12 w-12 flex-shrink-0"/>
                        </div>
                        <div class="flex flex-col font-semibold h-full justify-end md:justify-center"> 
                            <span>Toți clienții mulțumiți</span>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="relative grid place-content-center">
                <img class="m-auto md:max-w-md rounded-lg" src="/images/hero-pompa-de-caldura.png" alt="pompa de caldură Q-Term">
                <div class="hidden absolute top-1/2 left-1/2 h-20 w-20 bg-white rounded-full place-content-center -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                    <Icon name="material-symbols:play-arrow-rounded" class="w-12 h-12 shrink-0 text-brand"/>
                </div>
            </div>
        </div>
    </div>
</template>

