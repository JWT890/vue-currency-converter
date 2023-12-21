<template>
    <div id="app">
        <h1>Currency Converter</h1>
        <div class="container">
            <div class="container-one">
                <select name="first-currency" id="first-currency" v-model="currency_one">
                    <option value=”AED“>AED</option>
                    <option value=”ARS”>ARS</option>
                    <option value=”AUD”>AUD</option>
                    <option value=”BGN”>BGN</option>
                    <option value=”BRL”>BRL</option>
                    <option value=”CAD”>CAD</option>
                    <option value=”CHF”>CHF</option>
                    <option value=”CNY”>CNY</option>
                    <option value=”DKK”>DKK</option>
                    <option value=”DOP”>DOP</option>
                    <option value=”EGP”>EGP</option>
                    <option value=”EUR”>EUR</option>
                    <option value=”GBP”>GBP</option>
                    <option value=”HKD”>HKD</option>
                    <option value=”ILS”>ILS</option>
                    <option value=”INR”>INR</option>
                    <option value=”JPY”>JPY</option>
                    <option value=”LPB”>LPB</option>
                    <option value="MAD">MAD</option>
                    <option value=”NOK”>NOK</option>
                    <option value=”NZD”>NZD</option>
                    <option value=”RUB”>RUB</option>
                    <option value=”SAR”>SAR</option>
                    <option value=”SEK”>SEK</option>
                    <option value=”SGD”>SGD</option>
                    <option value=”THB”>THB</option>
                    <option value=”TRY”>TRY</option>
                    <option value=”USD”>USD</option>
                    <option value=”UYU”>UYU</option>
                    <option value=”ZAR”>ZAR</option>
                    <option value=”ZWL”>ZWL</option>
                </select>
                <input 
                type="number" 
                name="input-one" 
                id="input-one" 
                v-model="amountOne" 
                @input="fetchData()"
                />
            </div>
            <div class="container-two">
                <button @click="switchValues()">Switch</button>
                <h4 id="baseValue">1 {{ currency_one }} = {{ rate }}  {{ currency_two }}</h4>
            </div>
            <div class="container-three">
                <select name="second-currency" id="second-currency" v-model="currency_two">
                    <option value=”AED“>AED</option>
                    <option value=”ARS”>ARS</option>
                    <option value=”AUD”>AUD</option>
                    <option value=”BGN”>BGN</option>
                    <option value=”BRL”>BRL</option>
                    <option value=”CAD”>CAD</option>
                    <option value=”CHF”>CHF</option>
                    <option value=”CNY”>CNY</option>
                    <option value=”DKK”>DKK</option>
                    <option value=”DOP”>DOP</option>
                    <option value=”EGP”>EGP</option>
                    <option value=”EUR”>EUR</option>
                    <option value=”GBP”>GBP</option>
                    <option value=”HKD”>HKD</option>
                    <option value=”ILS”>ILS</option>
                    <option value=”INR”>INR</option>
                    <option value=”JPY”>JPY</option>
                    <option value=”LPB”>LPB</option>
                    <option value="MAD">MAD</option>
                    <option value=”NOK”>NOK</option>
                    <option value=”NZD”>NZD</option>
                    <option value=”RUB”>RUB</option>
                    <option value=”SAR”>SAR</option>
                    <option value=”SEK”>SEK</option>
                    <option value=”SGD”>SGD</option>
                    <option value=”THB”>THB</option>
                    <option value=”TRY”>TRY</option>
                    <option value=”USD”>USD</option>
                    <option value=”UYU”>UYU</option>
                    <option value=”ZAR”>ZAR</option>
                    <option value=”ZWL”>ZWL</option>
                </select>
                <input type="number" id="amount-two" placeholder="0" disabled v-model="amountTwo"/>
            </div>
            <div class="container-four">
                <h4 id="Updated"> 
                Updated: {{ data.time_last_update_utc }}
                </h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [],
            currency_one: "USD",
            currency_two: "EUR",
            rate: "",
            amountOne: 1,
            amountTwo: 0,
        };
    },
    methods: {
        fetchData() {
            fetch(
                `https://v6.exchangerate-api.com/v6/YourAPIKey/latest/${this.currency_one}`
            )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.data = data;
                this.rate = data.conversion_rates[this.currency_two];
                this.amountTwo = this.amountOne * this.rate.toFixed(2);
            });
        },
        
        switchValues() {
            const temporaryValue = this.currency_one
            this.currency_one = this.currency_two
            this.currency_two = temporaryValue;
            this.fetchData();
        }
    },
    mounted() {
        this.fetchData();
    }
};
</script>

<style>
html {
    background: #f4f4f4f4;
}
#app {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
    color: #5fbaaf;
}

img {
    width: 150px;
}

.container {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
}

.container-two {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
}

.container-two button {
    padding: 5px;
    font-size: 18px;
    background-color: #5fbaaf;
    color: #fff;
    width: 30%;
    height: 10%;
    border: none;
    outline: none;
}

select {
    padding: 5px;
    margin: 5px;
    border: 1px solid rgba(0,0,0,0.5);
    outline: none;
}

input {
    padding: 5px;
    margin: 5px;
    border: 1px solid rgba(0,0,0,0.5);
    outline: none;
    font-size: 80px;
}

#Updated {
    font-weight: 500;
}

#baseValue {
    font-weight: 500;
}
</style>