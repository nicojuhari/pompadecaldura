<script setup>
    import { ref } from 'vue';
    defineProps(['title', 'content']);

    const isOpen = ref(false)
    const contentBlock = ref(null)

    const toggleAccordion = () => {

        isOpen.value = !isOpen.value

        if (contentBlock.value.style.maxHeight) {
            contentBlock.value.style.maxHeight = null;
        } else {
            contentBlock.value.style.maxHeight = contentBlock.value.scrollHeight + "px";
        } 
    }

</script>
<template>
    <div class="accordion border-b" :class="{'is-open': isOpen}">
        <div class="flex items-center cursor-pointer py-6 justify-between" @click="toggleAccordion">
            <h2 class="text-xl pr-4 truncate font-bold">{{title}}</h2>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
        <div class="text-gray-700 accordion-content" ref="contentBlock">
            <div class="p-6 leading-relaxed" v-html="content"></div>
        </div>
    </div>
</template>

<style scoped>
.accordion-content {
    overflow: clip;
    transition: all 0.6s ease-out;
    max-height: 0;
}
.accordion svg {
    transition: all 0.6s ease-out;
}

.accordion.is-open svg {
    transform: rotate(-180deg);
}

.accordion.is-open:last-child {
    border-bottom: 0px;
}

</style>