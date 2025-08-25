<template>
    <div>
        <v-select
            :items="filteredList"
            :item-text="nameField"
            :item-value="idField"
            :label="label"
            return-object
            v-model="selected"
            @change="select"
            solo
        >
        </v-select>
    </div>
</template>

<script>
import BaseRepository from '../repository/BaseRepository';
import axios from 'axios'

import _ from'lodash';

export default {
    name: 'BasePicker',
    components:{},
    props: {
        modelValue: [String, Object, Array, Number, Boolean],
        editMode: Boolean,
        label: String,
        path: String,
        nameField: String,
        idField: String,
        searchApiPath: String,
        searchParameterName: String,
    },
    data: () => ({
        list: [],
        selected: null,
        referenceValue: null,
        repository: null,
        searchKeyword:null,
        value: {}
    }),
    async created() {
        var me = this;
        this.repository = new BaseRepository(axios, this.path)

        if(me.value && typeof me.value == "object" && Object.values(me.value)[0]) {

            var id = me.value[me.idField];
            var tmpValue = await this.repository.findById(id)
            if(tmpValue.data) {
                var val = tmpValue.data
                me.referenceValue = val
            }
        }
        if(this.editMode){
            this.fillSelections()
        }
    },
    computed: {
        filteredList() {
            return this.list.map(item => item[this.nameField]);
        }
    },
    watch:{
        "selected": {
            handler: _.debounce(async function (newVal) {
                if(newVal){
                    var findNameField = this.nameField
                    for(var i = 0; i < this.list.length; i++){
                        if(this.list[i][findNameField] == newVal){
                            this.select(this.list[i])
                        }
                    }
                }
            }, 500
        ),
            immediate: true 
        },
    // "searchKeyword": {
    //     deep: true,
    //     handler: _.debounce (async function(){
    //         var me = this;
    //         var temp = null
    //         let query = {
    //             apiPath: me.searchApiPath,
    //             parameters: {}
    //         };
    //         query.parameters[me.searchParameterName] = me.searchKeyword;
    //         temp = await me.repository.find(query);
    //         me.list = temp;
    //     }, 500),
    // }
    },
    methods: {
        async fillSelections(){
            this.list = await this.repository.find(null);
        },
        select(val) {
            this.referenceValue = val;
            if (val) {
                var uriParts = val._links.self.href.split('/');
                var id = uriParts.pop();
                val[this.idField] = id
                val = Object.assign({}, val)

                this.$emit("update:modelValue", val);
                this.$emit('selected', val)
            } else {
                this.$emit('update:modelValue', null);
                this.$emit('selected', null)
            }
        },
    },
};
</script>
<style>
    .my-combobox div {
        min-height: 24px !important;
    }
</style>