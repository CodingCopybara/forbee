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
                    @click="editInfoDialog = true"
                    class="contrast-primary-text"
                    small
                    color="primary"
                    :disabled="!selectedRow || !hasRole('USER')"
                >
                    <v-icon small>mdi-minus-circle-outline</v-icon>내 정보 수정
                </v-btn>
                <v-dialog v-model="editInfoDialog" width="500">
                    <EditInfo
                        @closeDialog="editInfoDialog = false"
                        @editInfo="editInfo"
                    />
                </v-dialog>

                <v-btn
                    style="margin-left: 5px;"
                    @click="withdrawMemberDialog = true"
                    class="contrast-primary-text"
                    small
                    color="primary"
                    :disabled="!selectedRow || !hasRole('MEM')"
                >
                    <v-icon small>mdi-minus-circle-outline</v-icon>조합원 탈퇴
                </v-btn>
                <v-dialog v-model="withdrawMemberDialog" width="500">
                    <WithdrawMember
                        @closeDialog="withdrawMemberDialog = false"
                        @withdrawMember="withdrawMember"
                    />
                </v-dialog>

                <v-btn
                    style="margin-left: 5px;"
                    @click="signUpDialog = true"
                    class="contrast-primary-text"
                    small
                    color="primary"
                    :disabled="!hasRole('USER')"
                >
                    <v-icon small>mdi-minus-circle-outline</v-icon>회원가입
                </v-btn>
                <v-dialog v-model="signUpDialog" width="500">
                    <SignUp
                        @closeDialog="signUpDialog = false"
                        @signUp="signUp"
                    />
                </v-dialog>

                <v-btn
                    style="margin-left: 5px;"
                    @click="signInDialog = true"
                    class="contrast-primary-text"
                    small
                    color="primary"
                    :disabled="!hasRole('USER')"
                >
                    <v-icon small>mdi-minus-circle-outline</v-icon>로그인
                </v-btn>
                <v-dialog v-model="signInDialog" width="500">
                    <SignIn
                        @closeDialog="signInDialog = false"
                        @signIn="signIn"
                    />
                </v-dialog>
            </div>

            <div class="mb-5 text-lg font-bold"></div>

            <div class="table-responsive">
                <v-table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Password</th>
                            <th>Role</th>
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
                            <td class="whitespace-nowrap" label="Email">{{ val.email }}</td>
                            <td class="whitespace-nowrap" label="Name">{{ val.name }}</td>
                            <td class="whitespace-nowrap" label="Password">{{ val.password }}</td>
                            <td class="whitespace-nowrap" label="Role">{{ val.role }}</td>
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
                    <v-toolbar color="primary" class="elevation-0 pa-4" height="50px">
                        <div style="color:white; font-size:17px; font-weight:700;">User 등록</div>
                        <v-spacer></v-spacer>
                        <v-icon color="white" small @click="closeDialog()">mdi-close</v-icon>
                    </v-toolbar>
                    <v-card-text>
                        <User
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

            <v-dialog
                v-model="editDialog"
                transition="dialog-bottom-transition"
                width="35%"
            >
                <v-card>
                    <v-toolbar color="primary" class="elevation-0 pa-4" height="50px">
                        <div style="color:white; font-size:17px; font-weight:700;">User 수정</div>
                        <v-spacer></v-spacer>
                        <v-icon color="white" small @click="closeDialog()">mdi-close</v-icon>
                    </v-toolbar>
                    <v-card-text>
                        <div>
                            <String label="Email" v-model="selectedRow.email" :editMode="true" />
                            <String label="Name" v-model="selectedRow.name" :editMode="true" />
                            <String label="Password" v-model="selectedRow.password" :editMode="true" />
                            <role offline label="Role" v-model="selectedRow.role" :editMode="true" />
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
    name: 'userGrid',
    mixins: [BaseGrid],
    data: () => ({
        path: 'users',
        editInfoDialog: false,
        withdrawMemberDialog: false,
        signUpDialog: false,
        signInDialog: false,
    }),
    methods: {
        async editInfo(params) {
            try {
                const path = 'editInfo';
                const temp = await this.repository.invoke(this.selectedRow, path, params);
                this.value = this.value.map(v => (v === this.selectedRow ? temp.data : v));
                this.editInfoDialog = false;
            } catch (e) {
                console.log(e);
            }
        },
        async withdrawMember(params) {
            try {
                const path = 'withdrawMember';
                const temp = await this.repository.invoke(this.selectedRow, path, params);
                this.value = this.value.map(v => (v === this.selectedRow ? temp.data : v));
                this.withdrawMemberDialog = false;
            } catch (e) {
                console.log(e);
            }
        },
        async signUp(params) {
            try {
                const path = 'signUp';
                const temp = await this.repository.invoke(this.selectedRow, path, params);
                this.value = this.value.map(v => (v === this.selectedRow ? temp.data : v));
                this.signUpDialog = false;
            } catch (e) {
                console.log(e);
            }
        },
        async signIn(params) {
            try {
                const path = 'signIn';
                const temp = await this.repository.invoke(this.selectedRow, path, params);
                this.value = this.value.map(v => (v === this.selectedRow ? temp.data : v));
                this.signInDialog = false;
            } catch (e) {
                console.log(e);
            }
        },
    },
};
</script>
