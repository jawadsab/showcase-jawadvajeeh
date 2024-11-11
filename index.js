#!/usr/bin/env node

import pkgJSON from './package.json' assert {type: 'json'};
import welcome from 'cli-welcome';

welcome({
	title: pkgJSON.name,
	tagLine: `Welcome to my CLI portfolio!`,
	description: pkgJSON.description,
	version: pkgJSON.version,
	bgColor: "#FFF689",
	bold: true,
	clear: true
});