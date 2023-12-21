<template>
    <div id="app">
        <h1>Currency Converter</h1>
        <div class="container">
            <div class="container-one">
                <select name="first-currency" id="first-currency">
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
                <input type="number" name="input-one" id="input-one" />
            </div>
            <div class="container-two">
                <button>Switch</button>
                <h4 id="baseValue">1 USD = 0.91 EUR</h4>
            </div>
            <div class="container-three">
                <select name="second-currency" id="second-currency">
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
                <input type="number" id="amount-two" placeholder="0" disabled/>
            </div>
            <div class="container-four">
                <h4 id="lastlyUpdated">Last Updated December 21, 2023</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
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
    
}
</style>