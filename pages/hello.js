// const { spawn } = require('child_process');

// import { constants } from 'buffer';

// const childpython = spawn('python3',['py-script.py', 'a']);

// childpython.stdout.on('data',(data)=>{
//   console.log(data.toString());
// });
// childpython.stderr.on('data',(data)=>{
//   console.log(`stderr: ${data}`);
// });

// childpython.on('close',(code)=>{
//   console.log(code);
// });

// const { exec } = require('child_process');

// exec('"/py-script.py"');

    // const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++) {
    var workerProcess = child_process.spawn('python', ['py-script.py', i]);
    
    workerProcess.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });
    
    workerProcess.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });
    
    workerProcess.on('close', function (code) {
        console.log('子进程已退出，退出码 '+code);
    });
}
