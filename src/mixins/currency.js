export default {
    methods: {
        $formatCurrency(currency) {
            return `$${currency.toFixed(2)}`;
        },
    },
};
