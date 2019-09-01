<template>
    <v-container>
        <v-layout>
            <v-flex elevation="0">
                    <div class="left">
                        <v-icon v-bind:color="color" x-large class="pl-3 pr-2 pb-2">{{icon}}</v-icon>
                        <span class="heading white--text">{{name}}</span>
                    </div>
                    <div class="pl-3 pr-3 pb-3">
                        <v-progress-linear rounded v-bind:color="color" height="10" v-bind:value="percentage" striped></v-progress-linear>
                    </div>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "SkillBar",
        props: {
            name: String,
            icon: String,
            percentage: Number,
            color: String
        }
    }
</script>

<style scoped>
    .heading{
        font-weight: bold;
        font-size: x-large;
    }
    .left{
        float: left;

    }

</style>