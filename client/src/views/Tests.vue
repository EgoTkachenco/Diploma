<template>
    <div class="container">
        <div class="row mt-5" v-if="tests">
            <div class="col-12">
                <h2>Тести</h2>
            </div>
            <div class="col-12 my-3">
                <hr>
            </div>
            <div class="col-4" v-for="(test, index) in tests" :key="index">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><b>{{test.title}}</b></h5>
                        <p class="card-text">{{test.description}}</p>
                        
                        <div class="mt-2 d-flex" >
                            <button @click="removeTest(test.id)" tag="button" v-if="test.isOwner" class="btn btn-danger">
                               Видалити
                            </button>
                            <button @click="startTest(test)" tag="button" class="btn btn-primary ms-auto">
                                Почати Тест
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.state.currentUser
        },
        tests() {
            return this.$store.state.tests ? this.$store.state.tests.map(test => {
                return {...test, isOwner: this.user.id === Number(test.author_id) } 
            }) : null;
        }
    },
    methods: {
        removeTest(id) {
            this.$store.dispatch('removeTest', id);
        },
        startTest(test) {
            this.$store.dispatch('startTest', test)
        }
    },
    created() {
        this.$store.dispatch('getTests');
    }
}
</script>
