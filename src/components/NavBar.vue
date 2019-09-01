<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-app-bar color="#385F73" dark fixed>
                    <v-tabs background-color="#385F73" color="white" class="hidden-xs-only">
                        <v-tab class="text-capitalize bold" to="/">Home</v-tab>
                        <v-tab class="text-capitalize bold" to="experience">Experience</v-tab>
                        <v-tab class="text-capitalize bold" to="skills">Skills</v-tab>
                        <v-tab class="text-capitalize bold" to="projects">Projects</v-tab>
                    </v-tabs>
                    <v-menu dark>
                        <template v-slot:activator="{ on }">
                            <v-app-bar-nav-icon x-large v-on="on" class="hidden-sm-and-up"></v-app-bar-nav-icon>
                        </template>
                        <v-list color="#385F73">
                            <v-list-item v-for="(menuItem, index) in menuItems" :key="index">
                                <router-link class="menu white--text" :to=menuItem.path>{{ menuItem.title }}</router-link>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-app-bar>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        data: () => ({
            menuItems: [
                {title: "Home", path: "/"},
                {title: "Experience", path: "experience"},
                {title: "Skills", path: "skills"},
                {title: "Projects", path: "projects"},
            ],
            menuColor: "grey darken-3"
        }),
        methods : {
            changePage(path){
                this.$route.router.go(path)
            }
        }
    }
</script>

<style scoped>
    .bold{
        font-weight: 900;
        font-size: medium;
    }
    .menu{
        text-decoration: none;
    }
</style>