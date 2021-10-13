<template>
    <div>
        <h1 ref="title">Home Page</h1>
        <re-button @click="popupState = true">Toggle Popup</re-button>
        <popup-wrapper v-model:display="popupState">
            <h1>Popup</h1>
            <p>Description</p>
            <h1>Popup</h1>
            <p>Description</p>
            <h1>Popup</h1>
            <p>Description</p>
            <h1>Popup</h1>
            <p>Description</p>
            <h1>Popup</h1>
            <p>Description</p>
            <h1>Popup</h1>
            <p>Description</p> 
            <template v-slot:actions>
                <re-button @click="confirmPopupState = true">Are you sure?</re-button>
            </template>
        </popup-wrapper>
        <popup-wrapper v-model:display="confirmPopupState">
            <h1>Are You Sure?</h1>
            <template v-slot:actions>
                <re-button @click="() => { confirmPopupState = false; popupState = false; }">I am sure</re-button>
            </template>
        </popup-wrapper>
    </div>
</template>

<script setup>
import { useTransition } from '@modules/transition';
import { PopupWrapper } from '@modules/popup';
import { ref } from 'vue'
import anime from 'animejs/lib/anime.es'

const popupState = ref(false)
const confirmPopupState = ref(false);

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