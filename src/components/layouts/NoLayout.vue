<template>
    <router-view v-slot="{ Component }">
        <super-transition>
            <component :is="Component"></component>
        </super-transition>
    </router-view>
</template>

<script setup>
import { SuperTransition } from '@modules/transition';
</script>