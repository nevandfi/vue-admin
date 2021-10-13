<template>
    <div class="item-card-wrapper" ref="wrapper">
        <p @click="show = !show">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <super-transition>
            <item-button v-if="show">My Item</item-button>
        </super-transition>
    </div>
</template>

<script setup>
import anime from 'animejs/lib/anime.es.js'
import { ref } from 'vue'
import { SuperTransition, useTransition } from '@modules/transition';

const show = ref(true);

const wrapper = ref(null);

useTransition({ 
    in: done => {
        anime({
            targets: wrapper.value,
            translateY: [-10, 0],
            scale: [0.95, 1],
            opacity: [0.3, 1],
            easing: 'easeOutQuad',
            duration: 400,
            complete: done
        })
    }, 
    out: done => {
        anime({
            targets: wrapper.value,
            translateY: [0, -10],
            scale: [1, 0.95],
            opacity: [1, 0.3],
            easing: 'easeOutQuad',
            duration: 400,
            complete: done
        })
    } 
});

</script>

<style lang="sass">
.item-card-wrapper
    width: 300px
    padding: 1rem
    border-radius: 0.2rem
    background: #555
</style>