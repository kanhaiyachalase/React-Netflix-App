import { CacheFirst } from './CacheFirst.js';
import { CacheOnly } from './CacheOnly.js';
import { NetworkFirst } from './NetworkFirst.js';
import { NetworkOnly } from './NetworkOnly.js';
import { StaleWhileRevalidate } from './StaleWhileRevalidate.js';
import './_version.js';
/**
 * There are common caching strategies that most service workers will need
 * and use. This module provides simple implementations of these strategies.
 *
 * @module workbox-strategies
 */
export { CacheFirst, CacheOnly, NetworkFirst, NetworkOnly, StaleWhileRevalidate, };
