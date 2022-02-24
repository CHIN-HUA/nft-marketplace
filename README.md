# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
2022/2/14 更新上傳操作介面

2022/2/15 除連接區塊鏈，完成全面部屬

2022/2/24 發現部屬有坑npx hardhat run scripts/deploy.js --network localhost無法運作，改用npx hardhat run scripts/deploy.js --network hardhat

![image](https://user-images.githubusercontent.com/72617049/155530984-7983329c-8afe-472d-84a2-155e3d89c547.png)
