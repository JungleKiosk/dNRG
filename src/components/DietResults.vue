<template>
    <div class="results mt-5">
        <h2>Risultati:</h2>

        <div v-if="results.warning_message" class="alert alert-warning">
            {{ results.warning_message }}
        </div>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Parametro</th>
                    <th>Descrizione</th>
                    <th>Valore</th>
                    <th>UdM</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>S_crop</strong></td>
                    <td>Superficie coltivata a coltura energetica</td>
                    <td>{{ results.S_IT }}</td>
                    <td>ha</td>
                </tr>
                <tr>
                    <td><strong>A_capi</strong></td>
                    <td>Numero di Capi di Bestiame</td>
                    <td>{{ results.A_capi }}</td>
                    <td>capi</td>
                </tr>
                <tr>
                    <td :class="{ 'highlight-warning': isOutOfRange(results.M_B_tot) }">
                        <strong>M_B_tot</strong>
                    </td>
                    <td :class="{ 'highlight-warning': isOutOfRange(results.M_B_tot) }">
                        Massa di Biogas Totale
                    </td>
                    <td :class="{ 'highlight-warning': isOutOfRange(results.M_B_tot) }">
                        {{ results.M_B_tot }}<span v-if="isOutOfRange(results.M_B_tot)">❌</span>
                    </td>
                    <td :class="{ 'highlight-warning': isOutOfRange(results.M_B_tot) }">
                    ton
                    </td>
                </tr>
                <tr>
                    <td>E_el</td>
                    <td>Energia Elettrica Giornaliera</td>
                    <td>{{ results.E_el }}</td>
                    <td>kWh</td>
                </tr>
                <tr>
                    <td>M_ch4_tot</td>
                    <td>Metano Totale Necessario</td>
                    <td>{{ results.M_ch4_tot }}</td>
                    <td>Nm³</td>
                </tr>
                <tr>
                    <td>M_B_crop</td>
                    <td>Massa di Biogas da coltura energetica</td>
                    <td>{{ results.M_B_IT }}</td>
                    <td>ton</td>
                </tr>
                <tr>
                    <td>M_B_animal</td>
                    <td>Massa di Biogas da reflui zootecnici</td>
                    <td>{{ results.M_B_LS }}</td>
                    <td>ton</td>
                </tr>
            </tbody>
        </table>

        <h3 class="mt-5">Valori di Debug:</h3>
        <pre>{{ results.debug_info }}</pre>
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
            return numericValue < 40 || numericValue > 70;
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