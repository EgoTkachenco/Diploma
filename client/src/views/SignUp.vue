<template>
	<div class="wrapper">
		<div class="card">
			<div class="card-body">
				<h4 class="card-title text-center">Реєстрація</h4>
				<form @submit.prevent="signUp">
					<div class="mb-3">
						<label
							for="login"
							class="form-label"
						>Ім'я</label>
						<input
							v-model="form.name"
							required
							type="text"
							class="form-control"
							id="name"
						>
					</div>
					<div class="mb-3">
						<label
							for="login"
							class="form-label"
						>Тип користувача</label>
						<select
							class="form-select"
							v-model="form.type"
							aria-label="Default select example"
						>
							<option value="student">Студент</option>
							<option value="teacher">Викладач</option>
						</select>
					</div>
					<div class="mb-3">
						<label
							for="login"
							class="form-label"
						>Логін</label>
						<input
							v-model="form.login"
							required
							type="login"
							class="form-control"
							id="login"
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
					<a
						href="/signIn"
						class="d-block text-center mt-2 mb-5"
					>Вхід</a>
					<div class="d-flex">
						<button
							type="submit"
							class="btn btn-primary ms-auto text-nowrap"
						>Зареєструватися</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SignUp",
	data: () => ({
		form: {
			login: "",
			password: "",
			type: "student",
			name: "",
		},
		error: null,
	}),
	methods: {
		signUp() {
			this.$store.dispatch('signUp', this.form)
				.then(data => {
					if (data.status) {
						this.$router.push({name: 'Dashboard'})
					} else {
						this.error = data.message;
					}
				})
				.catch(() => {
					this.error = 'Помилка сервера';
				});
		},
		rememberUser(id) {
			localStorage.setItem("userID", JSON.stringify(id));
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