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
            <v-img :src="cardData.images[0]" cover></v-img>
            <div class="mt-5">
                <p class="mb-4"> ${{ cardData.price }} </p>
                <p>{{ cardData.description }}</p>
            </div>
        </v-card-text>
    </v-card>
</template>