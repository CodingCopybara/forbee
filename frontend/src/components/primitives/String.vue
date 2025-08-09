--<template>
    <div>
        <div v-if="editMode">
            <div class="label-title" style="margin-left: 5px;">{{label}}</div>
            <v-text-field 
                v-bind="$attrs"
                v-model="value"
                @change="change"
                label="입력하세요."
                outlined
                single-line
            />
        </div>
        <div v-else>
            {{label}} : {{value}}
        </div>
    </div>
</template>
<script>  
    export default {
        name: 'String',
        components:{
        },
        props: {
            modelValue:{
                type: String,
                default: null /// TODO '' is not null !
            },
            editMode: Boolean,
            label: String,
        },
        data: () => ({
            value: null,
        }),
        created(){
            this.value = this.modelValue
        },
        methods:{
            change(){
                if(this.modelValue===null) this.value = null  //TODO '' is not null
                this.$emit("update:modelValue", this.value);
            }
        }
    }
</script>
<style>
</style>