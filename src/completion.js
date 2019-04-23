const vscode = require('vscode');
const util = require('./util');
/**
 * 自动提示实现，这里模拟一个很简单的操作
 * 当输入 this.dependencies.xxx时自动把package.json中的依赖带出来
 * 当然这个例子没啥实际意义，仅仅是为了演示如何实现功能
 * @param {*} document 
 * @param {*} position 
 * @param {*} token 
 * @param {*} context 
 */

var dependencies = ["sadasdas","dasdasddddddddd","int i"];

function provideCompletionItems(document, position, token, context) {
    
    const line = document.lineAt(position);
    
    //const projectPath = util.getProjectPath(document);
    
    // 只截取到光标位置为止，防止一些特殊情况
    const lineText = line.text.substring(0, position.character);
    // 简单匹配，只要当前光标前的字符串为`this.dependencies.`都自动带出所有的依赖
    
    if(true) {
        //const json = require(`${projectPath}/package.json`);
        //const dependencies = Object.keys(json.dependencies || {}).concat(Object.keys(json.devDependencies || {}));
        return dependencies.map(dep => {
            // vscode.CompletionItemKind 表示提示的类型
            return new vscode.CompletionItem(dep, vscode.CompletionItemKind.Text);


        })
    }

}

/**
 * 光标选中当前自动补全item时触发动作，一般情况下无需处理
 * @param {*} item 
 * @param {*} token 
 */
function resolveCompletionItem(item, token) {
    return null;
}

module.exports = function(context) {
    // 注册代码建议提示，只有当按下“.”时才触发
    console.log("completion method registes begin");
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('java', {
        provideCompletionItems,
        resolveCompletionItem
    }));
    console.log("completion method registes done");

    vscode.window.onDidChangeActiveTextEditor(addItem);

    vscode.workspace.onDidChangeTextDocument(textChange);
};

function textChange(){
    console.log("TextEditor edit");
    const document = vscode.window.activeTextEditor.document;
    const position = vscode.window.activeTextEditor.selection.active;
    var cursorline = position.line;
    var cursorlocation = position.character;
    var code = "";
    for (var i = 0; i < cursorline; i++){
        code += document.lineAt(i).text;
    }
    code += document.lineAt(cursorline).text.substring(0,cursorlocation+1);
    console.log(code);
}


function addItem(){
    console.log("onDidChangeActiveTextEditor begin");
    dependencies[dependencies.length] = "double jjjjj"
}