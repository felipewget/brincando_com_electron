// Include Electron
const { app, BrowserWindow, Menu } = require('electron');

let mainWindow = null;
let modalWindow = null;

app.on('ready', () => {

	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		resizable: true,
		alwaysOnTop: false, // Fica em cima de todos os programas
		show: false, // Rodar em Background
		frame: true, // Barra de header dos programas como minimize, maximize e close 
		transparent: false // janela transparente
	});

	// Posso deixar rodando em background e so mostrar a janela quando o mainWIndow tiver carregado

	// mainWindow.loadURL('http://google.com.br');
	// mainWindow.loadURL('file://' + __dirname + '/index.html');
	mainWindow.loadFile('index.html');

	// Abre o inspetor de codigo do chroome, fantastico para debug
	mainWindow.webContents.openDevTools();

	mainWindow.on('ready-to-show', () => {
		mainWindow.show();
	});

	mainWindow.on('resize', resizePage);
	mainWindow.on('move', resizePage); // quando for movida


	//// Modal

	// modalWindow = new BrowserWindow({
	// 	parent: mainWindow, // esta subordinada a janela mainWindow
	// 	modal: true,
	// 	width: 400,
	// 	height: 200,
	// })

	// modalWindow.loadFile('modal.html');


	const template = [
		{
			label: "Arquivo",
			submenu: [
				{ label: "Abrir" },
				{ label: "sair", role: "close" }
			]
		},
		{
			label: "Editar",
			submenu: [
				{ label: "Sub 2", accelerator: "CmdOrCtrl+h", click(){ console.log("ola, atalho funcionanou")} },
				{ label: "Sub 3" }
			]
		},
	]

	const menu = Menu.buildFromTemplate( template );
	Menu.setApplicationMenu( menu );


	// Atalhos

});

function resizePage(){
	console.log( mainWindow.getSize() )
	console.log( mainWindow.getPosition() )
}