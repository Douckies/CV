<template>
    <v-main>
        <div class="displayExperience">
            <div>
                <div v-if="job">
                    <span>{{job.dateStart}}</span> -
                    <span>{{job.dateEnd}}</span> |
                    <span><a :href="job.link" target="_blank" rel="noopener noreferrer">{{job.compagnie}}</a></span>,
                    <span>{{job.place}}</span>
                    <br />
                    <span>{{job.title}}</span>

                    <p>Presentation : </p>
                    <div>{{job.presentation}}</div>

                    <p>Missions : </p>
                    <ul v-for="(e, n) in job.mission.length" :key="job.mission[n]">
                        <ul>{{job.mission[n]}}</ul>
                    </ul>
                    <div v-if="job.tasks">
                        <p>Tasks : </p>
                        <ul v-for="(e, m) in job.tasks.length" :key="job.tasks[m]">
                            <ul>{{job.tasks[m]}}</ul>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    </v-main>
</template>

<script>
export default {

    props: {
        job: {
            type: Object,
        }
    }

}
</script>

<style>
.displayExperience {
    width: 80%;
    margin: auto;
}

.displayExperience span {
    font-weight: bolder;
}

.displayExperience p {
    margin-top: 2%;
    text-decoration: underline
}

ul {
    padding: 2px
}

a:link {
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>