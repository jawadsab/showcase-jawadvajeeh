#!/usr/bin/env node
console.log('Mohammed Abdul Jawad Vajeeh - Software Engineer!🖥️');

const [, , command, ...args] = process.argv;

if (command) {
	switch (command) {
		case "profession":
			displayProfession();
			break;

		default:
			console.log("Unknown command. Available commands: profession");
	}
}


function displayProfession() {
	console.log('Jawad Vajeeh is a software engineer')
}