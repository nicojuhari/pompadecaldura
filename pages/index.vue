<template>
    <HeroSection />
    <FeaturesSection />
    <ImagesSection />
    <CallToActionComp />
    <WarmlinkSection />
    <ParagraphsSection />
    <ContentSection />
    <NuxtLink to="/contacts" clas="p-2 text-center mb-8">Contacte ...</NuxtLink>
</template>

<script setup>

</script>

<style>
    section:nth-child(odd) {
        background: rgba(255, 152, 0, .045);
    }
</style>