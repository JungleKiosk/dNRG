<script>
export default {
    name: "DietForm",
    props: ["dieta"],
    data() {
        return {
            inputValues: {},
        };
    },
    methods: {
        calculate() {
            this.$emit("calculate", this.inputValues);
        },
        formatIngredientName(name) {
            return name.replace(/_/g, " ").toUpperCase();
        },
    },
};
</script>

<template>
    <div style="height: 500px;" class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-3 rounded-3 fw-bold align-content-center">
                <form @submit.prevent="calculate">
                    <div v-for="(limiti, ingrediente) in dieta" :key="ingrediente" class="form-group">
                        <label :for="ingrediente">
                            {{ formatIngredientName(ingrediente) }} ({{ limiti[0] }}% - {{ limiti[1] }}%)
                        </label>
                        <input type="number" :id="ingrediente" v-model.number="inputValues[ingrediente]"
                            :min="limiti[0]" :max="limiti[1]" required class="form-control" />
                    </div>
                    <button type="submit" class="btn btn_blulight fw-bold m-3">{{$t('diet_from.calculate')}}</button>

                </form>
            </div>
            <div class="col-12 col-lg-6 text-center">
                <img class=" rounded-3" src="../assets/img/tunder.svg" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped></style>
