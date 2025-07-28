<template>
    <div style="margin: 0 -15px 0 -15px;">
        <v-card-title v-if="inList && address.country && address.state" style="font-size: 15px;">
            {{address.country }} / {{address.state }} {{address.city }} {{address.street }} ({{address.zipcode }})
        </v-card-title>
        <v-card-text v-if="!inList">
            <div v-if="editMode">
                <v-text-field label="Country" v-model="address.country" />
            </div>
            <div v-if="editMode" style="margin-top: 5px;">
                <v-text-field label="State" v-model="address.state" placeholder="OO도"/>
            </div>
            <div v-if="editMode" style="margin-top: 5px;">
                <v-text-field label="City" v-model="address.city"/>
            </div>
            <div v-if="editMode" style="margin-top: 5px;">
                <v-text-field label="Street" v-model="address.street"/>
            </div>
            <div v-if="editMode" style="margin-top: 5px;">
                <v-text-field label="Zipcode" v-model="address.zipcode" />
            </div>

            <div>
                <v-divider></v-divider><br>
                <GoogleMap
                    api-key=""
                    class="mx-auto"
                    :center="{lat:latitude, lng:longitude}"
                    :libraries="['places']"
                    :zoom="10"
                    map-type-id="terrain"
                    style="width: 400px; height: 300px"
                    >
                    <Marker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        :clickable="true"
                        :draggable="true"
                        @click="center=m.position"
                    />
                </GoogleMap>
            
            </div>
        </v-card-text>
    </div>
</template>

<script>
    import { GoogleMap, Marker } from "vue3-google-map";

    export default {
        name:"Address",
        props: {
            editMode: Boolean,
            modelValue : Object,
            label : String,
            inList: Boolean
        },
        data: () => ({
            latitude: 37.5666805,
            longitude: 126.9784147,
            address:{}
        }),
        created(){
            this.address = this.modelValue;
            if(!this.address) {
                this.address = {
                    'street': '',
                    'city': '',
                    'state': '',
                    'country': '',
                    'zipcode': '',
                };
            }

            if(this.address.state.includes("경기도")){
                this.latitude = 37.567167;
                this.longitude = 127.190292;
            }else if(this.address.state.includes("강원도")){
                this.latitude = 37.555837;
                this.longitude = 128.209315;
            }else if(this.address.state.includes("충청남도")){
                this.latitude = 36.557229;
                this.longitude = 126.779757;
            }else if(this.address.state.includes("충청북도")){
                this.latitude = 36.628503;
                this.longitude = 127.929344;
            }else if(this.address.state.includes("경상북도")){
                this.latitude = 36.248647;
                this.longitude = 128.664734;
            }else if(this.address.state.includes("경상남도")){
                this.latitude = 35.259787;
                this.longitude = 128.664734;
            }else if(this.address.state.includes("전라북도")){
                this.latitude = 35.716705;
                this.longitude = 127.144185;
            }else if(this.address.state.includes("전라남도")){
                this.latitude = 34.819400;
                this.longitude = 126.893113;
            }else if(this.address.state.includes("제주")){
                this.latitude = 33.364805;
                this.longitude = 126.542671;
            }else if(this.address.state.includes("서울")){
                this.latitude = 37.487935;
                this.longitude = 126.857758;
            }else if(this.address.state.includes("인천")){
                this.latitude = 37.45639;
                this.longitude = 126.70528;
            }else if(this.address.state.includes("대전")){
                this.latitude = 36.35111;
                this.longitude = 127.38500;
            }else if(this.address.state.includes("대구")){
                this.latitude = 35.87222;
                this.longitude = 128.60250;
            }else if(this.address.state.includes("부산")){
                this.latitude = 35.17944;
                this.longitude = 129.07556;
            }else if(this.address.state.includes("광주")){
                this.latitude = 35.15972;
                this.longitude = 126.85306;
            }
        },
        watch: {
            address(newVal) {
                this.$emit('update:modelValue', newVal);
            },
        },
    }
</script>

<style scoped>
</style>