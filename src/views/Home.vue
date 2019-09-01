<template>
    <v-container>
        <v-layout>
            <v-flex class="white-text">
                <v-avatar size="300px"><v-img src="@/assets/HeadShot.png"></v-img> </v-avatar>
                <h1 style="font-size: 50px">Chance Krug</h1>
                <h2 style="font-size: 25px">Full Stack Developer</h2>
                <v-icon large @click="githubOpen">mdi-github-circle</v-icon>
                <v-icon large @click="linkedinOpen">mdi-linkedin-box</v-icon>
                <v-icon large @click="emailOpen">mdi-email</v-icon>
                <v-icon large @click="resumeOpen">mdi-file-document</v-icon>
                <h4 class="white-text">Welcome to my personal website. Currently under construction. Please come back soon to see the finished version!</h4>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
    export default {
        name: "Home",
        methods:{
            githubOpen: function () {
                window.open("https://github.com/chance-krug", "_blank");
            },
            linkedinOpen: function() {
                window.open("https://www.linkedin.com/in/chance-krug-775921192/", "_blank");
            },
            emailOpen: function(){
                window.location.href = "mailto:chance.krug@gmail.com?";
            },
            resumeOpen: function() {
                window.open("https://docs.google.com/", "_blank");
            }
        }
    }
</script>

<style scoped>

</style>