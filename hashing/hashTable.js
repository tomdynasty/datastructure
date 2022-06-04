class HashTable {
  constructor() {
      this.values = {};
  }

  calculateHash(key) {
      return key.toString().length % 11;
  }

  add(key, value) {
      const hash = this.calculateHash(key);
      if (!this.values.hasOwnProperty(hash)) {
          this.values[hash]= {};
      }
      this.values[hash][key] = value;
  }

  search(key) {
      const hash = this.calculateHash(key);
      if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
       return this.values[hash][key];
      } else {
       return 'not found';
      }
  }

  remove(key) {
    const hash = this.calculateHash(key);
    if (!this.values.hasOwnProperty(hash) || !(this.values[hash].hasOwnProperty(key))) {
        return false;
    }
    delete this.values[hash][key];
    if (JSON.stringify(this.values[hash]) === '{}') {
        delete this.values[hash];
    }
    return true;
  }
}

//create object of type hash table
const ht = new HashTable();
//add data to the hash table ht
ht.add("Canada", "300");
ht.add("Germany", "100");
ht.add("Italy", "50");
ht.add("Taiwan", "30");

//search italy return 50
console.log(ht.search("Italy"));
//search America return not found
console.log(ht.search("America"));
// true
console.log(ht.remove("Italy"));
// false
console.log(ht.remove("Japan"));