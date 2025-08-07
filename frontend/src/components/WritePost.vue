<template>
  <v-card outlined>
    <v-card-title>
      WritePost
    </v-card-title>

    <v-card-text>
      <Number label="UserId" v-model="value.userId" :editMode="editMode" />
      <String label="Title" v-model="value.title" :editMode="editMode" />
      <String label="Content" v-model="value.content" :editMode="editMode" />
      <String label="Image" v-model="value.image" :editMode="editMode" />
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="deep-purple lighten-2" text @click="writePost">
        WritePost
      </v-btn>
      <v-btn color="deep-purple lighten-2" text @click="close">
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'WritePostCommand',
  data: () => ({
    editMode: true,
    value: {
      userId: 0,
      title: '',
      content: '',
      image: '',
      category: '자유게시판', // ← 예시로 기본값 설정
    },
  }),
  methods: {
    writePost() {
      axios
        .post('/posts/writepost', this.value, {
          headers: {
            Role: 'admin', // ← 임시 권한 부여
          },
        })
        .then(() => {
          alert('게시글 작성 완료');
          this.close();
        })
        .catch((error) => {
          const msg =
            error.response?.data?.message || '작성 실패: 서버 오류 또는 권한 없음';
          alert(msg);
        });
    },
    close() {
      this.$emit('closeDialog');
    },
    change() {
      this.$emit('update:modelValue', this.value);
    },
  },
};
</script>
