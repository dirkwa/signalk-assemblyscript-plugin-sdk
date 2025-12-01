/**
 * Network API for AssemblyScript plugins
 *
 * Provides HTTP client functionality placeholder
 * Requires 'network' capability in plugin manifest
 *
 * NOTE: Full as-fetch integration is pending proper Asyncify configuration.
 * For now, use the hybrid Node.js/WASM pattern for HTTP requests.
 */

/**
 * @internal
 * Check if network capability is granted
 */
@external("env", "sk_has_capability")
declare function sk_has_capability_ffi(capPtr: usize, capLen: usize): i32

/**
 * Check if network capability is available
 *
 * @returns true if plugin has network capability
 */
export function hasNetworkCapability(): boolean {
  const capName = 'network'
  const buffer = String.UTF8.encode(capName)
  const ptr = changetype<usize>(buffer)
  return sk_has_capability_ffi(ptr, buffer.byteLength) === 1
}

/**
 * HTTP GET request (placeholder)
 *
 * NOTE: This is a placeholder. For HTTP requests, use the hybrid approach
 * shown in the signalk-logviewer example where Node.js handles HTTP and
 * WASM registers endpoints.
 *
 * @param url The URL to fetch
 * @returns Response body as string, or null on error
 */
export function httpGet(url: string): string | null {
  if (!hasNetworkCapability()) {
    return null
  }

  // TODO: Integrate as-fetch when Asyncify is properly configured
  // For now, plugins needing HTTP should use hybrid Node.js/WASM pattern
  return null
}

/**
 * HTTP POST request (placeholder)
 *
 * @param url The URL to post to
 * @param body JSON string body
 * @returns HTTP status code, or -1 on error
 */
export function httpPost(url: string, body: string): i32 {
  if (!hasNetworkCapability()) {
    return -1
  }

  // TODO: Integrate as-fetch when Asyncify is properly configured
  return -1
}

/**
 * HTTP POST request with JSON body, returning response (placeholder)
 *
 * @param url The URL to post to
 * @param body JSON string body
 * @returns Response body as string, or null on error
 */
export function httpPostWithResponse(url: string, body: string): string | null {
  if (!hasNetworkCapability()) {
    return null
  }

  // TODO: Integrate as-fetch when Asyncify is properly configured
  return null
}

/**
 * HTTP PUT request (placeholder)
 *
 * @param url The URL to put to
 * @param body JSON string body
 * @returns HTTP status code, or -1 on error
 */
export function httpPut(url: string, body: string): i32 {
  if (!hasNetworkCapability()) {
    return -1
  }

  // TODO: Integrate as-fetch when Asyncify is properly configured
  return -1
}

/**
 * HTTP DELETE request (placeholder)
 *
 * @param url The URL to delete
 * @returns HTTP status code, or -1 on error
 */
export function httpDelete(url: string): i32 {
  if (!hasNetworkCapability()) {
    return -1
  }

  // TODO: Integrate as-fetch when Asyncify is properly configured
  return -1
}

/**
 * Advanced HTTP request with full control (placeholder)
 *
 * @param url The URL to fetch
 * @param method HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param body Optional request body
 * @param contentType Optional Content-Type header
 * @returns Response object or null on error
 */
export class HttpResponse {
  constructor(
    public status: i32,
    public body: string
  ) {}
}

export function httpRequest(
  url: string,
  method: string,
  body: string | null = null,
  contentType: string | null = null
): HttpResponse | null {
  if (!hasNetworkCapability()) {
    return null
  }

  // TODO: Integrate as-fetch when Asyncify is properly configured
  return null
}
