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
                <v-btn @click="addNewRow" class="contrast-primary-text" small color="primary">
                    <v-icon small style="margin-left: -5px;">mdi-plus</v-icon>등록
                </v-btn>

                <v-btn
                    style="margin-left: 5px;"
                    @click="openEditDialog()"
                    class="contrast-primary-text"
                    small
                    color="primary"
                    :disabled="!selectedRow"
                >
                    <v-icon small>mdi-pencil</v-icon>수정
                </v-btn>

                <v-btn
                    style="margin-left: 5px;"
                    @click="writePostDialog = true"
                    class="contrast-primary-text"
                    small
                    color="primary"
                    :disabled="!hasRole('USER')"
                >
                    <v-icon small>mdi-minus-circle-outline</v-icon>게시글 작성
                </v-btn>
                <v-dialog v-model="writePostDialog" width="500">
                    <WritePost
                        @closeDialog="writePostDialog = false"
                        @writePost="writePost"
                    />
                </v-dialog>

                <v-btn
                    style="margin-left: 5px;"
                    @click="editPostDialog = true"
                    class="contrast-primary-text"
                    small
                    color="primary"
                    :disabled="!selectedRow || !hasRole('USER')"
                >
                    <v-icon small>mdi-minus-circle-outline</v-icon>게시글 수정
                </v-btn>
                <v-dialog v-model="editPostDialog" width="500">
                    <EditPost
                        @closeDialog="editPostDialog = false"
                        @editPost="editPost"
                    />
                </v-dialog>

                <v-btn
                    style="margin-left: 5px;"
                    @click="deletePostDialog = true"
                    class="contrast-primary-text"
                    small
                    color="primary"
                    :disabled="!selectedRow || !hasRole('USER')"
                >
                    <v-icon small>mdi-minus-circle-outline</v-icon>게시글 삭제
                </v-btn>
                <v-dialog v-model="deletePostDialog" width="500">
                    <DeletePost
                        @closeDialog="deletePostDialog = false"
                        @deletePost="deletePost"
                    />
                </v-dialog>

                <v-btn
                    style="margin-left: 5px;"
                    @click="increaseView"
                    class="contrast-primary-text"
                    small
                    color="primary"
                    :disabled="!selectedRow || !hasRole('SYSTEM')"
                >
                    <v-icon small>mdi-minus-circle-outline</v-icon>조회수 증가
                </v-btn>
            </div>

            <div class="mb-5 text-lg font-bold"></div>

            <div class="table-responsive">
                <v-table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>UserId</th>
                            <th>Category</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>View</th>
                            <th>Image</th>
                            <th>CreatedAt</th>
                            <th>UpdatedAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(val, idx) in value"
                            :key="val"
                            @click="changeSelectedRow(val)"
                            :style="val === selectedRow ? 'background-color: rgb(var(--v-theme-primary), 0.2) !important;' : ''"
                        >
                            <td class="font-semibold">{{ idx + 1 }}</td>
                            <td class="whitespace-nowrap">{{ val.userId }}</td>
                            <td class="whitespace-nowrap">{{ val.category }}</td>
                            <td class="whitespace-nowrap">{{ val.title }}</td>
                            <td class="whitespace-nowrap">{{ val.content }}</td>
                            <td class="whitespace-nowrap">{{ val.view }}</td>
                            <td class="whitespace-nowrap">{{ val.image }}</td>
                            <td class="whitespace-nowrap">{{ val.createdAt }}</td>
                            <td class="whitespace-nowrap">{{ val.updatedAt }}</td>
                            <v-row class="ma-0 pa-4 align-center">
                                <v-spacer></v-spacer>
                                <Icon
                                    style="cursor: pointer;"
                                    icon="mi:delete"
                                    @click="deleteRow(val)"
                                />
                            </v-row>
                        </tr>
                    </tbody>
                </v-table>
            </div>
        </div>

        <v-col>
            <v-dialog v-model="openDialog" transition="dialog-bottom-transition" width="35%">
                <v-card>
                    <v-toolbar color="primary" class="elevation-0 pa-4" height="50px">
                        <div style="color:white; font-size:17px; font-weight:700;">Post 등록</div>
                        <v-spacer></v-spacer>
                        <v-icon color="white" small @click="closeDialog()">mdi-close</v-icon>
                    </v-toolbar>
                    <v-card-text>
                        <Post
                            :offline="offline"
                            :isNew="!value.idx"
                            :editMode="true"
                            :inList="false"
                            v-model="newValue"
                            @add="append"
                        />
                    </v-card-text>
                </v-card>
            </v-dialog>

            <v-dialog v-model="editDialog" transition="dialog-bottom-transition" width="35%">
                <v-card>
                    <v-toolbar color="primary" class="elevation-0 pa-4" height="50px">
                        <div style="color:white; font-size:17px; font-weight:700;">Post 수정</div>
                        <v-spacer></v-spacer>
                        <v-icon color="white" small @click="closeDialog()">mdi-close</v-icon>
                    </v-toolbar>
                    <v-card-text>
                        <div>
                            <Number label="UserId" v-model="selectedRow.userId" :editMode="true" />
                            <String label="Title" v-model="selectedRow.title" :editMode="true" />
                            <String label="Content" v-model="selectedRow.content" :editMode="true" />
                            <Number label="View" v-model="selectedRow.view" :editMode="true" />
                            <String label="Image" v-model="selectedRow.image" :editMode="true" />
                            <Date label="CreatedAt" v-model="selectedRow.createdAt" :editMode="true" />
                            <Date label="UpdatedAt" v-model="selectedRow.updatedAt" :editMode="true" />
                            <PostType offline label="Category" v-model="selectedRow.category" :editMode="true" />
                            <v-divider class="border-opacity-100 my-divider" />
                            <v-layout row justify-end>
                                <v-btn width="64px" color="primary" @click="save">수정</v-btn>
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
import BaseGrid from '../base-ui/BaseGrid.vue';

export default {
    name: 'postGrid',
    mixins: [BaseGrid],
    data: () => ({
        path: 'posts',
        writePostDialog: false,
        editPostDialog: false,
        deletePostDialog: false,
    }),
    methods: {
        async writePost(params) {
            try {
                const path = 'writePost';
                const temp = await this.repository.invoke(this.selectedRow, path, params);
                this.value = this.value.map(v => (v === this.selectedRow ? temp.data : v));
                this.writePostDialog = false;
            } catch (e) {
                console.log(e);
            }
        },
        async editPost(params) {
            try {
                const path = 'editPost';
                const temp = await this.repository.invoke(this.selectedRow, path, params);
                this.value = this.value.map(v => (v === this.selectedRow ? temp.data : v));
                this.editPostDialog = false;
            } catch (e) {
                console.log(e);
            }
        },
        async deletePost(params) {
            try {
                const path = 'deletePost';
                const temp = await this.repository.invoke(this.selectedRow, path, params);
                this.value = this.value.map(v => (v === this.selectedRow ? temp.data : v));
                this.deletePostDialog = false;
            } catch (e) {
                console.log(e);
            }
        },
        async increaseView() {
            try {
                const path = 'increaseView';
                const temp = await this.repository.invoke(this.selectedRow, path, null);
                this.value = this.value.map(v => (v === this.selectedRow ? temp.data : v));
            } catch (e) {
                console.log(e);
            }
        },
    },
};
</script>
