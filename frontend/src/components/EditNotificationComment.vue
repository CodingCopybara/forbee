<template>

    <v-card outlined>
        <v-card-title>
            EditNotificationComment
        </v-card-title>

        <v-card-text>
            <Number label="Id" v-model="value.id" :editMode="editMode"/>
            <Number label="PostId" v-model="value.postId" :editMode="editMode"/>
            <Number label="UserId" v-model="value.userId" :editMode="editMode"/>
            <String label="Content" v-model="value.content" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="editNotificationComment"
            >
                EditNotificationComment
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
    name: 'EditNotificationCommentCommand',
    components:{
    },
    props: {},
    data: () => ({
        editMode: true,
        value: {},
    }),
    created() {
        this.value.id = 0;
        this.value.postId = 0;
        this.value.userId = 0;
        this.value.content = '';
    },
    watch: {
    },
    methods: {
        editNotificationComment() {
            this.$emit('editNotificationComment', this.value);
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

