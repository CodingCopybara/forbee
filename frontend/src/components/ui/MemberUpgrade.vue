<template>
  <v-container class="fill-height" style="background-color: #F8F4E1;">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-6" elevation="10" rounded="lg">
          <v-card-title class="text-h5 font-weight-bold py-4 text-center">
            조합원 신청
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="address"
                    label="양봉장 소재지"
                    readonly
                    @click="openDaumPostcode"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="addressDetail"
                    label="상세주소"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-file-input
                v-model="certificate"
                label="양봉농가등록증"
                accept="image/*,.pdf"
                class="mt-4"
              ></v-file-input>
              <v-btn
                color="#FEBA17"
                block
                rounded="lg"
                class="mt-6 py-5 font-weight-bold"
                elevation="2"
                @click="submitApplication"
              >
                신청하기
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const address = ref('');
const addressDetail = ref('');
const certificate = ref(null);

const openDaumPostcode = () => {
  new window.daum.Postcode({
    oncomplete: (data) => {
      address.value = data.address;
    },
  }).open();
};

const submitApplication = () => {
  if (!address.value || !certificate.value) {
    alert('모든 필드를 입력해주세요.');
    return;
  }
  // Handle the application submission logic here
  alert('조합원 신청이 완료되었습니다.');
};
</script>

<style scoped>
.v-card-title {
  font-family: 'Inter', sans-serif;
}
.v-btn {
  font-family: 'Inter', sans-serif;
}
</style>
