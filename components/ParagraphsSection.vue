<script setup>
    import { ref } from 'vue';
    let paragraphs = ref([
        {
            title: 'Performanță inaltă la temperaturi cu minus',
            content: `  <p>Evaluarea energetică europeană A+++ nu numai că asigură un nivel superior de performanță, dar vă reduce foarte mult facturile la energie datorită folosirii eficiența a energiei electricen.</p>
                        <p>Când este necesară încălzirea, performanța și eficiența pompelor de căldură echivalente - folosind agenți frigorifici obișnuiți, cum ar fi R410A- este redusă, afectând eficiența energetică generală și capacitatea de a asigura o încălzire adecvată atunci când aveți cel mai mult nevoie.</p>
                        <p>Datorită tehnologiei noastre avansate unice DC Inverter și EVI,pompa de căldură Q-TERM cu gaz R32 poate reduce cantitatea de energie electrică utilizată pe tot parcursul zilei prin ajustarea automata a
                        puterii termice, asigurând un confort de încălzire fiabil și stabil cu alimentare constantă cu apă caldă, chiar și atunci când funcționează la temperatura exterioara de  de până la -25℃.</p>
                        `,
            isOpen: false
        },
        {
            title: 'Producere Apă Caldă Menajeră',
            content: `Nu numai că această pompă de căldură perfecta pentru încălzirea întregii case,dar mai poate oferi, de asemenea,  apă caldă menajera când este conectata cu un boiler Q-TERM produs la  cele mai înalte standarde,si vă puteți asigura că familia dvs. are întotdeauna apă caldă menajera  fiabil, stabil și in continuu apă fierbinte  economisind în același timp bani.`,
            isOpen: false
        },

        {
            title: 'Smart DTU Connection Technology',
            content: `<p>Furnizand  ultima  generație de tehnologie, pompa de căldură Q-TERM vă permite să o controlați  de la distanta.</p>
                        Pompa de căldură include o Conexiune inteligentă cu modul  DTU pentru a vă gestiona sistemul de încălzire prin intermediul Aplicației Warmlink.
            `,
            isOpen: false
        },
        {
            title: 'Funcționare silențioasă',
            content: `Sub 50 dB
                    Datorită atenției unice și meticuloase acordata pentru izolarea fonică, nivelurile de zgomot pot fi menținute la fel de scăzute de 39 dB la un metru distanță (debit min.) și 48 dB la un debit nominal , spre deosebire de alte pompe de caldura care funcționează la 68dB în condiții similare
                `,
            isOpen: false
        }
    ]);

</script>
<template>
    <section>
        <div class="container">
            <div class="section-title">De ce Q-TERM?</div>
            <div class="text-lg">
                <AccordionComp v-for="item in paragraphs" :title="item.title" :content="item.content"></AccordionComp>
            </div>
        </div>
    </section>
</template>


