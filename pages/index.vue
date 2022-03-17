<template>
    <HeroSection/>
    <FeaturesSection/>
    <ImagesSection/>
    <CallToActionComp />
    <WarmlinkSection/>
    <ParagraphsSection/>
    <ContentSection/>
</template>

<script setup>
import CallToActionComp1 from '~~/components/CallToActionComp.vue';
</script>

<style>
    section:nth-child(odd) {
        background: rgba(255, 152, 0, .045);
    }
</style>