<script setup>
import { ref, onErrorCaptured } from 'vue'

const err = ref('')

onErrorCaptured(() => {
    console.error('Error!')
    err.value = 'ERROR!'
})
</script>
<template>
    <v-layout>
        <v-app-bar app>
            <v-app-bar-title>Awesome Website name</v-app-bar-title>
        </v-app-bar>
        <v-main app>
            <v-container>
                <div v-if="err"> {{ err }} </div>
                <Suspense>
                    <template #default>
                        <slot></slot>
                    </template>
                    <template #fallback>
                        <span>LOADING...</span>
                    </template>
                </Suspense>
            </v-container>
        </v-main>
    </v-layout>
</template>