import styles from '../styles/Home.module.css'
// import Hello from './hello';
export default function Home() {
  // const { exec } = require('child_process');
  // const child_process = require('child_process');
  // // const fs = require('fs');
  // function a (){
    
  //   for(var i=0; i<3; i++) {
  //     var workerProcess = child_process.spawn('python', ['py-script.py', i]);
    
  //     workerProcess.stdout.on('data', function (data) {
  //         console.log('stdout: ' + data);
  //     });
    
  //     workerProcess.stderr.on('data', function (data) {
  //         console.log('stderr: ' + data);
  //     });
    
  //     workerProcess.on('close', function (code) {
  //         console.log('子进程已退出，退出码 '+code);
  //     });
  //   }
  // }
  // exec('"file/test.sh" arg1 arg2');

  return (
    <>
    <div className={styles.container}>
      
      ok  

    </div>
    <button onClick={()=>{a()}}> require </button>
    </>
  )
}
