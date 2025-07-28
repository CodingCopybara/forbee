<template>
    <div style="margin: -7px -15px 0 -15px;" :style="editMode ? '':'width: 210px;'">
        <v-card-title  v-if="inList" v-model="weather" style="font-size: 13px;">
            <div v-if="weather.degree == 0 && weather.degree == 0 && weather.wind == 0"/>
            <div v-else>
                온도 {{ weather.degree }}°/풍속 {{ weather.wind }}km/h/강수확률 {{ weather.precipitation }}%
            </div>
        </v-card-title>

        <v-card-text v-if="!inList">
            <div v-if="editMode">
                <v-text-field type="number" label="Degree" v-model="weather.degree"/>
            </div>
            <div v-if="editMode" style="margin-top:5px;">
                <v-text-field type="number" label="Precipitation" v-model="weather.precipitation"/>
            </div>
            <div v-if="editMode" style="margin-top:5px;">
                <v-text-field type="number" label="Humidity" v-model="weather.humidity"/>
            </div>
            <div v-if="editMode" style="margin-top:5px;">
                <v-text-field type="number" label="Wind" v-model="weather.wind"/>
            </div>
            <v-card
                v-if="!editMode"
                class="mx-auto"
                style="height: 200px;"
                width="330"
            >
                <v-img
                    height="100%"
                    
                    :src="weatherBg"
                >
                    <div v-if="!editMode" style="font-size:70px; margin:25px 0 50px 20px;">
                        <div v-if="weather.precipitation<25">
                            <span style="color:gold" class="mdi mdi-white-balance-sunny"></span>
                        </div>
                        <div v-else-if="25<=weather.precipitation && weather.precipitation<70">
                            <span style="color:grey" class="mdi mdi-weather-cloudy"></span>
                        </div>
                        <div v-else-if="70<=weather.precipitation">
                            <span style="color:navy" class="mdi mdi-weather-pouring"></span>
                        </div>
                    </div>

                    <div v-if="!editMode" style="font-size:25px; font-weight:500; margin-left:20px; color:white; margin-top: -15px;">
                            온도 {{weather.degree }}&nbsp;<v-icon x-large color="white">mdi-temperature-celsius</v-icon>&nbsp;&nbsp;
                            풍속 {{weather.wind }}km/h&nbsp;<v-icon x-large color="white">mdi-weather-windy-variant</v-icon><br>
                            강수확률 {{weather.precipitation }}%&nbsp;<v-icon x-large color="white">mdi-umbrella</v-icon>&nbsp;&nbsp;<br>
                            습도 {{weather.humidity }}%&nbsp;<v-icon x-large color="white">mdi-weather-rainy</v-icon>
                    </div>
                </v-img>
            </v-card>
        </v-card-text>
    </div>
</template>

<script>
    export default {
        name:"Weather",
        props: {
            editMode: Boolean,
            modelValue : Object,
            label : String,
            inList: Boolean
        },
        data: () => ({
            weather:{},
            weatherBg: null,
        }),
        created(){
            this.weather = this.modelValue
            if(!this.weather) {
                this.weather = {
                    'degree': 0,
                    'precipitation': 0,
                    'humidity': 0,
                    'wind': 0,
                };
            }
            if(this.weather.precipitation<25) {
                this.weatherBg = "https://user-images.githubusercontent.com/92732781/174241118-7832da47-bbb8-481c-a11a-737a6b986104.png";
            } else if(this.weather.precipitation>=25 && this.weather.precipitation<70) {
                this.weatherBg = "https://user-images.githubusercontent.com/92732781/174242976-3f6d5bda-7bcb-404b-a299-84961e2f0c54.png";
            } else if(this.weather.precipitation>=70) {
                this.weatherBg = "https://user-images.githubusercontent.com/92732781/174243446-886452db-083a-4882-b02e-efd577ce17f6.png";
            }

        },
        watch: {
            weather(newVal) {
                this.$emit("update:modelValue", newVal);
            },
        },
    }
</script>

<style scoped>
</style>