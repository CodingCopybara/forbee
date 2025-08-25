<template>
    <div style="margin: 0 -15px 0 -15px;">
        <v-card-title v-if="inList && money.amount && money.currency" style="font-size: 15px;">
            {{money.amount}} {{money.currency}} 
        </v-card-title>
        <v-card-text v-if="!inList">
            <div v-if="editMode">
                <v-text-field type="number" label="Amount" v-model="money.amount"/>
            </div>
            <div v-if="editMode" style="margin-top: 5px;">
                <v-text-field label="Currency" v-model="money.currency"/>
            </div>
            <!-- <div v-else>
                <v-card
                    class="mx-auto"
                    color="orange"
                    dark
                    min-width="200"
                    max-width="400"
                    style="padding:10px 15px 10px 15px; font-weight:500; font-size:20px; text-align:center;"> 
                    {{money.amount}} {{money.currency}} 
                </v-card>
            </div> -->
        </v-card-text>
    </div>
</template>

<script>
    export default {
        name:"Money",
        props: {
            editMode: Boolean,
            modelValue : Object,
            label : String,
            inList : Boolean
        },
        data: () => ({
            money:{}
        }),
        created(){
            this.money = this.modelValue
            if(!this.money) {
                this.money = {
                    'amount': 0,
                    'currency': '',
                };
            }

            this.money.amount = this.money.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        watch: {
            money(newVal) {
                this.$emit('update:modelValue', newVal);
            },
        },
    }
</script>

<style scoped>
</style>