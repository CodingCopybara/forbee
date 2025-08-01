<template>
    <v-container>
        <v-snackbar
            v-model="snackbar.status"
            :timeout="snackbar.timeout"
            :color="snackbar.color"
        >
            
            <v-btn style="margin-left: 80px;" text @click="snackbar.status = false">
                Close
            </v-btn>
        </v-snackbar>
        <div class="panel">
            <div class="gs-bundle-of-buttons" style="max-height:10vh;">
                <v-btn @click="addNewRow" @class="contrast-primary-text" small color="primary">
                    <v-icon small style="margin-left: -5px;">mdi-plus</v-icon>등록
                </v-btn>
                <v-btn :disabled="!selectedRow" style="margin-left: 5px;" @click="openEditDialog()" class="contrast-primary-text" small color="primary">
                    <v-icon small>mdi-pencil</v-icon>수정
                </v-btn>
                <v-btn style="margin-left: 5px;" @click="writePostCommentDialog = true" class="contrast-primary-text" small color="primary" :disabled="!hasRole('USER')">
                    <v-icon small>mdi-minus-circle-outline</v-icon>게시글 댓글 작성
                </v-btn>
                <v-dialog v-model="writePostCommentDialog" width="500">
                    <WritePostComment
                        @closeDialog="writePostCommentDialog = false"
                        @writePostComment="writePostComment"
                    ></WritePostComment>
                </v-dialog>
                <v-btn :disabled="!selectedRow" style="margin-left: 5px;" @click="deletePostCommentDialog = true" class="contrast-primary-text" small color="primary" :disabled="!hasRole('USER')">
                    <v-icon small>mdi-minus-circle-outline</v-icon>게시글 댓글 삭제
                </v-btn>
                <v-dialog v-model="deletePostCommentDialog" width="500">
                    <DeletePostComment
                        @closeDialog="deletePostCommentDialog = false"
                        @deletePostComment="deletePostComment"
                    ></DeletePostComment>
                </v-dialog>
                <v-btn :disabled="!selectedRow" style="margin-left: 5px;" @click="editPostCommentDialog = true" class="contrast-primary-text" small color="primary" >
                    <v-icon small>mdi-minus-circle-outline</v-icon>게시글 댓글 수정
                </v-btn>
                <v-dialog v-model="editPostCommentDialog" width="500">
                    <EditPostComment
                        @closeDialog="editPostCommentDialog = false"
                        @editPostComment="editPostComment"
                    ></EditPostComment>
                </v-dialog>
                <v-btn style="margin-left: 5px;" @click="writeQnACommentDialog = true" class="contrast-primary-text" small color="primary" >
                    <v-icon small>mdi-minus-circle-outline</v-icon>QnA 댓글 작성
                </v-btn>
                <v-dialog v-model="writeQnACommentDialog" width="500">
                    <WriteQnAComment
                        @closeDialog="writeQnACommentDialog = false"
                        @writeQnAComment="writeQnAComment"
                    ></WriteQnAComment>
                </v-dialog>
                <v-btn :disabled="!selectedRow" style="margin-left: 5px;" @click="deleteQnACommentDialog = true" class="contrast-primary-text" small color="primary" >
                    <v-icon small>mdi-minus-circle-outline</v-icon>QnA 댓글 삭제
                </v-btn>
                <v-dialog v-model="deleteQnACommentDialog" width="500">
                    <DeleteQnAComment
                        @closeDialog="deleteQnACommentDialog = false"
                        @deleteQnAComment="deleteQnAComment"
                    ></DeleteQnAComment>
                </v-dialog>
                <v-btn :disabled="!selectedRow" style="margin-left: 5px;" @click="editQnACommentDialog = true" class="contrast-primary-text" small color="primary" >
                    <v-icon small>mdi-minus-circle-outline</v-icon>QnA 댓글 수정
                </v-btn>
                <v-dialog v-model="editQnACommentDialog" width="500">
                    <EditQnAComment
                        @closeDialog="editQnACommentDialog = false"
                        @editQnAComment="editQnAComment"
                    ></EditQnAComment>
                </v-dialog>
                <v-btn style="margin-left: 5px;" @click="writeNotificationCommentDialog = true" class="contrast-primary-text" small color="primary" >
                    <v-icon small>mdi-minus-circle-outline</v-icon>공지 댓글 작성
                </v-btn>
                <v-dialog v-model="writeNotificationCommentDialog" width="500">
                    <WriteNotificationComment
                        @closeDialog="writeNotificationCommentDialog = false"
                        @writeNotificationComment="writeNotificationComment"
                    ></WriteNotificationComment>
                </v-dialog>
                <v-btn :disabled="!selectedRow" style="margin-left: 5px;" @click="deleteNotificationCommentDialog = true" class="contrast-primary-text" small color="primary" >
                    <v-icon small>mdi-minus-circle-outline</v-icon>공지 댓글 삭제
                </v-btn>
                <v-dialog v-model="deleteNotificationCommentDialog" width="500">
                    <DeleteNotificationComment
                        @closeDialog="deleteNotificationCommentDialog = false"
                        @deleteNotificationComment="deleteNotificationComment"
                    ></DeleteNotificationComment>
                </v-dialog>
                <v-btn :disabled="!selectedRow" style="margin-left: 5px;" @click="editNotificationCommentDialog = true" class="contrast-primary-text" small color="primary" >
                    <v-icon small>mdi-minus-circle-outline</v-icon>공지 댓글 수정
                </v-btn>
                <v-dialog v-model="editNotificationCommentDialog" width="500">
                    <EditNotificationComment
                        @closeDialog="editNotificationCommentDialog = false"
                        @editNotificationComment="editNotificationComment"
                    ></EditNotificationComment>
                </v-dialog>
            </div>
            <div class="mb-5 text-lg font-bold"></div>
            <div class="table-responsive">
                <v-table>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>PostId</th>
                        <th>UserId</th>
                        <th>Content</th>
                        <th>CreatedAt</th>
                        <th>UpdatedAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(val, idx) in value" 
                            @click="changeSelectedRow(val)"
                            :key="val"  
                            :style="val === selectedRow ? 'background-color: rgb(var(--v-theme-primary), 0.2) !important;':''"
                        >
                            <td class="font-semibold">{{ idx + 1 }}</td>
                            <td class="whitespace-nowrap" label="PostId">{{ val.postId }}</td>
                            <td class="whitespace-nowrap" label="UserId">{{ val.userId }}</td>
                            <td class="whitespace-nowrap" label="Content">{{ val.content }}</td>
                            <td class="whitespace-nowrap" label="CreatedAt">{{ val.createdAt }}</td>
                            <td class="whitespace-nowrap" label="UpdatedAt">{{ val.updatedAt }}</td>
                            <v-row class="ma-0 pa-4 align-center">
                                <v-spacer></v-spacer>
                                <Icon style="cursor: pointer;" icon="mi:delete" @click="deleteRow(val)" />
                            </v-row>
                        </tr>
                    </tbody>
                </v-table>
            </div>
        </div>
        <v-col>
            <v-dialog
                v-model="openDialog"
                transition="dialog-bottom-transition"
                width="35%"
            >
                <v-card>
                    <v-toolbar
                        color="primary"
                        class="elevation-0 pa-4"
                        height="50px"
                    >
                        <div style="color:white; font-size:17px; font-weight:700;">Comment 등록</div>
                        <v-spacer></v-spacer>
                        <v-icon
                            color="white"
                            small
                            @click="closeDialog()"
                        >mdi-close</v-icon>
                    </v-toolbar>
                    <v-card-text>
                        <Comment :offline="offline"
                            :isNew="!value.idx"
                            :editMode="true"
                            :inList="false"
                            v-model="newValue"
                            @add="append"
                        />
                    </v-card-text>
                </v-card>
            </v-dialog>
            <v-dialog
                v-model="editDialog"
                transition="dialog-bottom-transition"
                width="35%"
            >
                <v-card>
                    <v-toolbar
                        color="primary"
                        class="elevation-0 pa-4"
                        height="50px"
                    >
                        <div style="color:white; font-size:17px; font-weight:700;">Comment 수정</div>
                        <v-spacer></v-spacer>
                        <v-icon
                            color="white"
                            small
                            @click="closeDialog()"
                        >mdi-close</v-icon>
                    </v-toolbar>
                    <v-card-text>
                        <div>
                            <Number label="PostId" v-model="selectedRow.postId" :editMode="true"/>
                            <Number label="UserId" v-model="selectedRow.userId" :editMode="true"/>
                            <String label="Content" v-model="selectedRow.content" :editMode="true"/>
                            <Date label="CreatedAt" v-model="selectedRow.createdAt" :editMode="true"/>
                            <Date label="UpdatedAt" v-model="selectedRow.updatedAt" :editMode="true"/>
                            <v-divider class="border-opacity-100 my-divider"></v-divider>
                            <v-layout row justify-end>
                                <v-btn
                                    width="64px"
                                    color="primary"
                                    @click="save"
                                >
                                    수정
                                </v-btn>
                            </v-layout>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-col>
    </v-container>
</template>

<script>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import BaseGrid from '../base-ui/BaseGrid.vue'


export default {
    name: 'commentGrid',
    mixins:[BaseGrid],
    components:{
    },
    data: () => ({
        path: 'comments',
        writePostCommentDialog: false,
        deletePostCommentDialog: false,
        editPostCommentDialog: false,
        writeQnACommentDialog: false,
        deleteQnACommentDialog: false,
        editQnACommentDialog: false,
        writeNotificationCommentDialog: false,
        deleteNotificationCommentDialog: false,
        editNotificationCommentDialog: false,
    }),
    watch: {
    },
    methods:{
        async writePostComment(params){
            try{
                var path = "writePostComment".toLowerCase();
                var temp = await this.repository.invoke(this.selectedRow, path, params)
                // 스넥바 관련 수정 필요
                // this.$EventBus.$emit('show-success','writePostComment 성공적으로 처리되었습니다.')
                for(var i = 0; i< this.value.length; i++){
                    if(this.value[i] == this.selectedRow){
                        this.value[i] = temp.data
                    }
                }
                this.writePostCommentDialog = false
            }catch(e){
                console.log(e)
            }
        },
        async deletePostComment(params){
            try{
                var path = "deletePostComment".toLowerCase();
                var temp = await this.repository.invoke(this.selectedRow, path, params)
                // 스넥바 관련 수정 필요
                // this.$EventBus.$emit('show-success','deletePostComment 성공적으로 처리되었습니다.')
                for(var i = 0; i< this.value.length; i++){
                    if(this.value[i] == this.selectedRow){
                        this.value[i] = temp.data
                    }
                }
                this.deletePostCommentDialog = false
            }catch(e){
                console.log(e)
            }
        },
        async editPostComment(params){
            try{
                var path = "editPostComment".toLowerCase();
                var temp = await this.repository.invoke(this.selectedRow, path, params)
                // 스넥바 관련 수정 필요
                // this.$EventBus.$emit('show-success','editPostComment 성공적으로 처리되었습니다.')
                for(var i = 0; i< this.value.length; i++){
                    if(this.value[i] == this.selectedRow){
                        this.value[i] = temp.data
                    }
                }
                this.editPostCommentDialog = false
            }catch(e){
                console.log(e)
            }
        },
        async writeQnAComment(params){
            try{
                var path = "writeQnAComment".toLowerCase();
                var temp = await this.repository.invoke(this.selectedRow, path, params)
                // 스넥바 관련 수정 필요
                // this.$EventBus.$emit('show-success','writeQnAComment 성공적으로 처리되었습니다.')
                for(var i = 0; i< this.value.length; i++){
                    if(this.value[i] == this.selectedRow){
                        this.value[i] = temp.data
                    }
                }
                this.writeQnACommentDialog = false
            }catch(e){
                console.log(e)
            }
        },
        async deleteQnAComment(params){
            try{
                var path = "deleteQnAComment".toLowerCase();
                var temp = await this.repository.invoke(this.selectedRow, path, params)
                // 스넥바 관련 수정 필요
                // this.$EventBus.$emit('show-success','deleteQnAComment 성공적으로 처리되었습니다.')
                for(var i = 0; i< this.value.length; i++){
                    if(this.value[i] == this.selectedRow){
                        this.value[i] = temp.data
                    }
                }
                this.deleteQnACommentDialog = false
            }catch(e){
                console.log(e)
            }
        },
        async editQnAComment(params){
            try{
                var path = "editQnAComment".toLowerCase();
                var temp = await this.repository.invoke(this.selectedRow, path, params)
                // 스넥바 관련 수정 필요
                // this.$EventBus.$emit('show-success','editQnAComment 성공적으로 처리되었습니다.')
                for(var i = 0; i< this.value.length; i++){
                    if(this.value[i] == this.selectedRow){
                        this.value[i] = temp.data
                    }
                }
                this.editQnACommentDialog = false
            }catch(e){
                console.log(e)
            }
        },
        async writeNotificationComment(params){
            try{
                var path = "writeNotificationComment".toLowerCase();
                var temp = await this.repository.invoke(this.selectedRow, path, params)
                // 스넥바 관련 수정 필요
                // this.$EventBus.$emit('show-success','writeNotificationComment 성공적으로 처리되었습니다.')
                for(var i = 0; i< this.value.length; i++){
                    if(this.value[i] == this.selectedRow){
                        this.value[i] = temp.data
                    }
                }
                this.writeNotificationCommentDialog = false
            }catch(e){
                console.log(e)
            }
        },
        async deleteNotificationComment(params){
            try{
                var path = "deleteNotificationComment".toLowerCase();
                var temp = await this.repository.invoke(this.selectedRow, path, params)
                // 스넥바 관련 수정 필요
                // this.$EventBus.$emit('show-success','deleteNotificationComment 성공적으로 처리되었습니다.')
                for(var i = 0; i< this.value.length; i++){
                    if(this.value[i] == this.selectedRow){
                        this.value[i] = temp.data
                    }
                }
                this.deleteNotificationCommentDialog = false
            }catch(e){
                console.log(e)
            }
        },
        async editNotificationComment(params){
            try{
                var path = "editNotificationComment".toLowerCase();
                var temp = await this.repository.invoke(this.selectedRow, path, params)
                // 스넥바 관련 수정 필요
                // this.$EventBus.$emit('show-success','editNotificationComment 성공적으로 처리되었습니다.')
                for(var i = 0; i< this.value.length; i++){
                    if(this.value[i] == this.selectedRow){
                        this.value[i] = temp.data
                    }
                }
                this.editNotificationCommentDialog = false
            }catch(e){
                console.log(e)
            }
        },
    }
}

</script>