<template>
    <div class="item-button-wrapper" ref="wrapper">
        <button class="item-button" ref="button">
            <slot></slot>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import anime from 'animejs/lib/anime.es'
import { useTransition } from '@modules/transition';

const wrapper = ref(null);
const button = ref(null);

useTransition({
    in: done => {
        anime({
            targets: wrapper.value,
            height: [0, anime.get(button.value, 'height')],
            easing: 'easeInOutSine',
            duration: 400
        })
        anime({
            targets: button.value,
            translateX: [10, 0],
            opacity: [0, 1],
            easing: 'easeInOutSine',
            duration: 400,
            complete: done
        })
    },
    out: done => {
        anime({
            targets: wrapper.value,
            height: [anime.get(button.value, 'height'), 0],
            easing: 'easeInOutSine',
            delay: 150,
            duration: 300
        })
        anime.set(button.value, {
            position: 'absolute',
        })
        anime({
            targets: button.value,
            translateX: [0, -10],
            opacity: [1, 0],
            easing: 'easeInOutSine',
            duration: 400,
            complete: done
        })
    }
})

</script>

<style lang="sass" scoped>

.item-button-wrapper
    width: 100%
    height: 100%
    position: relative

    .item-button    
        width: 100%
        max-width: 20rem
        padding: 0.5rem 1rem
        margin: 0 auto
        color: #FFF
        border: none
        border-radius: 0.4rem
        background: #2572f7
    
</style>