<template>
  <div
        class="modal"
        :style="{display: showModal ? 'block' : 'none'}"
        style="background: rgba(0,0,0, 0.5)"
        role="dialog"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5
                        class="modal-title"
                        id="gridModalLabel"
                    >
                        Публікація тесту
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        @click="close"
                        aria-label="Close"></button>
                </div>
                <form @submit.prevent="sendForm">
                    <div class="modal-body">
                        <div class="mb-3">
                            <label
                                for="title"
                                class="form-label"
                            >Назва</label>
                            <input
                                v-model="form.title"
                                required
                                class="form-control"
                                id="title"
                            >
                        </div>
                        <div class="mb-3">
                            <label
                                for="description"
                                class="form-label"
                            >Короткий опис</label>
                            <textarea
                                v-model="form.description"
                                required
                                class="form-control"
                                id="description"
                            ></textarea>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="submit"
                                class="btn btn-primary"
                            >ОПУБЛІКУВАТИ</button>
                        </div>
                    </div>
                </form>						
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        form: {
			title: "",
			description: "",
		}
    }),
    computed: {
        showModal() {
			return this.$store.state.isTestModalOpen;
		},
    },
    methods: {
        sendForm() {
            this.$store.dispatch('saveTest', this.form)
                .then(() => {
                    this.form = {
                        title: "",
                        description: "",
                    } 
                });
        },
        close() {
            this.$store.commit('TOGGLE_TEST_MODAL')
        }
    }
}
</script>

<style>

</style>