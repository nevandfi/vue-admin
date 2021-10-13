<template>
    <div class="nav-block-container" ref="container">
        <div class="logo-container">
            <div class="logo-section">
                <img src="@assets/logo.png" alt="">
            </div>
        </div>
        <div class="content-container">
            <div class="user-section">
                <div class="user-container" ref="userContainer">
                    <div class="user-image">
                        <img src="@assets/user.jpg" alt="User Profile Image">
                    </div>
                    <div class="user-content">
                        <span class="content-greet">Welcome,</span><br>
                        <span class="content-name">Xiao Li Jue</span>
                    </div>
                </div>
            </div>
            <nav class="routes-section">
                <nav class="route-url-container" ref="routeContainer">
                    <nav-menu :icon="DashboardIcon" :to="{ name: 'DashboardHome' }">Dashboard</nav-menu>
                    <nav-menu :icon="DashbookIcon" :to="{ name: 'DashboardAbout' }">About</nav-menu>
                    <nav-menu :icon="TeamIcon" :to="{ name: 'EnterLogin' }">Login</nav-menu>
                </nav>
            </nav>
        </div>
        <div class="additional-container">
            <div class="help-url-section">
                <nav class="help-url-container" ref="helpContainer">
                    <nav-menu href="https://www.google.com" :icon="QuestionBookIcon">Documentation</nav-menu>
                    <nav-menu href="https://www.google.com" :icon="SupportIcon">Support</nav-menu>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
import DashboardIcon from '~icons/ic/round-space-dashboard'
import DashbookIcon from '~icons/dashicons/book'
import TeamIcon from '~icons/fluent/people-team-28-filled'
import QuestionBookIcon from '~icons/fluent/book-question-mark-24-filled'
import SupportIcon from '~icons/ic/twotone-support-agent'

import { useTransition } from '@modules/transition';
import { ref } from 'vue';
import anime from 'animejs/lib/anime.es'

const container = ref(null);
const userContainer = ref(null);
const routeContainer = ref(null);
const helpContainer = ref(null);

useTransition({
    in: done => {
        const timeline = anime.timeline({ easing: 'easeOutCirc' });
        timeline
        .add({
            targets: container.value.children,
            opacity: [0, 1],
            translateX: [-50, 0],
            duration: 400,
            delay: anime.stagger(50),
            easing: 'easeOutBack',
        })
        .add({
            targets: [userContainer.value, ...routeContainer.value.children, ...helpContainer.value.children],
            opacity: [0, 1],
            translateY: [-50, 0],
            duration: 300,
            delay: anime.stagger(50),
            complete: done
        }, '-=200')
    },
    out: done => {
        anime({
            targets: container.value.children,
            opacity: [1, 0],
            translateX: [0, -50],
            duration: 400,
            delay: anime.stagger(50, { from: 'last' }),
            easing: 'easeOutExpo',
            complete: done
        })
    }
})

</script>

<style lang="sass" scoped>

.nav-block-container
    --edge-float-padding: 1rem
    --logo-container-height: 4rem
    --content-container-height: 100%
    --additional-container-height: auto
    --container-padding-y: 1rem

    width: 100%
    height: 100%
    padding: var(--edge-float-padding)
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center

    & > *
        width: 100%
        border-radius: var(--brad-m)
        box-shadow: var(--bxsh-float)

    .logo-container
        height: var(--logo-container-height)
        color: var(--cl-f-white)
        background: var(--cl-white)

        .logo-section
            width: 100%
            height: 100%
            padding: 0.5rem
            display: flex
            justify-content: center
            align-items: center

            img
                display: block
                max-width: 100%
                height: 100%
                object-fit: contain
                object-position: center

    .content-container
        height: var(--content-container-height)
        margin: var(--edge-float-padding) 0
        padding: var(--container-padding-y) 0
        color: var(--cl-f-main)
        background: var(--cl-main)
        overflow-y: scroll
        -ms-overflow-style: none
        scrollbar-width: none
        
        &::-webkit-scrollbar
            display: none

        & > *
            width: 100%

        .user-section

            .user-container
                --profile-dimension: 2.5rem
                --content-width: calc(100% - var(--profile-dimension) - 1rem)

                width: 100%
                padding: 0rem 1rem 1rem
                display: flex
                justify-content: space-between
                align-items: center

                .user-image
                    width: var(--profile-dimension)
                    height: var(--profile-dimension)
                    border-radius: 10000rem
                    overflow: hidden

                    img
                        display: block
                        width: 100%
                        height: 100%
                        object-fit: cover
                        object-position: center

                .user-content
                    width: var(--content-width)

                    .content-greet
                        font-size: 0.8rem

                    .content-name
                        font-size: 1rem
                        font-weight: 700

        .routes-section
                    
    .additional-container 
        height: var(--additional-container-height)
        padding: var(--container-padding-y) 0
        color: var(--cl-f-contrast)
        background: var(--cl-contrast)

</style>
