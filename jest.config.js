module.exports = {
    setupFiles: ['./jest.polyfills.js'],
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+[^esm]\\.(js|jsx|mjs|cjs|ts|tsx)$",
        "^.+\\.module\\.(css|sass|scss)$"
      ]
  }