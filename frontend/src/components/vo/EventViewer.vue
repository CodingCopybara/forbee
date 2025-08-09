<template>
    <v-expansion-panels>
    <v-expansion-panel @click="load">
    
      <v-expansion-panel-header>
        Events
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        
        <v-data-table v-if="events.length > 0"
            :headers="headers"
            :items="events"
            :items-per-page="5"
            class="elevation-1"
        ></v-data-table>
      </v-expansion-panel-content>
    </v-expansion-panel>
    </v-expansion-panels>

</template>

<script>
    const axios = require('axios').default;

    export default {
        name:"EventViewer",
        props: {        
            src : String,
        },
        data: () => ({
            events: [],
            headers: [
                {text: "Type", value: "payloadTypeSimple"},
                {text: "Payload", value: "payloadContent"},
//                {text: "Id", value: "identifier"},
                {text: "Timestamp", value: "timestamp"}
            ]
        }),
        created(){
            //this.load();
        },
        methods:{

            async load(){
                var result = await axios.get(axios.fixUrl(this.src));
                this.events = result.data._embedded.genericDomainEventMessageList
              
                this.events.forEach(event => {
                    event.payloadContent = JSON.stringify(event.payload);
                    event.payloadTypeSimple = event.payloadType.split(".").pop();
                })
            }

        }
    }
</script>

<style scoped>
</style>