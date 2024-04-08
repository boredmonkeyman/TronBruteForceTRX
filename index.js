const fs = require('fs');
const TronWeb = require('tronweb');

const fullNode = 'https://api.trongrid.io';
const solidityNode = 'https://api.trongrid.io';
const eventServer = 'https://api.trongrid.io';

const tronWeb = new TronWeb(fullNode, solidityNode, eventServer);

async function generateTrxAddress() {
  const account = await tronWeb.createAccount();
  const address = account.address.base58;
  const privateKey = account.privateKey;

  return {
    address,
    privateKey
  };
}

async function checkAddressBalance(address) {
  const balance = await tronWeb.trx.getBalance(address);

  return balance;
}

async function saveAddressToFile(address, privateKey) {
  const data = `Address: ${address}\nPrivate Key: ${privateKey}\n\n`;
  fs.appendFileSync('found.txt', data);
}

async function main() {
  try {
    while (true) {
      const { address, privateKey } = await generateTrxAddress();
      const balance = await checkAddressBalance(address);

      console.log('TRX Address:', address);
      console.log('Private Key:', privateKey);
      console.log('Balance:', balance / 1e6, 'TRX');

      if (balance > 0) {
        await saveAddressToFile(address, privateKey);
        console.log('Address saved in found.txt');
      }

      // Adding a delay of 0.5 seconds
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
