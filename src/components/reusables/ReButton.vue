<template>
    <button class="reusable-button ripple" ref="button" @click="clickAnimation">
        <slot></slot>
    </button>
</template>

<script setup>
import anime from 'animejs/lib/anime.es';
import { ref } from 'vue';

const clickAnimation = (e) => {
    const timeline = anime.timeline({ targets: e.target, easing: 'linear', duration: 50 });
    timeline
    .add({
        scale: 0.9,
    })
    .add({
        scale: 1,
    })
}

</script>

<style lang="sass" scoped>

.reusable-button
    padding: 0.5rem 1.5rem
    position: relative
    font-size: 0.9rem
    font-weight: 500
    color: var(--cl-f-main)
    border-radius: var(--brad-m)
    background: var(--cl-main)
    cursor: pointer
    overflow: hidden

</style>