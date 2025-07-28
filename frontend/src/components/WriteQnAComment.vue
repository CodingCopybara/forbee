<template>

    <v-card outlined>
        <v-card-title>
            WriteQnAComment
        </v-card-title>

        <v-card-text>
            <Number label="PostId" v-model="value.postId" :editMode="editMode"/>
            <Number label="UserId" v-model="value.userId" :editMode="editMode"/>
            <String label="Content" v-model="value.content" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="writeQnAComment"
            >
                WriteQnAComment
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
    name: 'WriteQnACommentCommand',
    components:{
    },
    props: {},
    data: () => ({
        editMode: true,
        value: {},
    }),
    created() {
        this.value.postId = 0;
        this.value.userId = 0;
        this.value.content = '';
    },
    watch: {
    },
    methods: {
        writeQnAComment() {
            this.$emit('writeQnAComment', this.value);
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

