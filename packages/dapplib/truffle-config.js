require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name razor oil minor hover deposit frame giggle'; 
let testAccounts = [
"0xcd243233476154d9dc47de93eebcf1d54f272b2e69367f366f70655ae3adae26",
"0x8aadd89dd2f4214d3b2b67d76a546b0498966e4de35dd1fda63d99d32fd5a51b",
"0x8e2024f7bd54f4f5e782473e461eabe2e4d53dc7e4497b73b4e4d3315ae846dd",
"0x045e22d09c5b0bfc61f39268c5560d5f538a4771aaeb2ed0045c96789d1b5890",
"0x80eb8906ca588122c0a2a6b9972a0dbd0b1b4fdf98b265afbb52bc59e4b0a02b",
"0xaba82318762ad5ff1a63c6a2c27f4d16e82011ffd649c284201198be732de353",
"0xc4b6875cc310e96daecea7c45bff970bc75759037d365cc338cfcbd6500db807",
"0xf51bf9681f3e8494ad7fd8852185af69455b746ed1ce23f23ee89402213b78e6",
"0x19ff5d320d9e89dc5e892d8e2782213874c4832738df345c7ff158796748816d",
"0x9baf2be4700027e457ab5299701e56d135a7f7597c902683703c12eae0b33420"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

