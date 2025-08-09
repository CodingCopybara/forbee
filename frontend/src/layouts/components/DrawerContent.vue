<script setup>
import {
  VerticalNavLink,
  VerticalNavSectionTitle,
} from '@layouts'
</script>

<template>
    <ul>
        <VerticalNavSectionTitle :item="{ heading: '커뮤니티' }" />
        <VerticalNavLink
            :item="{
                title: 'Post',
                to: '/posts',
            }"
        />
        <VerticalNavLink
            :item="{
                title: 'Comment',
                to: '/comments',
            }"
        />
        <VerticalNavLink
            :item="{
                title: '',
                to: '/',
            }"
        />
        <VerticalNavLink
            :item="{
                title: '',
                to: '/',
            }"
        />
        <VerticalNavSectionTitle :item="{ heading: '밀원' }" />
        <VerticalNavLink
            :item="{
                title: 'Plant',
                to: '/plants',
            }"
        />
        <VerticalNavSectionTitle :item="{ heading: '사용자' }" />
        <VerticalNavLink
            :item="{
                title: 'User',
                to: '/users',
            }"
        />
        <VerticalNavLink
            :item="{
                title: 'MemberRequestList',
                to: '/memberRequestLists',
            }"
        />
        <VerticalNavSectionTitle :item="{ heading: '대시보드' }" />
        <VerticalNavLink
            :item="{
                title: 'Map',
                to: '/maps',
            }"
        />
        <VerticalNavSectionTitle :item="{ heading: '챗봇' }" />
        <VerticalNavLink
            :item="{
                title: 'Chatbot',
                to: '/chatbots',
            }"
        />
        <VerticalNavSectionTitle :item="{ heading: 'AI' }" />
        <VerticalNavLink
            :item="{
                title: '',
                to: '/',
            }"
        />
        <VerticalNavLink
            :item="{
                title: '',
                to: '/',
            }"
        />
    </ul>
</template>
