<template>

    <v-card outlined>
        <v-card-title>
            RequestDeny
        </v-card-title>

        <v-card-text>
            <Number label="Id" v-model="value.id" :editMode="editMode"/>
            <String label="UserId" v-model="value.userId" :editMode="editMode"/>
            <String label="State" v-model="value.state" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="requestDeny"
            >
                RequestDeny
            </v-btn>
            
            <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="close"
            >
                Close
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>

export default {
    name: 'RequestDenyCommand',
    components:{
    },
    props: {},
    data: () => ({
        editMode: true,
        value: {},
    }),
    created() {
        this.value.id = 0;
        this.value.userId = '';
        this.value.state = '';
    },
    watch: {
    },
    methods: {
        requestDeny() {
            this.$emit('requestDeny', this.value);
        },
        close() {
            this.$emit('closeDialog');
        },
        change() {
            this.$emit("update:modelValue", this.value);
        },
    }
}
</script>

