
import eel

count =0

@eel.expose 
def say_something(word):      
    global count 
    count = count +1
    
    #呼叫JS 然後隨著呼叫次數的增多，將文字變得更大     
    eel.js_bigger(f'{count}rem')
    
    return f'JS call Python script and return {word}, and this was be called {count} times'


eel.init('web')
eel.start('main.html',size = (600,400))