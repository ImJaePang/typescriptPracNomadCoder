type Words = {
    [key:string] : string,

}

// let dict : Words = {
//     "potato" : "food"
// }

class Dict {
    private words :Words
    constructor(){
        this.words = {}
    }

    add(word:Word){
        if (this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }   
    }

    def(term:string){
        if (this.words[term] !== undefined){
            return this.words[term];
        } else {
            return "no def this words"
        }
    }

    update(word:Word){
        if(this.words[word.def] !== undefined){
            this.words[word.def] = word.term;
        }
    }

    delete(term:string){
        if(this.words[term] !== undefined){
            // this.words[term] = undefined
        }
    }
}


class Word {
    constructor (
        public term : string,
        public def : string
    ){}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();

dict.add(kimchi);

console.log(dict.def("kimchi"));
console.log(dict.def("kimchi111"));

