<template>
    <div v-if="!isResult">
        <Catalog :withErrors="true" />
        <TestControll v-if="isTest" />
    </div>
    <div v-else>
        <div class="modal-wrapper">
            <div class="modal">
                123
            </div>
        </div>
    </div>
</template>

<script>
import Catalog from '../components/pages/Catalog'
import TestControll from '../components/TestControll'

export default {
    components: {
        Catalog,
        TestControll
    },
    computed: {
        isTest() {
            return this.$store.state.activeTest;
        },
        isResult() {
            debugger
            return this.$store.state.testResult;
        }
    }
}
</script>
