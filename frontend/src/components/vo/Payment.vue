<template>
    <div style="margin: 0 -15px 0 -15px;">
        <v-card-title v-if="inList && payment.paymentType" style="font-size: 15px;">
            PaymentType: {{payment.paymentType }}/Amount: {{payment.amount }}
        </v-card-title>
        <v-card-text v-if="!inList">
            <div v-if="editMode">
                <v-text-field label="PaymentType" v-model="payment.paymentType"/>
            </div>
            
            <div v-if="editMode" style="margin-top:5px;">
                <v-text-field type="number" label="Amount" v-model="payment.amount"/>
            </div>
            
        </v-card-text>
    </div>
</template>

<script>
    export default {
        name:"Payment",
        props: {
            editMode: Boolean,
            modelValue : Object,
            label : String,
            inList : Boolean
        },
        data: () => ({
            payment:{}
        }),
        created(){
            this.payment = this.modelValue
            if(!this.payment) {
                this.payment = {
                    'paymentType': '',
                    'amount': 0,
                };
            }
        },
        watch: {
            payment(newVal) {
                this.$emit('update:modelValue', newVal);
            },
        },
    }
</script>

<style scoped>
</style>