module.exports = {
  contracts_build_directory: "./client/public/contracts",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    }
  },
  compilers: {
    solc: {
      version : '0.8.9',
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
