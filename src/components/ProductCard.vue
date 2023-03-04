<script setup>
defineProps({
    cardData: {
        type: Object,
        default: () => ({})
    }
})
</script>
<template>
    <v-card color="primary" height="100%" class="d-flex flex-column justify-space-between">
        <v-card-title>
            {{ cardData.title }}
        </v-card-title>
        <v-card-text>
            <v-img :src="cardData.images[0]" cover height="100%"></v-img>
        </v-card-text>
        <p class="ma-5">{{ cardData.description }}</p>
    </v-card>
</template>