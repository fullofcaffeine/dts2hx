/// <reference path="./ambient-extension.d.ts" />

export * from './cat';

export declare abstract class BasePlayerCallback {
    array: Uint8Array;
    abstract run(n: {a: Uint16Array}, t?: number): void;
    abstract stop(): void;
}

// Blobfish is tripple-slash referenced AND exported
export * from './blobfish';

declare namespace SomeNamespace {
    interface Wat {
        nowThisIsGettingComplex: string;
    }
    namespace WorldsWithinWorlds {

        type Dean = MediaList;

    }

    const CommandNames: any;
}

declare class SomeClass {

}

export enum MixedEnum {
    A = 0,
    B = 'one',
}

export type EitherZeroOne = 0 | 'one';

export class Thing {
    field: number[];
    map: Map<string, number>;
}

export class DefaultThing extends Thing {
    a: number;
    b: string;
    iAmAThing: Thing;
    private constructor();
}

export class ClassAndNamespace {

}

export namespace ClassAndNamespace {
    namespace InnerNamespace {

    }
    class InnerClass {

    }
}

export namespace ExportedNamespace {

    namespace A {
        
    }

    export namespace HorribleIdentifiersಠ_ಠ {

        const ლ_ಠ益ಠ_ლ = 42;
        const π: number;
        const λ: number;

        // this is parsed badly
        // const Hͫ̆̒̐ͣ̊̄ͯ͗͏̵̗̻̰̠̬͝ͅE̴̷̬͎̱̘͇͍̾ͦ͊͒͊̓̓̐_̫̠̱̩̭̤͈̑̎̋ͮͩ̒͑̾͋͘Ç̳͕̯̭̱̲̣̠̜͋̍O̴̦̗̯̹̼ͭ̐ͨ̊̈͘͠M̶̝̠̭̭̤̻͓͑̓̊ͣͤ̎͟͠E̢̞̮̹͍̞̳̣ͣͪ͐̈T̡̯̳̭̜̠͕͌̈́̽̿ͤ̿̅̑Ḧ̱̱̺̰̳̹̘̰́̏ͪ̂̽͂̀͠: string;
    }
}

export as namespace EdgeCase;
export as namespace AnotherNamespace;

// export default SomeNamespace;

// module.exports = DefaultThing;