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
          @click="upgradeToMemberRequestDialog = true"
          class="contrast-primary-text"
          small
          color="primary"
          :disabled="!hasRole('MEM')"
        >
          <v-icon small>mdi-minus-circle-outline</v-icon>멤버 승인 요청
        </v-btn>
        <v-dialog v-model="upgradeToMemberRequestDialog" width="500">
          <UpgradeToMemberRequest
            @closeDialog="upgradeToMemberRequestDialog = false"
            @upgradeToMemberRequest="upgradeToMemberRequest"
          />
        </v-dialog>

        <v-btn
          style="margin-left: 5px;"
          @click="requestApprovalDialog = true"
          class="contrast-primary-text"
          small
          color="primary"
          :disabled="!selectedRow || !hasRole('ADMIN')"
        >
          <v-icon small>mdi-minus-circle-outline</v-icon>요청 승인
        </v-btn>
        <v-dialog v-model="requestApprovalDialog" width="500">
          <RequestApproval
            @closeDialog="requestApprovalDialog = false"
            @requestApproval="requestApproval"
          />
        </v-dialog>

        <v-btn
          style="margin-left: 5px;"
          @click="requestDenyDialog = true"
          class="contrast-primary-text"
          small
          color="primary"
          :disabled="!selectedRow || !hasRole('ADMIN')"
        >
          <v-icon small>mdi-minus-circle-outline</v-icon>요청 거절
        </v-btn>
        <v-dialog v-model="requestDenyDialog" width="500">
          <RequestDeny
            @closeDialog="requestDenyDialog = false"
            @requestDeny="requestDeny"
          />
        </v-dialog>
      </div>

      <div class="mb-5 text-lg font-bold"></div>

      <div class="table-responsive">
        <v-table>
          <thead>
            <tr>
              <th>Id</th>
              <th>UserId</th>
              <th>RegistrationCertificateImage</th>
              <th>State</th>
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
              <td class="whitespace-nowrap" label="UserId">{{ val.userId }}</td>
              <td class="whitespace-nowrap" label="RegistrationCertificateImage">{{ val.registrationCertificateImage }}</td>
              <td class="whitespace-nowrap" label="State">{{ val.state }}</td>
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
      <v-dialog v-model="openDialog" transition="dialog-bottom-transition" width="35%">
        <v-card>
          <v-toolbar color="primary" class="elevation-0 pa-4" height="50px">
            <div style="color:white; font-size:17px; font-weight:700;">MemberRequestList 등록</div>
            <v-spacer></v-spacer>
            <v-icon color="white" small @click="closeDialog()">mdi-close</v-icon>
          </v-toolbar>
          <v-card-text>
            <MemberRequestList
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
            <div style="color:white; font-size:17px; font-weight:700;">MemberRequestList 수정</div>
            <v-spacer></v-spacer>
            <v-icon color="white" small @click="closeDialog()">mdi-close</v-icon>
          </v-toolbar>
          <v-card-text>
            <div>
              <String label="UserId" v-model="selectedRow.userId" :editMode="true" />
              <String label="RegistrationCertificateImage" v-model="selectedRow.registrationCertificateImage" :editMode="true" />
              <String label="State" v-model="selectedRow.state" :editMode="true" />
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
  name: 'memberRequestListGrid',
  mixins: [BaseGrid],
  data: () => ({
    path: 'memberRequestLists',
    upgradeToMemberRequestDialog: false,
    requestApprovalDialog: false,
    requestDenyDialog: false,
  }),
  methods: {
    async upgradeToMemberRequest(params) {
      try {
        const path = 'upgradeToMemberRequest';
        const temp = await this.repository.invoke(this.selectedRow, path, params);
        this.value = this.value.map(v => (v === this.selectedRow ? temp.data : v));
        this.upgradeToMemberRequestDialog = false;
      } catch (e) {
        console.log(e);
      }
    },
    async requestApproval(params) {
      try {
        const path = 'requestApproval';
        const temp = await this.repository.invoke(this.selectedRow, path, params);
        this.value = this.value.map(v => (v === this.selectedRow ? temp.data : v));
        this.requestApprovalDialog = false;
      } catch (e) {
        console.log(e);
      }
    },
    async requestDeny(params) {
      try {
        const path = 'requestDeny';
        const temp = await this.repository.invoke(this.selectedRow, path, params);
        this.value = this.value.map(v => (v === this.selectedRow ? temp.data : v));
        this.requestDenyDialog = false;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
