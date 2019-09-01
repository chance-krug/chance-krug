<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card color="#385F73" dark elevation="10">
                    <v-row>
                        <v-col cols="6">
                            <SkillBar name="Java" icon="mdi-language-java" percentage="85" color="#f89820"></SkillBar>
                        </v-col>
                        <v-col cols="6">
                            <SkillBar name="HTML" icon="mdi-language-html5" percentage="85" color="#e44d26"></SkillBar>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6">
                            <SkillBar name="Spring" icon="mdi-leaf" percentage="80" color="#008542"></SkillBar>
                        </v-col>
                        <v-col cols="6">
                            <SkillBar name="CSS" icon="mdi-language-css3" percentage="80" color="#2965f1"></SkillBar>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <SkillBar name="JavaScript" icon="mdi-language-javascript" percentage="75" color="#f0db4f"></SkillBar>
                        </v-col>
                        <v-col cols="6">
                            <SkillBar name="SQL" icon="mdi-database" percentage="65" color="blue"></SkillBar>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <SkillBar name="Git" icon="mdi-git" percentage="65" color="#f1502f"></SkillBar>
                        </v-col>
                        <v-col cols="6">
                            <SkillBar name="C/C++" icon="mdi-language-cpp" percentage="55" color="#2965f1"></SkillBar>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <SkillBar name="Vue" icon="mdi-vuejs" percentage="50" color="#41b883"></SkillBar>
                        </v-col>
                        <v-col cols="6">
                            <SkillBar name="Swift" icon="mdi-language-swift" percentage="30" color="#e67e22"></SkillBar>
                        </v-col>
                    </v-row>
                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
    import SkillBar from "../components/SkillBar";
    export default {
        name: "Skills",
        components: {SkillBar}
    }
</script>

<style scoped>

</style>