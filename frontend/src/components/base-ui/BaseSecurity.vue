<template>
    <div></div>
</template>

<script>
export default {
    methods: {
        getUserRole() {
            if (this.$OAuth) {
                return this.$OAuth.tokenParsed.realm_access.roles.join(",");
            } else {
                return "";
            }
        },
        hasRole(roleName) {
        if (!this.$OAuth) {
            return true;
        }
            return this.getUserRole().includes(roleName);
        },
        getUserName() {
            if (this.$OAuth) {
                return this.$OAuth.idTokenParsed.preferred_username;
            } else {
                return "Guest";
            }
        },
        logout() {
            if (this.$OAuth) {
                if (confirm("로그아웃 하시겠습니까?")) {
                localStorage.clear();
                location.href =
                    "http://localhost:9090/realms/master/protocol/openid-connect/logout";
                }
            } else {
                alert("Oauth Authentication is not Available.");
            }
        },
    },
};
</script>