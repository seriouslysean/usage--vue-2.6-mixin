// This will be included as a global mixin in the src/main.js file

import { version } from '../../package.json'

export default {
    computed: {
        $version() {
            return version;
        },
    },
};
