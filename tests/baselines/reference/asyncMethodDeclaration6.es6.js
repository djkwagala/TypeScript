//// [asyncMethodDeclaration6.es6.ts]
class D {
    superMethod() {}
    static staticSuperMethod() {}
}
let c = class C extends D {
    async method() {
        super.superMethod();
        await undefined;
    }
    
    static async staticMethod() {
        super.staticSuperMethod();
        await undefined;
    }
}

//// [asyncMethodDeclaration6.es6.js]
class D {
    superMethod() { }
    static staticSuperMethod() { }
}
let c = class C extends D {
    method() {
        return __awaiter(this, void 0, Promise, C.prototype._method_async);
    }
    *_method_async() {
        super.superMethod();
        yield undefined;
    }
    static staticMethod() {
        return __awaiter(this, void 0, Promise, C._staticMethod_async);
    }
    static *_staticMethod_async() {
        super.staticSuperMethod();
        yield undefined;
    }
}
;