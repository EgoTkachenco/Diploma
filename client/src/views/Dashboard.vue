<template>
	<div
		class="container"
		v-if="config"
	>
		<div class="row mt-5">
			<div class="col-12">
				<label
					for="login"
					class="form-label"
				>Оберіть сторінку: </label>
				<select
					class="form-select"
					value="config.page"
				>
					<option
						v-for="(page, index) in pages"
						:key="index"
						@click="setPage(index)"
					>
						{{page}}
					</option>
				</select>
			</div>
			<div class="col-12 my-3">
				<hr>
			</div>
			<div class="col-8">
				<div
					v-for="(error, index) in config.errors"
					:key="index"
					class="form-check mb-4 h5"
				>
					<input
						class="form-check-input"
						type="checkbox"
						v-model="error.selected"
					>
					<label class="form-check-label">
						{{error.name}}
					</label>
				</div>
			</div>
			<div class="col-4">
				<div class="card">
					<div class="card-body">
						<div class="card-title h3 text-center mb-3">{{config.page}}</div>
						<ul>
							<li
								v-show="error.selected"
								class="h5 mb-4"
								v-for="(error, index) in config.errors"
								:key="index"
							>
								{{error.name}}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
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
							@click="showModal = false"
							aria-label="Close"></button>
					</div>
					<form @submit.prevent="showModal = false">
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

	</div>
</template>

<script>
export default {
	name: "Dashboard",
	data: () => ({
		activePage: null,
		errors: [],
		showModal: true,

		form: {
			title: "",
			description: "",
		}
	}),
	methods: {
		setPage(index) {
			this.$store.dispatch("changePage", index);
		},
	},
	computed: {
		pages() {
			return this.$store.state.CONFIGS.map((item) => item.page);
		},
		config: {
			get() {
				return this.$store.state.config;
			},
			set(value) {
				this.$store.commit("SET_CONFIG", value);
			},
		},
	},
};
</script>
