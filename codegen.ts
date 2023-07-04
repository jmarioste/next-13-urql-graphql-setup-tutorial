import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  documents: "graphql/**/*.graphql",
  generates: {
    // generate types.ts
    "graphql/types.ts": { plugins: ["typescript"] },
    // generate operations.ts
    "graphql/operations.ts": {
      preset: "import-types",
      plugins: ["typescript-operations", "typescript-urql"],
      presetConfig: {
        typesPath: "./types",
      },
      config: {
        withHooks: false,
      },
    },
    // generate hooks in separate files - optional
    "graphql/hooks": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".hooks.tsx",
        baseTypesPath: "../types.ts",
      },
      plugins: ["typescript-urql"],
      config: {
        withHooks: true,
        importOperationTypesFrom: "Operations",
        documentMode: "external",
        importDocumentNodeExternallyFrom: "./operations.tsx",
      },
    },
  },
};

export default config;
