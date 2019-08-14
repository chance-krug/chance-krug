<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-app-bar color="blue-grey darken-1" dark fixed>
                    <v-img src="@/assets/Logo1.png" max-width="40" max-height="60"> </v-img>
                    <v-tabs fixed-tabs background-color="blue-grey darken-1" color="white">
                        <v-tab class="text-capitalize bold" to="/">Home</v-tab>
                        <v-tab class="text-capitalize bold" to="experience">Experience</v-tab>
                        <v-tab class="text-capitalize bold" to="education">Education</v-tab>
                        <v-tab class="text-capitalize bold" to="skills">Skills</v-tab>
                        <v-tab class="text-capitalize bold" to="projects">Projects</v-tab>
                    </v-tabs>
                </v-app-bar>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
</script>

<style scoped>
    .bold{
        font-weight: 900;
        font-size: medium;
    }
</style>