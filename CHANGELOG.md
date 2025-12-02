# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.2] - 2025-01-02

### Removed
- Removed incomplete HTTP wrapper functions (`httpGet`, `httpPost`, `httpPut`, `httpDelete`, `httpRequest`, `HttpResponse`) from `network.ts`
  - These functions were incomplete placeholders that were not being used
  - Developers should use `as-fetch` directly for HTTP requests (see documentation)

### Fixed
- Fixed `Uint8Array` constructor errors in `api.ts` by using `Uint8Array.wrap()` instead of `new Uint8Array(buffer, offset, length)`
  - Fixes compatibility with AssemblyScript 0.27.x
  - Affects `getSelfPath()`, `getPath()`, and `readConfig()` functions

### Changed
- Simplified `network.ts` to only export `hasNetworkCapability()` for capability checking
- Updated `network.ts` documentation with examples showing how to use `as-fetch` directly

### Improved
- Clearer API surface - SDK focuses on Signal K-specific functionality
- Better documentation with examples of the recommended `fetchSync()` pattern from `as-fetch`
- SDK now builds without errors on AssemblyScript 0.27.x

## [0.1.1] - 2024-12-XX

### Added
- Initial release of AssemblyScript SDK for Signal K WASM plugins
- Core Signal K API functions (`emit`, `setStatus`, `setError`, `debug`)
- Data access functions (`getSelfPath`, `getPath`)
- Configuration management (`readConfig`, `saveConfig`)
- Delta creation helpers (`createSimpleDelta`, `createEmptyDelta`)
- Network capability checking (`hasNetworkCapability`)

### Documentation
- Complete API documentation with examples
- TypeScript type definitions

## [0.1.0] - 2024-12-XX

### Added
- Initial development version
