<template>
    <div>
        <h1>Currency Converter</h1>
        <input v-model="amount" type="number" placeholder="Enter an amount">
        <select v-model="fromCurrency">
            <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
        </select>
        <select v-model="toCurrency">
            <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
        </select>
        <button @click="convert">Convert</button>
        <div v-if="result">
            <p>Result: {{ result }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
           amount: 0,
           fromCurrency: 'USD',
           toCurrency: 'EUR',
           result: null,
           currencies: ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD'],
           apiKey: '', // Get your own API key from Exchange Rates API
           apiUrl: 'https://api.exchangeratesapi.io/latest',
        };
    },
    methods() {
        
    }
}
</script>