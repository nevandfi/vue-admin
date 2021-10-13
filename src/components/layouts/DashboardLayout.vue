<template>
    <div class="dashboard-layout-wrapper">
        <header>
            <nav-block></nav-block>
        </header>
        <main>
            <router-view v-slot="{ Component }">
                <super-transition>
                    <component :is="Component"></component>
                </super-transition>
            </router-view>
        </main>
    </div>
</template>

<script setup>
import { SuperTransition } from '@modules/transition';
</script>

<style lang="sass">

.dashboard-layout-wrapper
    --header-width: 15rem
    --content-width: calc(100% - var(--header-width))

    width: 100%
    height: 100%
    display: flex
    align-items: center

    & > *
        height: 100%

    header
        width: var(--header-width)

    main
        width: var(--content-width)

</style>