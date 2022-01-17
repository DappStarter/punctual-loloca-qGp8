require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remember mistake hockey kitchen success general'; 
let testAccounts = [
"0xeded9bd4a31851a849df7a9638c04278a14f49fda90bf91d630a929821e7726c",
"0x9e1ba636fce88caa9efa07195c4bfb59767dfb0fc56e04df87b68e668bca0f41",
"0x05123b4c7d59c199c376f72027f92ec014ba3d4781afe10adddcb983ea255348",
"0x0a76da3abafcbd6bd00d30cb77eefe56ba4dd18b736e1297324df767bb084e79",
"0x6ac67a5b2e219359a4d4028903db96ee81c457d6403a146a5d8e45328cdc4f46",
"0x1ff95dcbe6117e62e4f31093bb339455595a174a0607bdf1f84f532bbaf0e9a2",
"0xcb87d226b8702b6130616ea8971798d940da7d3a21e4bf8d68a990fd021374a9",
"0x4284bb99317a76b17894bd24c3726008306dd30154aa51f333f7db62d1b07e9a",
"0x8930d72eb7c292c4317031491470412a1d2aa42502c9dcdc5b481a87c4d70de6",
"0x1e73f2a7bb1b6752c76e6fe950e06e1fe22886ef729b5762bbc5caf4bb34c672"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

