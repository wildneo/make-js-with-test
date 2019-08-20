#!/usr/bin/env node

import create from './creator';

const firstArg = process.argv[2];
const secondArg = process.argv[3];

create(firstArg, secondArg);
