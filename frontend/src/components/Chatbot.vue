<template>
    <div>
        <Date
            label="RequestTime"
            v-model="value.requestTime"
            :editMode="editMode"
        />
        <Comment
            offline
            label="Request"
            v-model="value.request"
            :editMode="editMode"
            @change="change"
        />
        <Comment
            offline
            label="Response"
            v-model="value.response"
            :editMode="editMode"
            @change="change"
        />
        <v-row class="ma-0 pa-0">
            <v-spacer></v-spacer>
            <v-btn width="64px" color="primary" @click="save">
                저장
            </v-btn>
        </v-row>
    </div>
</template>


<script>
import BaseEntity from './base-ui/BaseEntity.vue'

export default {
    name: 'Chatbot',
    mixins:[BaseEntity],
    components:{
    },
    
    data: () => ({
        path: "chatbots",
        value: {
        }
    }),
    created(){
    },
    computed:{
    },
    methods: {
    },
}
</script>
