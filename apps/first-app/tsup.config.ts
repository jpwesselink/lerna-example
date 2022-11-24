import type { Options } from "tsup";

export const tsup: Options = {
	splitting: false,
	sourcemap: true,
	clean: true,
	dts: true,
	treeshake: true,
	skipNodeModulesBundle: true,
	minify: true,
	format: ["cjs", "esm"],
	entryPoints: ["src/index.ts"],
};
