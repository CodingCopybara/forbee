<template>
    <div></div>
</template>

<script>
import BaseRepository from '../repository/BaseRepository'
import axios from 'axios'

export default {
    name: 'BaseEntity',
    props: {
        offline: Boolean,
        modelValue: Object,
        editMode: Boolean,
        isNew: Boolean,
        inList: Boolean,
    },
    data() {
        return {
            newValue: {},
            path: '/path',
            repository: null,
            openDialog : false,
            value: {},
            snackbar: {
                status: false,
                timeout: 5000,
                text: '',
                color: 'info',
            },
            editDialog: false,
            selectedRow: null,
        };
    },
    async created() {
        this.newValue = this.modelValue
        this.repository = new BaseRepository(axios, this.path);
    },
    methods: {
        selectFile() {
            if(this.editMode == false) {
                return false;
            }
            var me = this
            var input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.id = "uploadInput";
            
            input.click();
            input.onchange = function (event) {
                var file = event.target.files[0]
                var reader = new FileReader();

                reader.onload = function () {
                    var result = reader.result;
                    me.imageUrl = result;
                    me.value.photo = result;
                    
                };
                reader.readAsDataURL( file );
            };
        },
        edit() {
            this.$emit("update:editMode", true)
        },
        async save() {
            try {
                var temp = null;
                if(!this.offline) {
                    if(this.isNew){
                        temp = await this.repository.save(this.value, this.isNew)
                        this.value = temp
                    }else{
                        temp = await this.repository.save(this.selectedRow, false)
                    }
                }
                if(this.value!=null) {
                    for(var k in temp.data) this.value[k]=temp.data[k];
                } else {
                    this.value = temp.data;
                }

                this.$emit('update:editMode', false);
                this.$emit('update:modelValue', this.value);

                if (this.isNew) {
                    this.$emit('add', this.value);
                } else {
                    this.closeEditDialog();
                }

            } catch(e) {
                this.error(e)
            }
        },
        async deleteRow(selectedRow) {
            try {
                var temp = null
                if (!this.offline) {
                    temp = await this.repository.delete(selectedRow)
                    this.value = temp
                }

                this.$emit('update:modelValue', this.value);
                this.$emit('delete', this.value);
            } catch(e) {
                this.error(e)
            }
        },
        change() {
            this.$emit("update:modelValue", this.value);
        },
        error(e){
            this.snackbar.status = true
            this.snackbar.color = 'error'
            if(e.response && e.response.data.message) {
                this.snackbar.text = e.response.data.message
            } else {
                this.snackbar.text = e
            }
        },
        success(msg){
            this.snackbar.color= 'info'
            this.snackbar.status = true
            this.snackbar.text = msg

        },
        closeEditDialog(){
            this.editDialog = false
        }
    },
};


</script>