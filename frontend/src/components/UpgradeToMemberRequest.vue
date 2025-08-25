<template>

    <v-card outlined>
        <v-card-title>
            UpgradeToMemberRequest
        </v-card-title>

        <v-card-text>
            <String label="UserId" v-model="value.userId" :editMode="editMode"/>
            <String label="RegistrationCertificateImage" v-model="value.registrationCertificateImage" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="upgradeToMemberRequest"
            >
                UpgradeToMemberRequest
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
    name: 'UpgradeToMemberRequestCommand',
    components:{
    },
    props: {},
    data: () => ({
        editMode: true,
        value: {},
    }),
    created() {
        this.value.userId = '';
        this.value.registrationCertificateImage = '';
    },
    watch: {
    },
    methods: {
        upgradeToMemberRequest() {
            this.$emit('upgradeToMemberRequest', this.value);
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

