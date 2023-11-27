## Disclaimer

This code is provided for educational purposes only. It is intended to demonstrate the functionality of generating TRX addresses and checking their balances on the TRON blockchain. The code should not be used for any malicious or unauthorized activities. The author and contributors of this code are not responsible for any misuse or illegal use of the information or actions derived from it. Use this code responsibly and at your own risk.

# Tron BruteForce TRX

This repository contains a JavaScript script that generates TRX (TRON) addresses and checks their balance on the TRON blockchain. The script utilizes the TronWeb library for interacting with the TRON blockchain.

## Description

The script generates TRX addresses randomly and checks their balance. If an address has a non-zero balance, it is saved along with its corresponding private key in a text file named `found.txt`.

The purpose of this script is to perform brute-force searching for TRX addresses with non-zero balances. It can be used for various purposes, such as analyzing the distribution of TRX balances or identifying addresses with significant holdings.

## Usage

> **Please Note:** Ensure that you have Node.js version 16 installed.

To use the script, make sure you have Node.js and npm installed. Then, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the cloned repository's directory.
3. Install the dependencies by running the command: `npm install tronweb`.
4. Run the script using the command: `node trx.js`.
5. The script will start generating addresses and checking their balances. If an address has a non-zero balance, it will be saved in `found.txt`.

Please note that the script generates addresses randomly, and it may take a significant amount of time to find addresses with non-zero balances. Use it responsibly and respect the TRON network's resources.

---

### Contact and Web3 Development Services

If you need assistance with web3 service, blockchain development, or have any coding-related questions, feel free to reach out to me on Telegram [@Thisiswhosthis](https://t.me/Thisiswhosthis). You can also visit my website [web3dev.ma](https://web3dev.ma) for more information.

---

## License

This script is licensed under the [MIT License](LICENSE).
