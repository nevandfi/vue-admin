<template>
    <div>
        <h1 ref="title">About Page</h1>
        <popup-wrapper v-model:display="popupState">
            <h1>Message from about</h1>
            <p>Description</p>
        </popup-wrapper>
        <re-button @click="popupState = true">Toggle Popup</re-button>
    </div>
</template>

<script setup>
import { useTransition } from '@modules/transition';
import { PopupWrapper } from '@modules/popup';
import { ref } from 'vue'
import anime from 'animejs/lib/anime.es'

const popupState = ref(false)

const title = ref(null);

useTransition({
    in: done => {
        anime({
            targets: title.value,
            translateX: [25, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 200,
            complete: done
        })
    },
    out: done => {
        anime({
            targets: title.value,
            translateX: [0, -25],
            opacity: [1, 0],
            easing: 'easeOutExpo',
            duration: 200,
            complete: done
        })
    }
})

</script>