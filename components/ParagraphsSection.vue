<script setup>
    import { ref } from 'vue';
    let paragraphs = ref([
        {
            title: 'Performanță inaltă la temperaturi cu minus',
            content: `Evaluarea energetică europeană A+++ nu numai că asigură un nivel superior de performanță, dar vă reduce foarte mult facturile la energie datorită folosirii eficiența a energiei electricen. 
                        <div>Când este necesară încălzirea, performanța și eficiența pompelor de căldură echivalente - folosind agenți frigorifici obișnuiți, cum ar fi R410A- este redusă, afectând eficiența energetică generală și capacitatea de a asigura o încălzire adecvată atunci când aveți cel mai mult nevoie.</div>
                        Datorită tehnologiei noastre avansate unice DC Inverter și EVI,pompa de căldură Q-TERM cu gaz R32 poate reduce cantitatea de energie electrică utilizată pe tot parcursul zilei prin ajustarea automata a
                        puterii termice, asigurând un confort de încălzire fiabil și stabil cu alimentare constantă cu apă caldă, chiar și atunci când funcționează la temperatura exterioara de  de până la -25℃.
                        `,
            isOpen: false
        },
        {
            title: 'Producere Apa Calda Menajera',
            content: `Nu numai că această pompă de căldură perfecta pentru încălzirea întregii case,dar mai poate oferi, de asemenea,  apă caldă menajera când este conectata cu un boiler Q-TERM produs la  cele mai înalte standarde,si vă puteți asigura că familia dvs. are întotdeauna apă caldă menajera  fiabil, stabil și in continuu apă fierbinte  economisind în același timp bani.`,
            isOpen: false
        },

        {
            title: 'Smart DTU Connection Technology',
            content: `Furnizand  ultima  generație de tehnologie, pompa de căldură Q-TERM vă permite să o controlați  de la distanta.
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

    const toggleAccordion = (ev, item) => {
        ev.preventDefault();

        // let content = ev.target.nextElementSibling;

        // console.log(content.offsetHeight, content);
        paragraphs.value.forEach(paragraph => {
            if(item !== paragraph) {
                paragraph.isOpen = false;
            }
        })

        item.isOpen = !item.isOpen

    }

</script>
<template>
    <section class="py-12 md:py-24 px-4 md:px-6">
        <div class="text-center mb-8 md:mb-12 text-2xl md:text-4xl uppercase">Despre Q-TERM</div>
        <div class="max-w-screen-xl w-full m-auto text-lg">
            <AccordionComp v-for="item in paragraphs" :title="item.title" :content="item.content"></AccordionComp>
        </div>
    </section>
</template>


