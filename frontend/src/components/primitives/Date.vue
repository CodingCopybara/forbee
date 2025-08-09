<template>
    <div v-if="editMode" class="date-picker-container">
        {{ label }}
        
        <v-text-field
            v-model="formattedDateTime"
            prepend-icon="mdi-calendar-clock"
            readonly
            @click="openCalendar"
        ></v-text-field>
        
        <div v-if="calendarMode" class="calendar-popup">
            <div class="calendar-wrapper">
                <!-- 달력 헤더 -->
                <div class="calendar-header">
                    <v-btn icon="mdi-chevron-left" variant="text" @click="previousMonth"></v-btn>
                    <span>{{ currentMonthDisplay }}</span>
                    <v-btn icon="mdi-chevron-right" variant="text" @click="nextMonth"></v-btn>
                </div>

                <!-- 요일 헤더 -->
                <div class="weekdays">
                    <span v-for="day in ['일', '월', '화', '수', '목', '금', '토']" :key="day">{{ day }}</span>
                </div>

                <!-- 날짜 그리드 -->
                <div class="dates">
                    <div
                        v-for="date in calendarDates"
                        :key="date.date"
                        class="date-cell"
                        :class="{ 
                            'current-month': date.currentMonth,
                            'selected': isSelectedDate(date.date)
                        }"
                        @click="selectDate(date.date)"
                    >
                        {{ date.day }}
                    </div>
                </div>

                <!-- 시간 선택 -->
                <div class="time-picker">
                    <v-text-field
                        v-model="hours"
                        type="number"
                        min="0"
                        max="23"
                        label="시"
                        class="time-input"
                        @input="validateHours"
                        @blur="validateHours"
                    ></v-text-field>
                    <span class="time-separator">:</span>
                    <v-text-field
                        v-model="minutes"
                        type="number"
                        min="0"
                        max="59"
                        label="분"
                        class="time-input"
                        @input="validateMinutes"
                        @blur="validateMinutes"
                    ></v-text-field>
                </div>

                <v-btn
                    @click="closeCalendar"
                    class="complete-btn"
                    variant="text"
                    color="primary"
                >
                    완료
                </v-btn>
            </div>
        </div>
    </div>
    <div v-else>
        {{ label }} : {{ formattedDateTime }}
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
    modelValue: [Date, String],
    editMode: Boolean,
    label: String,
})

const emit = defineEmits(['update:modelValue'])

const calendarMode = ref(false)
const currentDate = ref(new Date())
const selectedDate = ref(props.modelValue ? new Date(props.modelValue) : new Date())
const hours = ref(selectedDate.value.getHours().toString().padStart(2, '0'))
const minutes = ref(selectedDate.value.getMinutes().toString().padStart(2, '0'))

// computed 속성들은 동일
const currentMonthDisplay = computed(() => {
    return `${currentDate.value.getFullYear()}년 ${currentDate.value.getMonth() + 1}월`
})

const calendarDates = computed(() => {
    const dates = []
    const firstDay = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 1)
    const lastDay = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 0)
    
    // 이전 달의 날짜들
    const firstDayWeekday = firstDay.getDay()
    for (let i = firstDayWeekday; i > 0; i--) { // 수정: firstDayWeekday - 1 -> firstDayWeekday
        const date = new Date(firstDay)
        date.setDate(date.getDate() - i)
        dates.push({
            date: new Date(date),
            day: date.getDate(),
            currentMonth: false
        })
    }
    
    // 현재 달의 날짜들
    for (let i = 1; i <= lastDay.getDate(); i++) {
        dates.push({
            date: new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), i),
            day: i,
            currentMonth: true
        })
    }
    
    // 다음 달의 날짜들
    const remainingDays = 42 - dates.length // 6주 x 7일 = 42
    for (let i = 1; i <= remainingDays; i++) {
        const date = new Date(lastDay)
        date.setDate(date.getDate() + i)
        dates.push({
            date: new Date(date),
            day: date.getDate(),
            currentMonth: false
        })
    }
    
    return dates
})

const formattedDateTime = computed(() => {
    if (!selectedDate.value) return ''
    return new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).format(selectedDate.value)
})

// 수정된 시간 관련 함수들
function validateHours() {
    let h = parseInt(hours.value)
    if (isNaN(h)) h = 0
    if (h < 0) h = 0
    if (h > 23) h = 23
    hours.value = h.toString().padStart(2, '0')
    
    // 즉시 시간 업데이트
    updateDateTime()
}

function validateMinutes() {
    let m = parseInt(minutes.value)
    if (isNaN(m)) m = 0
    if (m < 0) m = 0
    if (m > 59) m = 59
    minutes.value = m.toString().padStart(2, '0')
    
    // 즉시 시간 업데이트
    updateDateTime()
}

function updateDateTime() {
    const newDate = new Date(selectedDate.value)
    newDate.setHours(parseInt(hours.value) || 0)
    newDate.setMinutes(parseInt(minutes.value) || 0)
    selectedDate.value = newDate
    updateModelValue()
}

// 날짜 선택 시 현재 시간 유지
function selectDate(date) {
    const newDate = new Date(date)
    newDate.setHours(parseInt(hours.value) || 0)
    newDate.setMinutes(parseInt(minutes.value) || 0)
    selectedDate.value = newDate
    updateModelValue()
}

function updateModelValue() {
    emit('update:modelValue', selectedDate.value.toISOString())
}

// 기존 함수들
function previousMonth() {
    currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1)
}

function nextMonth() {
    currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1)
}

function isSelectedDate(date) {
    return date.getDate() === selectedDate.value.getDate() &&
           date.getMonth() === selectedDate.value.getMonth() &&
           date.getFullYear() === selectedDate.value.getFullYear()
}

function openCalendar() {
    calendarMode.value = true
}

function closeCalendar() {
    calendarMode.value = false
    // 마지막으로 한 번 더 업데이트하여 확실히 반영
    updateDateTime()
}

// 초기화
onMounted(() => {
    if (props.modelValue) {
        const initialDate = new Date(props.modelValue)
        currentDate.value = new Date(initialDate) // 현재 달력 월 설정
        selectedDate.value = initialDate
        hours.value = initialDate.getHours().toString().padStart(2, '0')
        minutes.value = initialDate.getMinutes().toString().padStart(2, '0')
    } else {
        const now = new Date()
        currentDate.value = new Date(now)
        selectedDate.value = now
        hours.value = now.getHours().toString().padStart(2, '0')
        minutes.value = now.getMinutes().toString().padStart(2, '0')
    }
})
</script>

<style scoped>
.date-picker-container {
    position: relative;
    width: 100%;
}

.calendar-popup {
    position: absolute;
    z-index: 9999; /* z-index 값 증가 */
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    width: 280px;
    left: 0; /* 왼쪽 정렬 */
    top: 100%; /* 입력 필드 바로 아래 위치 */
    margin-top: 4px; /* 입력 필드와의 간격 */
}

.calendar-wrapper {
    padding: 12px;
    background: white; /* 배경색 명시적 지정 */
    border-radius: 8px;
}

/* 달력 그리드 관련 스타일 강화 */
.weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    font-weight: bold;
    margin-bottom: 8px;
    background: white;
}

.dates {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    background: white;
}

.date-cell {
    padding: 8px 6px; /* 패딩 약간 증가 */
    text-align: center;
    cursor: pointer;
    border-radius: 4px;
    user-select: none; /* 텍스트 선택 방지 */
}

.date-cell:hover {
    background-color: #f5f5f5;
}

.date-cell.current-month {
    color: #000;
}

.date-cell:not(.current-month) {
    color: #ccc;
}

.date-cell.selected {
    background-color: #1976d2;
    color: white;
}

.calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    padding: 0 8px;
    background: white;
}

.time-picker {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    gap: 8px;
    background: white;
    padding: 8px;
}

.time-input {
    width: 80px;
}

.time-input :deep(input) {
    text-align: center;
}

.time-separator {
    font-size: 20px;
    font-weight: bold;
    margin: 0 4px;
}

.complete-btn {
    margin-top: 12px;
    width: 100%;
    background: white;
}
</style>