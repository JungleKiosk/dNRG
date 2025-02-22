<script>
import { useI18n } from 'vue-i18n';
import ColorMode from "./ColorMode.vue";

export default {
    name: "Navbar",
    components: {
        ColorMode
    },
    setup() {
        const { locale } = useI18n();
        const changeLanguage = (lang) => {
            locale.value = lang;
            localStorage.setItem('language', lang); // Salva la lingua selezionata
        };
        // Controlla se c'è una lingua salvata
        const currentLang = localStorage.getItem('language') || 'it';
        locale.value = currentLang;
        return { changeLanguage, currentLang };
    }
};
</script>

<template>
    <nav class="navbar justify-content-center">
        <ul>
            <li><router-link to="/">{{ $t('navbar.home') }}</router-link></li>
            <li><router-link to="/parameters">{{ $t('navbar.parameters') }}</router-link></li>
            <li>
                <ColorMode></ColorMode>
            </li>
        </ul>
        <!-- Pulsante cambio lingua -->
        <div class="language-switcher">
            <button @click="changeLanguage('it')" :class="{ active: currentLang === 'it' }">🇮🇹 IT</button>
            <button @click="changeLanguage('en')" :class="{ active: currentLang === 'en' }">🇬🇧 EN</button>
        </div>
    </nav>
</template>


<style></style>