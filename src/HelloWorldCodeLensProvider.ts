import * as vscode from 'vscode';

export class HelloWorldCodeLensProvider implements vscode.CodeLensProvider {
	
	async provideCodeLenses(document: vscode.TextDocument): Promise<vscode.CodeLens[]> {
		const positionOfCodelens = new vscode.Range(0,0,0,0);
		const helloWorldCommand: vscode.Command = {
			command: 'reproducer-codelens-warningmessage.helloWorld',
			title: 'Call Hello World command'
		};
		return [new vscode.CodeLens(positionOfCodelens, helloWorldCommand)];
	}
	
}