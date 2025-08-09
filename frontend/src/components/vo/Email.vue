<template>
    <div style="margin: 0 -15px 0 -15px;">
        <v-card-title v-if="inList && email.address && email.subject" style="font-size: 15px;">
            Address: {{email.address }} / Subject: {{email.subject }} / Content: {{email.content }}
        </v-card-title>
        <v-card-text v-if="!inList">
            <div v-if="editMode">
                <v-text-field label="Address" v-model="email.address"/>
            </div>
            <div v-if="editMode" style="margin-top: 5px;">
                <v-text-field label="Subject" v-model="email.subject"/>
            </div>
            <div v-if="editMode" style="margin-top: 5px;">
                <v-text-field label="Content" v-model="email.content"/>
            </div>
            
        </v-card-text>
    </div>
</template>

<script>

    export default {
        name:"Email",
        props: {
            editMode: Boolean,
            modelValue : Object,
            label : String,
            inList : Boolean
        },
        data: () => ({
            email:{}
        }),
        created(){
            this.email = this.modelValue
            if(!this.email) {
                this.email = {
                    'address': '',
                    'subject': '',
                    'content': '',
                };
            }
        },
        watch: {
            email(newVal) {
                this.$emit('update:modelValue', newVal);
            },
        },
    }
</script>

<style scoped>
    .address-v-card-title {
        display: contents;
    }
    .address-v-text-field {
        margin-top:5px;
    }
</style>