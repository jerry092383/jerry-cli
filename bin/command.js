#!/usr/bin/env node
const program = require('commander');
const package = require('../package.json');
const file = require('./tool')();

program
    .version(package.version)
    .option('-t, --ts', 'create a ts file')
    .option('-v, --vue', 'create a vue file')
    .parse(process.argv);

program
    .command('create <fileName>')
    .description('create a file')
    .action((fileName) => {
        console.log('program :>> ', program);
        if (!fileName) {
            console.log('Please give me a name');
        }
        if (program.vue) {
            file.make('./Template/BaseComponent.vue', fileName, 'vue');
        }
        if (program.ts) {
            file.make('./Mixins/mixin.ts', fileName, 'ts')
        }
    });

program.parse(process.argv);