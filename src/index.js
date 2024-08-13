const { app,BrowserWindow, Menu} = require('electron');
const url = require('url');
const path = require('path');

if (process.env.NODE_ENV !== 'production'){
    require('electron-reload')(__dirname, {
        // los campos que se pongan aca serán los que se revisaran
        // el objeto de configuración puede decirle que reinicio otros objetos, no solo las ventanas
        electron: path.join(__dirname, "../node_modules", ".bin", "electron")
        // esta parte de aqui reinicia tambien la pantalla cuando se hacen cambios 
        //en archivos de node o de electron.
    })
}


let mainWindow

app.on('ready', () =>{
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "views/index.html"),
        protocol: 'file',
        slashes: true
    }
    ))
    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);
});

const templateMenu = [

    {
        label: 'File',
        submenu: [
            {
                label: 'Select file',
                accelerator: 'Ctrl+O',
                click() {
                    alert("aun no hay nada definido")
                }
            }
        ]
    }

]