<template>
    <div class="nav-menu-wrapper">
        <a v-if="href" :href="href" target="_blank" rel="noreferrer">
            <div class="nav-menu-spacing ripple">
                <div class="menu-icon">
                    <component :is="icon"></component>
                </div>
                <div class="menu-text">
                    <slot>Nav Menu</slot>
                </div>
            </div>
        </a>
        <router-link v-else-if="to" :to="to">
            <div class="nav-menu-spacing ripple">
                <div class="menu-icon">
                    <component :is="icon"></component>
                </div>
                <div class="menu-text">
                    <slot>Nav Menu</slot>
                </div>
            </div>
        </router-link>
        <div class="nav-menu-spacing" v-else>
            <div class="menu-icon">
                <component :is="icon"></component>
            </div>
            <div class="menu-text">
                <slot>Nav Menu</slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import DefaultIcon from '~icons/ic/round-space-dashboard'

const props = defineProps({
    icon: {
        default: DefaultIcon,
    },
    to: {
        type: [String, Object]
    },
    href: {
        type: String,
    }
});
</script>

<style lang="sass" scoped>

.nav-menu-wrapper
    --icon-dimensions: 1.25rem

    width: 100%
    height: 100%
    padding: 0.2rem 1rem
    color: inherit
    overflow: hidden
        
    .nav-menu-spacing
        width: 100%
        height: 100%
        padding: 0.4rem 0.8rem
        position: relative
        display: flex
        justify-content: flex-start
        align-items: center

        .menu-icon
            width: var(--icon-dimension)
            height: var(--icon-dimension)
            margin-right: 0.8rem
            display: flex
            justify-content: center
            align-items: center

            svg
                width: 100%

        .menu-text
            font-size: 0.8rem
            font-weight: 500

    
    .router-link-exact-active

        .nav-menu-spacing
            border-radius: var(--brad-s)
            background: var(--cl-main-dark)
            transition: background 0.4s linear
        
</style>