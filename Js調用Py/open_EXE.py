import os
import eel

n = os.startfile(r"C:\Users\USER\Desktop\ooo\midi.exe")

@eel.expose 
def say_EXE(ar):      
    return n


eel.init('web')
eel.start('main.html',size = (600,400))

