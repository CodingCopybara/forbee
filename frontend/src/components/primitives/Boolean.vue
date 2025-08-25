<template>
    <div>
        <div v-if="editMode" style="margin-top:5px;">
            <div class="label-title">{{label}}</div>
            <v-switch
                v-bind="$attrs"
                v-model="value"
                hide-details
                inset
                @change="change"
                label="입력하세요."
            >
            </v-switch>
        </div>
        <div v-else>
            {{label}} :  {{value}}
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Boolean',
        components:{
        },
        props: {
            modelValue:{
                type: Boolean,
                default: false
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
                this.$emit("update:modelValue", this.value);
            }
        }
    }
</script>