#!/usr/bin/env node

import pkgJSON from './package.json' assert {type: 'json'};
import welcome from 'cli-welcome';
import chalk from 'chalk';

const twitterClr = chalk.hex('#1da1f2').bold.inverse;
const githubClr = chalk.hex('#f5f5f5').bold.inverse;
const blogClr = chalk.hex('#00ab6c').bold.inverse;
const dim = chalk.dim;

const log = console.log;

welcome({
	title: ' Mohammed Abdul Jawad Vajeeh ',
	tagLine: "Results-Driven React Developer | Expertise in Front-End Development.",
	description: pkgJSON.description,
	version: pkgJSON.version,
	bgColor: "#FFF689",
	bold: true,
	clear: true
});

log(`
${chalk.italic(`Experienced in Web Development and cross-platform Mobile Application development. Recongnized for my ability to quickly adapt to new technologies and make proactive contributions. Solid foundation in HTML, CSS Javascript, Typescript and React`)}

${twitterClr(" Twitter ")} ${dim("https://x.com/JVajeeh")}
${githubClr(" Github ")} ${dim("https://github.com/jawadsab")}
${blogClr(" Blog ")} ${dim("https://vajeeh.hashnode.dev/")}
`)