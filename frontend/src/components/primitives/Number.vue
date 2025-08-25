<template>
    <div>
        <div v-if="editMode">
            <div class="label-title">{{label}}</div>
            <v-text-field
                v-bind="$attrs"
                type="number"
                label="숫자를 입력하세요."
                v-model="value"
                @change="change"
            />
        </div>
        <div v-else>
            {{value}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Number',
        props: {
            modelValue:{
                type: Number,
                default: 0
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
                this.$emit("update:modelValue", Number(this.value));
            }
        }
    }
</script>