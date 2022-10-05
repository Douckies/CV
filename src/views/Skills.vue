<template>
    <v-main>
        <div class="menu_skills">
            <div class="menu_skill_expend" v-for="skill in skills" :key="skill.id" @click="openSkill(skill.id)">
                <span>{{skill.skillName}}</span>
                <v-icon v-if="skill.expended" medium>mdi-chevron-left</v-icon>
                <v-icon v-else medium>mdi-chevron-down</v-icon>
            </div>
        </div>

        <div v-for="skill in skills" :key="skill.id">
            <div v-if="skill.expended">
                <div v-for="(e, n) in skill.skillList.length" :key="skill.skillList[n]">
                    <div class="skill_card">
                        <span class="display_skill">{{skill.skillList[n]}}</span>
                        <span class="display_knowledge">{{skill.skillKnowledge[n]}}%</span>
                        <v-progress-linear color="#F2E3C1" :value="skill.skillKnowledge[n]"></v-progress-linear>
                    </div>
                </div>
            </div>
        </div>

    </v-main>
</template>

<script>

export default {
    data() {
        return {
            skills: [
                {
                    id: 0, expended: false, skillName: "Security", skillList: ["Checkpoint", "Palo Alto", "Juniper", "Cisco", "ALGOSEC"], skillKnowledge: [85, 85, 60, 80, 60]
                },
                {
                    id: 1, expended: false, skillName: "Network", skillList: ["IP", "VRF", "OSPF", "VPN"], skillKnowledge: [90, 90, 80, 80]
                },
                {
                    id: 2, expended: false, skillName: "Development", skillList: ["HTML", "CSS", "JavaScript", "VueJS (VueRouter/VueX/Vuetify)", "React", "Tailwind", "Symfony"], skillKnowledge: [70, 60, 50, 50, 40, 60, 30]
                },
                {
                    id: 3, expended: false, skillName: "Other", skillList: ["Pack Office", "French", "English", "Portuguese"], skillKnowledge: [80, 100, 100, 50]
                }
            ],

            skillToDisplay: []
        }
    },

    methods: {
        openSkill(skillIDToOpen) {
            for (let i = 0; i < this.skills.length; i++) {
                if (this.skills[i].expended == true) {
                    this.skills[i].expended = false
                }
            }

            this.skills[skillIDToOpen].expended = true
            this.skillToDisplay = this.skills[skillIDToOpen].skillList
        }
    }
}
</script>

<style>
.menu_skills {
    display: flex;
    justify-content: center;
}

.menu_skill_expend {
    padding: 0 5% 0 5%;
}

.menu_skill_expend:hover {
    cursor: pointer;
}

.skill_card {
    text-align: center;
    width: 25%;
    margin: 0 auto;
    padding: 1%;
}

.display_skill {
    display: block;
    float: left;
}

.display_knowledge {
    display: block;
    float: right;
    color: gray;
    opacity: 80%;
}
</style>

