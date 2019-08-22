export default {
    computed: {
        $message() {
            return `This is "${this.$options.name}"`;
        },
        hello() {
            return 'This is a message from the mixin';
        },
    },
    mounted() {
        // eslint-disable-next-line no-console
        console.log(`This is the mounted hook from the mixin included in "${this.$options.name}"`);
    },
    methods: {
        $alertMessage() {
            alert(this.message);
        },
    },
};
