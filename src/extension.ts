// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { FileSys } from './filesys';

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

		vscode.window.showInputBox({ placeHolder: 'Enter Class name' }).then(text => {

			if (text === undefined) { return; }

			var currentDoc = vscode.window.activeTextEditor?.document;
			if (currentDoc === undefined)
			{
				vscode.window.showErrorMessage('Please open a file, so we can get the current dir to create file');
				return;
			}
			
			FileSys.CreateFile(currentDoc.fileName, text, (res) => {
				if (res) {
					vscode.window.showInformationMessage('Succes! File created');
				} else {
					vscode.window.showErrorMessage('Oops. Some error while creating file');
				}
			})
		});

		
		
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(createFile);
}

// this method is called when your extension is deactivated
export function deactivate() {}
