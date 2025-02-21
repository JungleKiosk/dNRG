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
    <form @submit.prevent="calculate">
        <div v-for="(limiti, ingrediente) in dieta" :key="ingrediente" class="form-group">
            <label :for="ingrediente">
                {{ formatIngredientName(ingrediente) }} ({{ limiti[0] }}% - {{ limiti[1] }}%)
            </label>
            <input type="number" :id="ingrediente" v-model.number="inputValues[ingrediente]" :min="limiti[0]"
                :max="limiti[1]" required class="form-control" />
        </div>
        <button type="submit" class="btn btn_st mt-3">Calcola</button>
    </form>
</template>
