<template>
  <div class="test-controll">
      <div class="result">Знайденно: {{findedBugs}}</div>
      <div class="time">{{testTime}}с</div>
      <button @click="endTest" class="btn btn-success">Завершити</button>
  </div>
</template>

<script>
export default {
    computed: {
        findedBugs() {
            return this.$store.state.config.errors.reduce((s, e) => {
                return e.isFinded ? s=s+1 : s
            }, 0)
        },
        testTime() {
            return this.$store.state.testTime;
        }
    }, 
    methods: {
        endTest() {
            this.$store.dispatch('endTest');
        }
    }
}
</script>

<style lang="scss" scoped>
.test-controll {
    position: fixed;
    background: #191919;
    padding: 8px 12px;
    bottom: 32px;
    right: 32px;
    color: #fff;
    max-width: 300px;
    width: 100%;
    display: flex;
    align-items: center;

    .time {
        margin-left: auto;
        margin-right: 8px;
    }
}
</style>