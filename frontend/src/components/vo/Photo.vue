<template>
    <div style="margin: 0 -15px 0 -15px;">
        <v-card-title v-if="inList && photo.imgName" style="font-size: 15px;">
            imageName: {{ photo.imgName }}
        </v-card-title>

        <v-img v-if="!inList"
            style="width:200px; height:200px; border-radius:10px; position:relative; margin-left:5px; top:5px;"
            :style="editMode ? 'cursor:pointer;':''"
            :src="photo.imgFile ? photo.imgFile:'https://github.com/kibum0405/topping-wijmo/assets/123912988/7dccf9a0-2347-4a51-a367-0f885555b090'"
            class="mx-auto"
            @click="selectFile()"
        ></v-img>

        <v-card-text v-if="photh">
            <div v-if="editMode">
                <v-text-field label="Image Name" v-model="photo.imgName"/>
                <slot name="actions"></slot>
            </div>
        </v-card-text>
    </div>
</template>

<script>

    export default {
        name:"Photo",
        props: {
            editMode: Boolean,
            modelValue : Object,
            label : String,
            inList: Boolean,
        },
        data: () => ({
            photo:{}
        }),
        created(){
            this.value = this.modelValue
            if(!this.photo) {
                this.photo = {
                    'imgName': '',
                    'imgFile': '',
                };
            }
        },
        watch: {
            photo(newVal) {
                this.$emit('input', newVal);
            },
        },
        methods: {
            selectFile(){
                if(this.editMode == false) {
                    return false;
                }

                var me = this
                if(!me.photo){
                    me.photo = {}
                }
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
                        // Vue.set(me.photo, 'imgFile', result);
                    };
                    reader.readAsDataURL( file );
                };
            },
        }
    }
</script>

<style scoped>
</style>