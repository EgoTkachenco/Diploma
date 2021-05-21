<template>
	<div>
		<div class="navbar">
			<div class="logo">
				<v-error
					:isActive="withErrors"
					id="0"
					:error="config.errors[0]"
				>
					<img
						src="@/assets/logo-catalog.png"
						alt="logo"
					>
					<template v-slot:error>
						<img
							src=""
							alt="logo"
						>
					</template>
				</v-error>
			</div>

			<div class="navbar-links">
				<v-error
					:isActive="withErrors"
					id="1"
					:error="config.errors[1]"
				>
					<div class="nav-link active">Каталог</div>
					<template v-slot:error>
						<div class="nav-link">Каталог</div>
					</template>
				</v-error>
				<div class="nav-link">Футболки</div>
				<div class="nav-link">Худі</div>
				<div class="nav-link">Контакти</div>
			</div>

			<div class="navbar-btns">
				<div class="navbar-btn">
					<v-error
						:isActive="withErrors"
						id="2"
						:error="config.errors[2]"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0)">
								<path
									d="M14.8488 14.8493C13.7936 14.8879 11.7217 15.8951 10.5266 17.3168C8.60922 14.6243 8.22185 11.1765 8.82035 7.91926C9.96635 8.63738 11.25 9.06151 11.9928 9.03601C13.551 8.97863 14.7401 6.91463 14.6527 4.41863C14.565 1.923 13.233 -0.054745 11.6778 -0.000369978C10.1216 0.05288 6.35772 2.20988 6.4436 4.70738C6.44772 4.79176 6.46535 4.87463 6.47697 4.95938C6.11435 5.63701 5.9996 6.55013 5.85372 7.27275C5.09097 11.049 5.5991 15.1361 7.59822 18.4553C8.14535 19.3598 9.00147 20.67 10.1025 20.9985C11.2117 22.7419 13.9301 23.9299 15.1661 23.8856C16.7239 23.8305 17.9118 21.7643 17.8263 19.2675C17.7375 16.773 16.4066 14.7956 14.8488 14.8496"
									fill="#B72025"
								/>
								<path
									d="M15.4463 14.9036C14.3884 14.9426 12.318 15.9495 11.1225 17.3723C9.20364 14.679 8.81627 11.2316 9.41627 7.97476C10.5623 8.69251 11.8448 9.11626 12.588 9.09151C14.1465 9.03413 15.3364 6.97013 15.2475 4.47338C15.1616 1.97851 13.8289 0.00075743 12.2711 0.0555074C10.7164 0.109507 6.95402 2.26651 7.03989 4.76326C7.04289 4.84763 7.06052 4.93051 7.07177 5.01526C6.70914 5.69213 6.59439 6.60601 6.44852 7.32863C5.68577 11.1049 6.19539 15.1913 8.19414 18.51C8.73902 19.4153 9.59627 20.7255 10.6984 21.0533C11.8065 22.7978 14.5249 23.9854 15.762 23.9404C17.3183 23.8856 18.5063 21.819 18.4208 19.323C18.3323 16.8285 17.0033 14.8515 15.4463 14.9044"
									fill="#B72025"
								/>
							</g>
							<defs>
								<clipPath id="clip0">
									<rect
										width="24"
										height="24"
										fill="white"
									/>
								</clipPath>
							</defs>
						</svg>
						<template v-slot:error>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0)">
									<path
										d="M14.8488 14.8493C13.7936 14.8879 11.7217 15.8951 10.5266 17.3168C8.60922 14.6243 8.22185 11.1765 8.82035 7.91926C9.96635 8.63738 11.25 9.06151 11.9928 9.03601C13.551 8.97863 14.7401 6.91463 14.6527 4.41863C14.565 1.923 13.233 -0.054745 11.6778 -0.000369978C10.1216 0.05288 6.35772 2.20988 6.4436 4.70738C6.44772 4.79176 6.46535 4.87463 6.47697 4.95938C6.11435 5.63701 5.9996 6.55013 5.85372 7.27275C5.09097 11.049 5.5991 15.1361 7.59822 18.4553C8.14535 19.3598 9.00147 20.67 10.1025 20.9985C11.2117 22.7419 13.9301 23.9299 15.1661 23.8856C16.7239 23.8305 17.9118 21.7643 17.8263 19.2675C17.7375 16.773 16.4066 14.7956 14.8488 14.8496"
										fill="#191919"
									/>
									<path
										d="M15.4463 14.9036C14.3884 14.9426 12.318 15.9495 11.1225 17.3723C9.20364 14.679 8.81627 11.2316 9.41627 7.97476C10.5623 8.69251 11.8448 9.11626 12.588 9.09151C14.1465 9.03413 15.3364 6.97013 15.2475 4.47338C15.1616 1.97851 13.8289 0.00075743 12.2711 0.0555074C10.7164 0.109507 6.95402 2.26651 7.03989 4.76326C7.04289 4.84763 7.06052 4.93051 7.07177 5.01526C6.70914 5.69213 6.59439 6.60601 6.44852 7.32863C5.68577 11.1049 6.19539 15.1913 8.19414 18.51C8.73902 19.4153 9.59627 20.7255 10.6984 21.0533C11.8065 22.7978 14.5249 23.9854 15.762 23.9404C17.3183 23.8856 18.5063 21.819 18.4208 19.323C18.3323 16.8285 17.0033 14.8515 15.4463 14.9044"
										fill="#191919"
									/>
								</g>
								<defs>
									<clipPath id="clip0">
										<rect
											width="24"
											height="24"
											fill="white"
										/>
									</clipPath>
								</defs>
							</svg>
						</template>
					</v-error>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-4">
					<div class="photo-block">
						<img
							src="@/assets/catalog/catalog-head-1.png"
							alt=""
						>
						<div class="photo-block__title">
							ФУТБОЛКИ
						</div>
					</div>
				</div>
				<div class="col-4">
					<div class="photo-block">
						<img
							src="@/assets/catalog/catalog-head-2.png"
							alt=""
						>
						<div class="photo-block__title">
							ХУДІ
						</div>
					</div>
				</div>
				<div class="col-4">
					<div class="photo-block">
						<img
							src="@/assets/catalog/catalog-head-3.png"
							alt=""
						>
                        <v-error
                            :isActive="withErrors"
                            id="3"
                            :error="config.errors[3]"
                        >
                            <div class="photo-block__title last-text">
                                НОВА КОЛЕЦКЦІЯ
                            </div>
                            <template v-slot:error>
                                <div class="photo-block__title">
                                    НОВА КОЛЕЦКЦІЯ
                                </div>
                            </template>
                        </v-error>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-12 d-flex justify-content-center align-items-center mb-4">
					<input
						class="search-input"
						type="text"
						placeholder="Пошук"
					>

					<div class="filter-btn">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M5.25003 5.25C5.25003 5.05109 5.17101 4.86032 5.03036 4.71967C4.88971 4.57902 4.69894 4.5 4.50003 4.5C4.30112 4.5 4.11035 4.57902 3.9697 4.71967C3.82905 4.86032 3.75003 5.05109 3.75003 5.25V18.4395L2.03103 16.719C1.9613 16.6493 1.87852 16.594 1.78741 16.5562C1.6963 16.5185 1.59865 16.4991 1.50003 16.4991C1.40142 16.4991 1.30377 16.5185 1.21266 16.5562C1.12155 16.594 1.03876 16.6493 0.969032 16.719C0.8993 16.7887 0.843986 16.8715 0.806247 16.9626C0.768508 17.0537 0.749084 17.1514 0.749084 17.25C0.749084 17.3486 0.768508 17.4463 0.806247 17.5374C0.843986 17.6285 0.8993 17.7113 0.969032 17.781L3.96903 20.7795L3.97953 20.79C4.12035 20.9273 4.30971 21.0034 4.50638 21.0017C4.70306 21 4.89109 20.9207 5.02953 20.781L8.02953 17.781C8.17036 17.6404 8.24956 17.4496 8.2497 17.2505C8.24984 17.0515 8.17091 16.8606 8.03028 16.7197C7.88965 16.5789 7.69883 16.4997 7.49981 16.4996C7.30079 16.4994 7.10986 16.5784 6.96903 16.719L5.25003 18.4395V5.25ZM11.25 6C11.0511 6 10.8604 5.92098 10.7197 5.78033C10.579 5.63968 10.5 5.44891 10.5 5.25C10.5 5.05109 10.579 4.86032 10.7197 4.71967C10.8604 4.57902 11.0511 4.5 11.25 4.5H12.75C12.9489 4.5 13.1397 4.57902 13.2804 4.71967C13.421 4.86032 13.5 5.05109 13.5 5.25C13.5 5.44891 13.421 5.63968 13.2804 5.78033C13.1397 5.92098 12.9489 6 12.75 6H11.25ZM11.25 10.5C11.0511 10.5 10.8604 10.421 10.7197 10.2803C10.579 10.1397 10.5 9.94891 10.5 9.75C10.5 9.55109 10.579 9.36032 10.7197 9.21967C10.8604 9.07902 11.0511 9 11.25 9H15.75C15.9489 9 16.1397 9.07902 16.2804 9.21967C16.421 9.36032 16.5 9.55109 16.5 9.75C16.5 9.94891 16.421 10.1397 16.2804 10.2803C16.1397 10.421 15.9489 10.5 15.75 10.5H11.25ZM11.25 15C11.0511 15 10.8604 14.921 10.7197 14.7803C10.579 14.6397 10.5 14.4489 10.5 14.25C10.5 14.0511 10.579 13.8603 10.7197 13.7197C10.8604 13.579 11.0511 13.5 11.25 13.5H18.75C18.9489 13.5 19.1397 13.579 19.2804 13.7197C19.421 13.8603 19.5 14.0511 19.5 14.25C19.5 14.4489 19.421 14.6397 19.2804 14.7803C19.1397 14.921 18.9489 15 18.75 15H11.25ZM10.5 18.75C10.5 18.9489 10.579 19.1397 10.7197 19.2803C10.8604 19.421 11.0511 19.5 11.25 19.5H21.75C21.9489 19.5 22.1397 19.421 22.2804 19.2803C22.421 19.1397 22.5 18.9489 22.5 18.75C22.5 18.5511 22.421 18.3603 22.2804 18.2197C22.1397 18.079 21.9489 18 21.75 18H11.25C11.0511 18 10.8604 18.079 10.7197 18.2197C10.579 18.3603 10.5 18.5511 10.5 18.75Z"
								fill="#333333"
							/>
						</svg>
					</div>
					<div class="filter-btn">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill="#333333"
								d="M9 16.75C9 16.5511 9.07902 16.3603 9.21967 16.2197C9.36032 16.079 9.55109 16 9.75 16H14.25C14.4489 16 14.6397 16.079 14.7803 16.2197C14.921 16.3603 15 16.5511 15 16.75C15 16.9489 14.921 17.1397 14.7803 17.2803C14.6397 17.421 14.4489 17.5 14.25 17.5H9.75C9.55109 17.5 9.36032 17.421 9.21967 17.2803C9.07902 17.1397 9 16.9489 9 16.75ZM6 12.25C6 12.0511 6.07902 11.8603 6.21967 11.7197C6.36032 11.579 6.55109 11.5 6.75 11.5H17.25C17.4489 11.5 17.6397 11.579 17.7803 11.7197C17.921 11.8603 18 12.0511 18 12.25C18 12.4489 17.921 12.6397 17.7803 12.7803C17.6397 12.921 17.4489 13 17.25 13H6.75C6.55109 13 6.36032 12.921 6.21967 12.7803C6.07902 12.6397 6 12.4489 6 12.25ZM3 7.75C3 7.55109 3.07902 7.36032 3.21967 7.21967C3.36032 7.07902 3.55109 7 3.75 7H20.25C20.4489 7 20.6397 7.07902 20.7803 7.21967C20.921 7.36032 21 7.55109 21 7.75C21 7.94891 20.921 8.13968 20.7803 8.28033C20.6397 8.42098 20.4489 8.5 20.25 8.5H3.75C3.55109 8.5 3.36032 8.42098 3.21967 8.28033C3.07902 8.13968 3 7.94891 3 7.75Z"
							/>
						</svg>
					</div>
				</div>

				<div
					class="col-4"
					v-for="item in sortedProducts"
					:key="item.id"
				>
					<div class="catalog-block">
						<img
							:src="item.img"
							alt=""
						>
						<div class="catalog-block__title">{{item.name}}</div>
						<div class="catalog-block__price">{{item.price}} грн</div>
					</div>
				</div>
			</div>
			<!-- <div class="row">
                <div class="contact-form">
                    <div class="contact-form__title">Підпишіться на нашу розилку та придбайте з вигодою!</div>
                    <input type="text">
                </div>
            </div> -->
		</div>
	</div>
</template>

<script>
import img1 from "@/assets/catalog/catalog-1.png";
import img2 from "@/assets/catalog/catalog-2.png";
import img3 from "@/assets/catalog/catalog-3.png";
import img4 from "@/assets/catalog/catalog-4.png";

export default {
	props: ["withErrors"],
	data: () => ({
		products: [
			{
				id: 1,
				name: "Рожеве Худі",
				price: "120",
				img: img1,
			},
			{
				id: 2,
				name: "Чорне Худі",
				price: "135",
				img: img2,
			},
			{
				id: 3,
				name: "Біле Худі",
				price: "175",
				img: img3,
			},
			{
				id: 4,
				name: "Сіре Худі",
				price: "140",
				img: img4,
			},

			{
				id: 5,
				name: "Чорне Худі",
				price: "175",
				img: img2,
			},
			{
				id: 6,
				name: "Рожеве Худі",
				price: "129",
				img: img1,
			},
			{
				id: 7,
				name: "Сіре Худі",
				price: "115",
				img: img4,
			},
			{
				id: 8,
				name: "Біле Худі",
				price: "150",
				img: img3,
			},

			{
				id: 9,
				name: "Сіре Худі",
				price: "178",
				img: img4,
			},
			{
				id: 10,
				name: "Біле Худі",
				price: "165",
				img: img3,
			},
			{
				id: 11,
				name: "Чорне Худі",
				price: "145",
				img: img2,
			},
			{
				id: 12,
				name: "Рожеве Худі",
				price: "110",
				img: img1,
			},
		],
		config: {},
	}),
	computed: {
		sortedProducts() {
			return this.products;
		},
	},
	created() {
		this.config = this.$store.state.config;
	},
};
</script>

<style>
body {
	max-width: 100vw;
	overflow-x: hidden;
}
.navbar {
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	display: flex;
	height: 80px;
	align-items: center;
	padding: 0 50px;
}
.navbar-links {
	display: flex;
	justify-content: center;
	margin: auto;
	font-weight: 500;
	font-size: 18px;
	line-height: 21px;
	color: #333333;
}
.nav-link {
	cursor: pointer;
}
.nav-link.active,
.nav-link:hover {
	color: #b72025;
}

.photo-block {
	margin: 30px 0;
	position: relative;
}
.photo-block img {
	max-width: 100%;
	width: 100%;
}
.photo-block__title {
	position: absolute;
	bottom: 8px;
	left: 0;
	text-align: center;
	width: 100%;
	font-weight: bold;
	font-size: 32px;
	line-height: 56px;
	letter-spacing: 0.135em;
	color: #ffffff;
}
.photo-block__title.last-text {
	transform: rotate(-90deg);
	position: absolute;
	top: 0;
	left: 100%;
}
.search-input {
	width: 370px;
	height: 55px;
	background: #eeeeee;
	border: none;
	font-size: 18px;
	line-height: 21px;
	color: #333333;
	font-weight: 600;
	/* opacity: 0.5; */
	padding: 17px;
}
.filter-btn {
	margin-left: 24px;
	cursor: pointer;
}
.catalog-block {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.catalog-block__title {
	font-weight: 500;
	font-size: 24px;
	line-height: 28px;
	text-align: center;
	text-transform: uppercase;
	color: #333333;
	margin: 16px 0;
}
.catalog-block__price {
	font-weight: 500;
	font-size: 24px;
	line-height: 28px;
	text-align: center;
	color: #b72025;
	margin-bottom: 30px;
}
</style>