<script setup>
    let paragraphs = [
        {
            title: 'Performanță inaltă la temperaturi cu minus',
            content: `Evaluarea energetică europeană A+++ nu numai că asigură un nivel superior de performanță, dar vă reduce foarte mult facturile la energie datorită folosirii eficiența a energiei electricen.Când este necesară încălzirea, performanța și eficiența pompelor de căldură echivalente - folosind agenți frigorifici obișnuiți, cum ar fi R410A- este redusă, afectând eficiența energetică generală și capacitatea de a asigura o încălzire adecvată atunci când aveți cel mai mult nevoie.
                        Datorită tehnologiei noastre avansate unice DC Inverter și EVI,pompa de căldură Q-TERM cu gaz R32 poate reduce cantitatea de energie electrică utilizată pe tot parcursul zilei prin ajustarea automata a
                        puterii termice, asigurând un confort de încălzire fiabil și stabil cu alimentare constantă cu apă caldă, chiar și atunci când funcționează la temperatura exterioara de  de până la -25℃.
                        `
        },
        {
            title: 'Producere Apa Calda Menajera',
            content: `Nu numai că această pompă de căldură perfecta pentru încălzirea întregii case,dar mai poate oferi, de asemenea,  apă caldă menajera când este conectata cu un boiler Q-TERM produs la  cele mai înalte standarde,si vă puteți asigura că familia dvs. are întotdeauna apă caldă menajera  fiabil, stabil și in continuu apă fierbinte  economisind în același timp bani.`
        },
        {
            title: 'Smart DTU Connection Technology',
            content: `Furnizand  ultima  generație de tehnologie, pompa de căldură Q-TERM vă permite să o controlați  de la distanta.
                        Pompa de căldură include o Conexiune inteligentă cu modul  DTU pentru a vă gestiona sistemul de încălzire prin intermediul Aplicației Warmlink.
            `
        },
        {
            title: 'Funcționare silențioasă',
            content: `Sub 50 dB
                    Datorită atenției unice și meticuloase acordata pentru izolarea fonică, nivelurile de zgomot pot fi menținute la fel de scăzute de 39 dB la un metru distanță (debit min.) și 48 dB la un debit nominal , spre deosebire de alte pompe de caldura care funcționează la 68dB în condiții similare
                `
        }
    ]

</script>
<template>
  <section class="py-16 md:py32 px-6">
      <div class="max-w-screen-xl w-full m-auto text-lg">
          <div v-for="item in paragraphs" class="mb-6">
                <div class="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-brand mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <h2 class="text-2xl font-bold">{{item.title}}</h2>
                    
                </div>
                <div class="text-gray-700">
                    {{item.content}}
                </div>
          </div>
      </div>
  </section>
</template>


<style>

</style>