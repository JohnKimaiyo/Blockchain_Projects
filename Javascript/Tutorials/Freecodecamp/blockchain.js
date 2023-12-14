class Blockchain {
  constructor () {
      this.chain = [this.createGenesisBlock()];
      this.pendingTransactions = [];    
  }
}