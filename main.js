// タスク一覧の初期データとして次の値を配列で持つ
//   - 変数名は「todos」とする
//   - 初期データとして次の3つの値を配列に格納していおく
//     1. 掃除
//     2. 買い物
//     3. 散歩
// ここに変数「todos」を用意する
let todos = ['掃除','買い物','散歩'];



// ここに、Todoリストの機能を入力された文字によって使い分けるための文字列を配列で所持する
//   - 変数名は「commands」とする
//   - commandsに格納する文字列は次の順番で保持する
//     1. 確認
//     2. 追加
//     3. 削除
//     4. 終了
// ここに変数「commands」を用意する
let commands = ['確認','追加','削除','終了'];

// ここに、promptで入力したものを保持しておくための変数「input」を用意する
let input;

// ここに「終了」と入力されたらループを終了するwhileループを作成する
//   - whileループの中でprompt関数を使って、値を入力できるようにして、入力された内容は変数「input」に格納する
//     - prompt: https://developer.mozilla.org/ja/docs/Web/API/Window/prompt
//   - 変数inputの値によって、次の機能を実行する
//     1. 「確認」と入力された時: showTodos関数を実行する
//     2. 「追加」と入力された時: createTodo関数を実行する
//     3. 「削除」と入力された時: deleteTodo関数を実行する
//     4. 「終了」と入力された時: Consoleに'終了します'と表示して、Whileループを終了する
//   - 「確認」「追加」「削除」「終了」以外がinputに代入されたら「「確認,追加,削除,終了」以外は入力できません」とConsoleに表示する

while(input != '終了' && input != 'e'){
    input = prompt('実行する処理を選択 → 確認 / 追加 / 削除 / 終了');
    if(input === '確認'){
        showTodos();
    }else if(input === '追加'){
        createTodo();
    }else if(input === '削除'){
        deleteTodo();
    }else if(input === '終了'){
        console.log('終了します');
    }else{
        console.log('「「確認,追加,削除,終了」以外は入力できません」');
    }
}

// ここでWhileループを抜けた後もタスク一覧を表示する(最終的なタスク一覧を確認するため)
showTodos();

/**
* 「確認」が入力されたときに実行される関数「showTodos関数」を用意する
*    - 以下の形式でtodosの内容を表示する (todosの中に「'掃除', '買い物', '散歩'」が格納されている場合)
*
*   表示される内容(ヒント、forループもしくはforEachをつかう)
*   ↓
*   ========================
*   現在持っているのタスク一覧
*   ========================
*   0 : 掃除
*   1 : 買い物
*   2 : 散歩
*
*
*    - todosの中身がからの時は以下のように表示する
*
*   表示される内容
*   ↓
*   ========================
*   現在持っているのタスク一覧
*   ========================
*   タスクなし
*/
// ここにshowTodos関数を作る
function showTodos(){
    if(todos.indexOf('掃除', '買い物', '散歩') >= 0){
        console.log('========================');
        console.log('現在持っているのタスク一覧');
        console.log('========================');    
        for(let i = 0; i < todos.length; i++){
            console.log( i + '：' + todos[i]);
        }
    }else if(todos.length === 0){
        console.log('========================');
        console.log('現在持っているのタスク一覧');
        console.log('========================');   
        console.log('タスクなし');       
    }else{
        console.log('========================');
        console.log('現在持っているのタスク一覧');
        console.log('========================');    
        for(let i = 0; i < todos.length; i++){
            console.log( i + '：' + todos[i]);
        }
    }
}
/**
* 「追加」が入力されたときに実行される関数「createTodo関数」を用意する
*    - promptを使って追加するタスクを入力できるようにする
*      - 入力ボックスに表示するメッセージは「'タスクを入力してください'」とする
*    - promptに値が入力されないで「OK」ボタンがおされたらalertで「'何も入力されていないためスキップします'」と表示する
*    - promptに値が入力された状態で「OK」ボタンがおされたら次の処理をする
*      1. 入力された内容をtodos(配列)の末尾に追加する。
*      2. 「'新しいタスクを追加しました。'」とalert表示する
*      3. showTodos関数を実行して、現在保持しているタスク一覧を表示する
*/
// ここにcreateTodo関数を作る
function createTodo(){
    const myPrompt = prompt('タスクを入力してください');
    if(myPrompt === ''){
        alert('何も入力されていないためスキップします');
    }else{
        todos.push(myPrompt);
        alert('新しいタスクが追加されました。')
    }
    showTodos();
};


/**
* 「削除」が入力されたときに実行される関数
*    - promptを使って削除するタスクのインデックス番号を入力できるようにする
*      - 入力ボックスに表示するメッセージは「'削除するタスクの番号を指定してください'」とする
*    - promptで入力された数字は `文字列` として扱われるため、数値に変換する
*      - 数字('1')を数値(1)に変換するにはparseInt関数をつかう
*        - parseInt: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/parseInt
*    - promptに値が入力された値が不正な場合は「'不正な値のためスキップします'」とalert表示する
*      - 不正な値とは、配列のインデックス番号以外の値を指す。(配列に5個値があれば、「0, 1, 2, 3, 4」だけが正しい値で、それ以外は不正な値になる)
*      - parseIntした結果「NaN」という値が出たときの対応策として「isNaN」関数が使える
*        - isNaN: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/isNaN
*    - promptに値が入力された値が正しければ次の処理をする
*      1. 配列の組み込みメソッド「splice」を使って、入力されたインデックス番号に対応した値を配列から削除する
*        - splice: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*        - 削除した値は変数deletedTodosという変数に代入する(上記ドキュメントを読むと分かる通り、削除した値が1つだけでも戻り値は配列となることに注意)
*      2. 「'〇〇を削除しました'」とalert表示する
*        - 「〇〇」には削除した「タスク名」が入る
*          - 例: 「掃除」を削除した場合は、「'掃除を削除しました'」とalert表示する
*      3. showTodos関数を実行して、現在保持しているタスク一覧を表示する
*/
// ここにdeleteTodo関数を作る
function deleteTodo(){
    
    let deletePrompt = parseInt(prompt('削除するタスクの番号を指定してください'));
    if(isNaN(deletePrompt) || deletePrompt >= todos.length){
        alert('不正な値のためスキップします');
    }else{
        let deletedTodos = todos.splice(deletePrompt,1);
        alert(deletedTodos + 'を削除しました')
    }
    showTodos();
}