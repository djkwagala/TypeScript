/// <reference path='fourslash.ts' />

////function /*1*/makePoint(x: number) { 
////    return {
////        get x() { return x; },
////    };
////};
////var /*4*/point = makePoint(2);
////var /*2*/x = point./*3*/x;

verify.quickInfoAt("1", "function makePoint(x: number): {\n    readonly x: number;\n}");

verify.quickInfoAt("2", "var x: number");

goTo.marker('3');
verify.memberListContains("x", "(property) x: number", undefined);

verify.quickInfoAt("4", "var point: {\n    readonly x: number;\n}");
