type SuperPrint = <T,M>(a: T[], b: M) => T;

const superPrint : SuperPrint = (a) => a[];

const a = superPrint([1,2,3,4], "bb");
const b = superPrint(["aa", "bb", "cc"], 3);
const c = superPrint([false, true, false], true);
const d = superPrint([1, 2, "string", false], "aaaa");

