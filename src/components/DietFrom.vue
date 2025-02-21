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
    <div class="container mt-5">
        <div class="row">
            <div class="col-6 col-lg-3">
                <form @submit.prevent="calculate">
                    <div v-for="(limiti, ingrediente) in dieta" :key="ingrediente" class="form-group">
                        <label :for="ingrediente">
                            {{ formatIngredientName(ingrediente) }} ({{ limiti[0] }}% - {{ limiti[1] }}%)
                        </label>
                        <input type="number" :id="ingrediente" v-model.number="inputValues[ingrediente]" :min="limiti[0]"
                            :max="limiti[1]" required class="form-control" />
                    </div>
                    <button type="submit" class="btn btn_blulight fw-bold mt-3">Calcola</button>

                </form>
            </div>
        </div>
    </div>
</template>
