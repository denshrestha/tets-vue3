<template>
    <v-layout>
        <v-app-bar app>
            <v-app-bar-title>Awesome Website name</v-app-bar-title>
        </v-app-bar>
        <v-main app>
            <v-container>
                Content
                <Suspense>
                    <slot></slot>
                </Suspense>
            </v-container>
        </v-main>
    </v-layout>
</template>