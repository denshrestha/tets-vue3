<script setup>
import loginForm from '../components/LoginForm.vue'
</script>
<template>
    <v-card width="100%" max-width="450px" class="rounded-xl">
        <v-card-title class="text-center text-h5 py-4">
            <h1>Login</h1>
        </v-card-title>
        <v-card-text>
            <login-form />
        </v-card-text>
    </v-card>
</template>