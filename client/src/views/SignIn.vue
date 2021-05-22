<template>
	<div class="wrapper">
		<div class="card">
			<div class="card-body">
				<h4 class="card-title text-center mb-4">Вхід</h4>
				<form @submit.prevent="signIn">
					<div class="mb-3">
						<label
							for="email"
							class="form-label"
						>Логін</label>
						<input
							v-model="form.email"
							required
							type="email"
							class="form-control"
							id="email"
						>
					</div>
					<div class="mb-3">
						<label
							for="password"
							class="form-label"
						>Пароль</label>
						<input
							v-model="form.password"
							required
							type="password"
							class="form-control"
							id="password"
						>
					</div>
					<router-link
						:to="{name: 'SignUp'}"
						class="d-block text-center mt-2 mb-5"
					>Реєстрація</router-link>
					<div
						class="alert alert-danger text-center"
						v-if="error"
					>{{error}}</div>
					<div class="d-flex">
						<button
							type="submit"
							class="btn btn-primary ms-auto"
						>Увійти</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SignIn",
	data: () => ({
		form: {
			email: "",
			password: "",
		},
		error: null,
	}),
	methods: {
		signIn() {
			this.$store.dispatch('signIn', this.form)
				.then(() => {
					this.$router.push({name: 'Dashboard'})
				})
				.catch(() => {
					this.error = "Невірні email та пароль";
				});
		},
	},
};
</script>

<style lang="scss" scoped>
.wrapper {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
.wrapper .card {
	width: 400px;
}
</style>
