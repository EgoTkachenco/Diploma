<template>
    <nav class="nav" v-if="user">
        <div class="text-white">Bug Seeker</div>

        <div class="nav-right" v-if="!isPreview && !isTest">
            <div v-if="isTeacher" class="nav__btn" @click="openTestModal">Створити тест</div>   
            <router-link :to="{name: 'Dashboard'}" class="nav__btn">
                Панель керування
            </router-link>
            <router-link :to="{name: 'Demo'}" class="nav__btn">
                Демо
            </router-link>
            <router-link :to="{name: 'Preview'}" class="nav__btn">
                Перегляд
            </router-link>
            <router-link :to="{name: 'Tests'}" class="nav__btn">
                Тести
            </router-link>
            <router-link :to="{name: 'Rating'}" class="nav__btn">
                Рейтинг
            </router-link>
            <div class="nav__btn" @click="logout">Вихід</div>   
        </div>
        <div class="nav-right" v-else-if="isPreview">
            
            <router-link :to="{name: 'Dashboard'}" class="nav__btn">
                Повернутися
            </router-link>
        </div>
        <div class="nav-right" v-else-if="isTest">

        </div>
    </nav>
</template>

<script>
export default {
    data: () => ({
        isPreview: false,
        isTest: false
    }),
    computed: {
        isTeacher() {
            return this.$store.getters.isTeacher;
        },
        user() {
            return this.$store.state.currentUser
        },
        config() {
            return this.$store.config
        },
        completed() {
            return this.config.error.reduce((sum, el) => {
                if(el.isFinded && el.isSelected) {
                    sum++
                }
                return sum
            }, 0)
        }
    },
    watch: {
        $route(val) {
            if(val.name === 'Preview') {
                this.isPreview = true
            } else {
                this.isPreview = false
            }
        }
    },
    methods: {
        logout() {
            this.$store.commit('LOG_OUT')
            this.$router.push({name: 'SignIn'})
        },
        openTestModal() {
            this.$store.commit('TOGGLE_TEST_MODAL')
        }
    }
}
</script>

<style  lang="scss">
.nav {
    height: 60px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    background: #191919;
    padding: 8px 32px;
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
}

.nav-right {
    margin-left: auto;
    display: flex;
}
.nav__btn {
    padding: 0;
    background: none;
    border: 0;
    padding: 0.5rem;
    position: relative;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
        color: #fff;
        box-shadow: 0 1px 0 white;
    }
}
</style>
