<template>
	<span @dblclick="findError">
		<span v-if="!isActive || !error.selected">
			<slot>

			</slot>
		</span>
		<span v-else>
			<slot name="error">

			</slot>
		</span>
	</span>
</template>

<script>
export default {
	props: ["isActive", "error", "id"],
    methods: {
        findError() {
            if(this.isActive) {
                alert('You find bug \n' + this.error.name);
                this.$store.commit('FIND_ERROR', this.id);
            }
        }
    },
	computed: {
        isTest() {
            return this.$store.state.activeTest;
        }
    }
};
</script>

<style>
</style>