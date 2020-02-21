const typescript = require('@rollup/plugin-typescript');
const json = require('@rollup/plugin-json');
const replace = require('@rollup/plugin-replace');
import {version} from './package.json';

export default {
    input: './src/index.ts',

    plugins: [
        typescript({
            exclude: 'node_modules/**',
            typescript: require('typescript'),
        }),
        json(),
        replace({
            __VERSION__: version
        })
    ],

    output: [{
        format: 'umd',
        name: 'AnyTouch',
        file: `./dist/any-touch.umd.js`,
        sourcemap: true,
    }]
};