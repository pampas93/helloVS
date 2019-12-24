// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "hellovs" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.hellovs', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Boom! My first VS code extension notification!');
	});

	let createFile = vscode.commands.registerCommand('extension.newfile', () => {
		var fileContent = "Hello World!";
		var filepath = "C:\\Users\\Abhi\\Documents\\mynewfile.txt";

		fs.writeFile(filepath, fileContent, (err) => {

			if (err) { 
				vscode.window.showErrorMessage('Sorry! Exception occured. Check file name again maybe?');
				throw err;
			}

			console.log("The file was succesfully saved!");
		}); 
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(createFile);
}

// this method is called when your extension is deactivated
export function deactivate() {}
