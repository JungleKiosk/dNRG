<template>
    <div class="results mt-5 p-3">
        <h2>{{ $t('results.title') }}</h2>

        <!-- Messaggio di avviso -->
        <div v-if="results.warning_message" class="alert alert-warning">
            {{ results.warning_message }}
        </div>

        <!-- Tabella dei risultati -->
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">{{ $t('results.parameter') }}</th>
                    <th scope="col">{{ $t('results.description') }}</th>
                    <th scope="col">{{ $t('results.value') }}</th>
                    <th scope="col">{{ $t('results.unit') }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>S_crop</strong></td>
                    <td>{{ $t('results.S_crop') }}</td>
                    <td>{{ results.S_IT }}</td>
                    <td>ha</td>
                </tr>
                <tr>
                    <td><strong>A_capi</strong></td>
                    <td>{{ $t('results.A_capi') }}</td>
                    <td>{{ results.A_capi }}</td>
                    <td>capi</td>
                </tr>
                <tr :class="{ 'highlight-warning': isOutOfRange(results.M_B_tot) }">
                    <td><strong>M_B_tot</strong></td>
                    <td>{{ $t('results.M_B_tot') }}</td>
                    <td>
                        {{ results.M_B_tot }}
                        <span v-if="isOutOfRange(results.M_B_tot)">❌</span>
                    </td>
                    <td>ton</td>
                </tr>
                <tr>
                    <td><strong>E_el</strong></td>
                    <td>{{ $t('results.E_el') }}</td>
                    <td>{{ results.E_el }}</td>
                    <td>kWh</td>
                </tr>
                <tr>
                    <td><strong>M_ch4_tot</strong></td>
                    <td>{{ $t('results.M_ch4_tot') }}</td>
                    <td>{{ results.M_ch4_tot }}</td>
                    <td>Nm³</td>
                </tr>
                <tr>
                    <td><strong>M_B_crop</strong></td>
                    <td>{{ $t('results.M_B_crop') }}</td>
                    <td>{{ results.M_B_IT }}</td>
                    <td>ton</td>
                </tr>
                <tr>
                    <td><strong>M_B_animal</strong></td>
                    <td>{{ $t('results.M_B_animal') }}</td>
                    <td>{{ results.M_B_LS }}</td>
                    <td>ton</td>
                </tr>
            </tbody>
        </table>

        <!-- Debug info (opzionale) -->
        <!-- <h3 class="mt-5">Valori di Debug:</h3>
        <pre>{{ results.debug_info }}</pre> -->
    </div>
</template>

<script>
export default {
    name: "DietResult",
    props: ["results"],
    methods: {
        // Controlla se M_B_tot è fuori dal range 40-70
        isOutOfRange(value) {
            const numericValue = parseFloat(value);
            return !isNaN(numericValue) && (numericValue < 40 || numericValue > 70);
        },
    },
};
</script>

<style scoped>
.results table {
    width: 100%;
    border-collapse: collapse;
}

.results th,
.results td {
    border: 1px solid #ddd;
    padding: 8px;
}

.results th {
    background-color: #f2f2f2;
    text-align: left;
}

.alert-warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
    padding: 10px;
    border-radius: 5px;
}

/* Evidenzia il valore fuori range */
.highlight-warning {
    background-color: #ffcdcd;
    font-weight: bold;
}
</style>
