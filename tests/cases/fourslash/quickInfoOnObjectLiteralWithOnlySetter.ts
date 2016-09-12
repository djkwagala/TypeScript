/// <reference path='fourslash.ts' />

////function /*1*/makePoint(x: number) { 
////    return {
////        b: 10,
////        set x(a: number) { this.b = a; }
////    };
////};
////var /*3*/point = makePoint(2);
////point./*2*/x = 30;

verify.quickInfoAt("1", "function makePoint(x: number): {\n    b: number;\n    x: number;\n}", undefined);

goTo.marker('2');
verify.memberListContains("x", "(property) x: number", undefined);
verify.memberListContains("b", "(property) b: number", undefined);
verify.quickInfoIs("(property) x: number", undefined);

verify.quickInfoAt("3", "var point: {\n    b: number;\n    x: number;\n}", undefined);
