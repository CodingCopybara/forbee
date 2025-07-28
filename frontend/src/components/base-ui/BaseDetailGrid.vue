<template>
    <div></div>
</template>
 
 <script>
import BaseGrid from './BaseGrid.vue';
 
export default {
    name: 'BaseDetailGrid',
    mixins:[BaseGrid],
    props: {
    },
    data: () =>({
    }),
    async created() {
        if (!this.value) {
            this.value = [];
        }
    },
    watch:{
    value:{
        handler: function(newVal){
            if(newVal){
                this.$emit("update:modelValue", newVal)
            }
        }
    }
    },
    methods: {
        addDetailRow() {
            if (!this.newValue) {
                this.newValue = [];
            }
            var newDetailRow = {}
            this.newValue.push(newDetailRow);
            this.$emit("update:modelValue", this.newValue);
        },
        deleteDetailRow() {
            const flexGridDetails = this.$refs.flexGridDetails;
            const view = flexGridDetails.collectionView;
            const selectedIndex = view.currentPosition;

            if (selectedIndex !== -1) {
                view.remove(view.currentItem);
                this.$emit('input', view.sourceCollection);
            }
        }
    }
};
     
 </script>
 
 