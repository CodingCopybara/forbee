<template>
</template>

<script>
import BaseEntity from './BaseEntity.vue';
import BaseSecurity from './BaseSecurity.vue';

export default {
    name: 'BaseGrid',
    data: () => ({
        tick : true,
        path: 'path',
        repository: null,
        menu: [],
    }),
    mixins:[
        BaseEntity,
        BaseSecurity
    ],
    async created(){
        this.value = this.search()
    }, 
    methods:{
        addNewRow() {
            this.newValue = null
            this.openDialog = true;
        },
        append() {
            this.tick = false;
            this.openDialog = false
            
            if (!this.value) {
                this.value = [];
            }
            const newItem = { ...this.newValue};

            this.value.push(newItem);
            this.$emit('update:modelValue', this.value);
            this.$nextTick(() => {
                this.tick = true;
            });
        },
        remove(value){
            var where = -1;
            for(var i=0; i<this.value.length; i++){
                if(this.value[i]._links.self.href == value._links.self.href){
                    where = i;
                    break;
                }
            }
            if(where > -1){
                this.value.splice(i, 1);
                this.$emit('input', this.value);
            }
        },
        async search(query) {
            var me = this;
            if(me.offline){
                if(!me.value) me.value = [];
                return;
            } 
            var temp = null;

            if(!me.offline){
                temp = await this.repository.find(query)
                this.value = temp
            }

            return this.value;
        },
        findId(val){
            let id = val._links.self.href.split('/');
            return id.pop()
        },
        changeSelectedRow(val){
            this.selectedRow = val
        },
        openEditDialog(){
            this.editDialog = true;
        },
        closeDialog(){
            this.openDialog = false
            this.editDialog = false
        }
    },
}
</script>

<style>
</style>