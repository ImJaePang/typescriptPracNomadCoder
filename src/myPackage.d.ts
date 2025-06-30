interface Config {

}

declare module "myPackage" {
    function init(fonfig:Config):boolean;
    function exit(code:number):number;
}