<template>
    <v-main>
        <div class="timeline_organizer">
            <div v-for="jobArray in jobs" :key="jobArray.id">
                <div class=" timeline_timestamp">
                    <span class="date">{{jobArray.dateStart}} - {{jobArray.dateEnd}}</span>
                </div>
                <div class="timeline_name" @click="displayExperience(jobArray)">
                    <span>{{jobArray.name}}</span>
                </div>
            </div>
        </div>
        <displayExperience style="text-align: center" :job=this.chosenJob />
    </v-main>
</template>

<script>
import displayExperience from '@/components/displayExperience.vue'

export default {
    components: {
        displayExperience,
    },

    mounted() {
        this.chosenJob = this.jobs[0]
    },

    data() {
        return {
            chosenJob: null,
            jobs: [
                { id: 0, name: "Formation", dateStart: "Sept 2013", dateEnd: "Oct 2018", place: "Limoges", compagnie: "Institut d'Ingénieur en Informatique du Limousin", link: "https://www.3il-ingenieurs.fr/", title: "Engineering degree student", presentation: "Engineering school", mission: ["2013 - 2018 | Engineering degree - 3IL and apprenticeship in Airbus D&S.", "Sept 2017 - Jan 2018 | Erasmus at University of Pisa."] },
                {
                    id: 1, name: "Airbus", dateStart: "Sept 2015", dateEnd: "Oct 2018", place: "Toulouse", compagnie: "Airbus Defence and Space", link: "https://securecommunications.airbus.com/", title: "Security and network apprentice", presentation: "Airbus Defence and Space is one of the world leader in spatial technologies, selling sattelites or spacial communications technologies. I was lucky enough to integrate one of their networking team for a three years internship, working on providing this kind of communication solution for our different clients.", mission: ["Participation to the development of an entire new communication solution.", "Organisation of a physical datacenter migration.", "Maintenance of actual network infrastructure."], tasks: ["Definition of new network and security architectures.", "Configuration of new equipments or modification of already existing configurations.", "Redaction of technical documentations.", "Communication with internationnal clients."]
                },
                { id: 2, name: "Néo-Soft", dateStart: "April 2019", dateEnd: "Oct 2020", place: "Toulouse", compagnie: "Néo-Soft", link: "https://www.neo-soft.fr/", title: "Security and network Engineer | Mission for La Banque Postale", presentation: "Néo-Soft is a French consultancy companie, with agencies all over our country.", mission: ["Migration of the entire network infrastructure to a new one, answering the new PCIDSS security regulations.", "Migration of users applications between the two network infrastructures.", "Maintenance of the actual infrastructure."], tasks: ["Review of the proposed architecture with the architect team.", "Installation and configuration of every network equipment for the new network platform.", "Realisation of needed test.", "Redaction of every documentation - user documentation, technical documentation, installation process etc..."] },
                { id: 3, name: "Extia", dateStart: "July 2021", dateEnd: "Now", place: "Lisbon", compagnie: "Extia", link: "https://www.extia-group.com/fr-fr", title: "Security and network Engineer | Mission for AXA", presentation: "Extia is another consultancy agencie, mainly present in France but also in some European countries such as Portugal, where I am now based.", mission: ["Maintenance of the network and security platform for AXA world.", "Set up of required clients needs of AXA World network"], tasks: ["Configuration of clients' needs on the AXA network and security infrastructure's equipments", "Resolution of incidents.", "Management of client requests."] }
            ],
        }
    },

    methods: {
        displayExperience(jobParameter) {
            this.chosenJob = jobParameter
        },
    }
}
</script>

<style>
.timeline_organizer {
    list-style-type: none;
    display: flex;
    justify-content: center;
    margin: 2% 0 4% 0;
}

.timeline_timestamp {
    width: 200px;
    margin-bottom: 20px;
    padding: 0px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 100;
}

.timeline_name {
    padding: 0px 40px;
    display: flex;
    justify-content: center;
    border-top: 4px solid #F2E3C1;
    position: relative;
    cursor: pointer;
}

.timeline_name:hover {
    color: #979797;
    cursor: pointer;
    transition-duration: 0.7s;
}

.timeline_name span {
    font-weight: 600;
    padding-top: 20px;
}

.timeline_name span:before {
    content: '';
    width: 25px;
    height: 25px;
    background-color: #EBEBEB;
    border-radius: 25px;
    border: 4px solid #F2E3C1;
    position: absolute;
    top: -15px;
    left: 42%;
}
</style>