<template>
    <!-- <teleport to="#app"> -->
        <transition @enter="enter" @leave="leave" appear>
            <div id="popup" v-if="display">
                <div id="popup-overlay" ref="popupOverlay"></div>
                <div id="popup-content" ref="popupContent">
                    <div class="popup-model-container">
                        <div class="popup-model-message">
                            <div class="popup-model-content">
                                <slot></slot>
                            </div>
                        </div>
                        <div class="popup-model-actions">
                            <slot name="actions">
                                <re-button @click="emits('update:display', false)">Close</re-button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    <!-- </teleport> -->
</template>

<script setup>
import anime from 'animejs/lib/anime.es';
import { ref } from 'vue';

const props = defineProps({
    display: {
        type: Boolean,
        default: false,
    }
})

const emits = defineEmits(['update:display']);

const popupOverlay = ref(null)
const popupContent = ref(null)

const enter = (el, done) => {
    const overlay = el.querySelector('#popup-overlay');
    const content = el.querySelector('#popup-content');
    const timeline = anime.timeline();
    timeline
    .add({
        targets: overlay,
        opacity: [0, 1],
        easing: 'linear',
        duration: 400
    })
    .add({
        targets: content,
        translateY: [-50, 0],
        opacity: [0, 1],
        easing: 'easeOutCirc',
        duration: 300,
        complete: done
    }, '-=200')
}

const leave = (el, done) => {
    const overlay = el.querySelector('#popup-overlay');
    const content = el.querySelector('#popup-content');
    const timeline = anime.timeline();
    timeline
    .add({
        targets: content,
        translateY: [0, -50],
        opacity: [1, 0],
        easing: 'easeInCirc',
        duration: 300,
    })
    .add({
        targets: overlay,
        opacity: [1, 0],
        easing: 'linear',
        duration: 400,
        complete: done
    }, '-=150')
}

</script>

<style lang="sass" scoped>

#popup
    width: 100%
    height: 100%
    position: fixed
    top: 0
    left: 0
    z-index: 9999
    display: flex
    justify-content: center
    align-items: flex-end

    @media screen and (min-width: 768px)
        align-items: center

    #popup-overlay
        width: 100%
        height: 100%
        position: absolute
        background: rgba(0,0,0,0.6)
        backdrop-filter: blur(0.5rem)

    #popup-content
        position: relative

        .popup-model-container
            --container-padding: 1rem
            --container-width: calc(100vw - var(--container-padding) * 2)
            --container-height: 100%
            --actions-height: 4rem
            --message-height: calc(var(--vh) * 50)

            @media screen and (min-width: 768px) 
                --container-padding: 0rem
                --container-width: 40rem
                --container-height: 100%
                --message-height: calc(var(--vh) * 45)

            @media screen and (min-height: 620px)
                --message-height: 25rem

        .popup-model-container
            width: var(--container-width) 
            height: var(--container-height)
            margin: var(--container-padding)
            border-radius: var(--brad-m)
            background: #FFF

            .popup-model-message
                width: 100%
                height: 100%
                max-height: var(--message-height)
                padding: 2rem 1.5rem 1rem
                overflow-y: scroll
                -ms-overflow-style: none
                scrollbar-width: none
                
                &::-webkit-scrollbar
                    display: none

                .popup-model-content
                    width: 100%
                    height: 100%

            .popup-model-actions
                width: 100%
                height: var(--actions-height)
                padding: 1rem 1.5rem
                display: flex
                justify-content: flex-end
                align-items: center
                box-shadow: 0px -30px 40px -30px rgba(0,0,0,0.4)

    
</style>