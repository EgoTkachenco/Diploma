<template>
    <div class="container">
        <div class="row mt-5">
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
                        
                        <div class="mt-2 d-flex">
                            <router-link tag="button" to="/preview" class="btn btn-primary ms-auto">
                                Почати Тест
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        tests: [
            {
                title: 'Тест сторінки каталогу', 
                description: 'Потрібно протестувати головну сторінку магазину з каталогом та відмітити знайдені баги'
            }
        ]
    })
}
</script>
