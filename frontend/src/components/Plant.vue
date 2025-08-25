<template>
    <div>
        <String
            label="Plant"
            v-model="value.plant"
            :editMode="editMode"
        />
        <Date
            label="FloweringTime"
            v-model="value.floweringTime"
            :editMode="editMode"
        />
        <Polygon
            offline
            label="Location"
            v-model="value.location"
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
    name: 'Plant',
    mixins:[BaseEntity],
    components:{
    },
    
    data: () => ({
        path: "plants",
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
