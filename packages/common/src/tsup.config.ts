import type { Options } from "tsup";

export const tsup: Options = {
	splitting: false,
	sourcemap: true,
	clean: true,
	dts: true,
	skipNodeModulesBundle: true,
	format: ["cjs", "esm"],
	legacyOutput: false,
	entryPoints: ["src/index.ts"],
};
