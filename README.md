# WIP .d.ts to .hx

Hi, this is a work in progress TypeScript Definition to Haxe Extern converter. It's not yet ready to use but much of the groundwork has been laid.

I don't have the bandwidth available to progress it in the short term so I've made the repo public to help anyone else who's also working towards a `.d.ts` -> `.hx` converter.

It currently outputs the basic structures (not as valid haxe) using [these methods](src/ExternGenerator.ts#L296). The main part of the remaining work is to fill out these methods by exploring type information contained in the `ts.Symbol`. I think it's best to write this part in haxe so you can use the haxe syntax printer. In addition, we will need to remap type names like `WebGLRenderingContext` to haxe paths like `js.webgl.RenderingContext`. For this, I think it's best to use a haxe macro to explore all the types in `js.*` and extract their `@:native` metadata to create a lookup table.

The ultimate aim is to be able to do something like `dts2hx install @types/three` and have it pull definitions from DefinitelyTyped and convert them to haxe. To enable this to be reliable there needs to be a focus on fully handling all possible ts type expressions and edge cases (see [test-definitions/edge-cases/index.d.ts](test-definitions/edge-cases/index.d.ts)).

# Getting Started
- Run `npm install` to download the dependencies (ts compiler)
- Run `npm run build` to build and `npm run run` to execute
- The target type definitions are specified in [src/index.ts](src/index.ts#L56)
- To rebuild and run interactively, run `npm run watch-run`

# FAQ
- Why is it written in TypeScript instead of haxe?

    It interfaces heavily with the TypeScript compiler so it's helpful to have access to the TS compiler definitions. If we can convert the TS compiler definitions to haxe then it would make sense to write it fully in haxe :)

- What makes this different from previous approaches?

   The idea of generating Haxe externs from `.d.ts` files is not new, [ts2hx](https://github.com/Simn/ts2hx) for instance was started 5 years ago already. However, this turned out to not be viable because it implemented a TypeScript parser in Haxe. The maintenance effort required turned out to be too great since TypeScript is evolving quickly.

   This project takes the _opposite_ approach and hooks into the TypeScript compiler API, which simplifies future maintenance a lot.
