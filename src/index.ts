type SuperPrint1 = <T,M>(a: T[], b?: M) => T;

const superPrint1 : SuperPrint1 = (a) => a[];

const a = superPrint1([1,2,3,4]);
const b = superPrint1(["aa", "bb", "cc"]);
const c = superPrint1([false, true, false]);
const d = superPrint1([1, 2, "string", false]);


function superPrint2<T>(a: T[]){
    return a[0];
}


const aa = superPrint2([1,2,3,4]);
const bb = superPrint2(["aa", "bb", "cc"]);
const cc = superPrint2([false, true, false]);
const dd = superPrint2([1, 2, "string", false]);

