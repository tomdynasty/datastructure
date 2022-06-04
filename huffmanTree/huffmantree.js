class Node {  
    constructor(value, char, left, right) {  
        this.val = value; // number of character occurrences  
        this.char = char; // character to be encoded  
        this.left = left;  
        this.right = right;  
    }  
}

class huffmanTree{ 
    constructor(str){  
        //The first step is to count the frequency of characters  
        let hash = {};  
        for(let i = 0; i < str.length; i++){  
            hash[str[i]] = (hash[str[i]] === undefined) ? 1 : hash[str[i]] + 1;
        }  
        this.hash = hash; 
  
        // //The second step is to construct Huffman tree  
        this.huffmanTree = this.getHuffmanTree(); 
        // console.log(this.huffmanTree); 
  
        //The third step is to traverse the Huffman tree to get the coding table
        let map = this.getHuffmanCode(this.huffmanTree);  
        //Look at the encoding table, that is, what is the binary encoding of each character  
        console.log(map);
        this.map = map;  
  
        //The fourth part, according to the coding table, returns the final binary code  
        this.binaryStr = this.getBinaryStr(map, str);  
    } 
    // Constructing Huffman tree  
    getHuffmanTree(){  
        //The number of occurrences of each character is node.val , tectonic forest  
        let forest = []  
        for(let char in this.hash){  
            let node = new Node(this.hash[char], char); 
            forest.push(node);  
        } 
  
        //When there is only one node left in the forest, the merging process is finished and the tree is generated
        while(forest.length !== 1){  
            //Find the two smallest trees in the forest and merge them  
            forest.sort((a, b) => {  
                return a.val - b.val;  
            });  
  
            let node = new Node(forest[0].val + forest[1].val, '');
            node.left = forest[0];
            node.right = forest[1];
            //Delete the two smallest trees  
            forest = forest.slice(2);  
            //Added tree join  
            forest.push(node);  
        }  
  
        //There is only one node left in the Huffman tree, that is, the root node of the whole tree
        return forest[0];  
    }

    //Traverse the Huffman tree and return a table of original characters and binary codes  
    getHuffmanCode(tree){  
        let hash = {}; // cross reference table
        let traversal = (node, curPath) => {  
            if (!node.length && !node.right) return;  
            if (node.left && !node.left.left && !node.left.right){  
                hash[node.left.char] = curPath + '0';  
            }  
            if (node.right && !node.right.left && !node.right.right){  
                hash[node.right.char] = curPath + '1';  
            }  
            //Traverse to the left and add 0 to the path  
            if(node.left){  
                traversal(node.left, curPath + '0');  
            }  
            //Go right and add 1 to the path  
            if(node.right){  
                traversal(node.right, curPath + '1');  
            }  
        };  
        traversal(tree, '');  
        return hash;  
    }

    //Returns the final compressed binary string  
    getBinaryStr(map, originStr){  
        let result = '';  
        for(let i = 0; i < originStr.length; i++){  
            result += map[originStr[i]];  
        }  
        return result;  
    }
}

const tree = new huffmanTree('bbccddaeee');
// { c: '00', d: '01', e: '10', a: '110', b: '111' }
// 11111100000101110101010
console.log(tree.binaryStr);

