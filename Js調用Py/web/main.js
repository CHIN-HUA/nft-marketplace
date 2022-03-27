async function btn_click(){
    result = await eel.say_something('Hello word')()
    document.querySelector('p').innerHTML = result
}


// 跟python expose給JS 很像，不過是要在()內加上 function 名稱
eel.expose(js_bigger)

function js_bigger(count){
    //改變<p>tag 文字的大小     
    document.querySelector('p').style.fontSize = count
}