import type { GameSettings } from '../types';

/**
 * The default gameplay settings. Keep in sync with the defaults in App.tsx.
 * Used as a baseline: the hash only encodes differences from these values.
 */
const DEFAULTS: GameSettings = {
  matchMultipleShapes: true,
  multiMatchBonus: false,
  gridSize: 36,
  timedMode: false,
  timerType: 'count-up',
  timeLimit: 120,
};

/**
 * Produces a deterministic, human-readable key from gameplay settings.
 * Only encodes settings that differ from the defaults so the hash stays
 * compact and naturally extends when new settings are added (new settings
 * at their default value won't change existing hashes).
 *
 * Tileset is intentionally excluded -- it's cosmetic and doesn't
 * affect gameplay.
 */
export function buildSettingsHash(settings: GameSettings): string {
  const diffs: string[] = [];

  if (settings.gridSize !== DEFAULTS.gridSize) {
    diffs.push(`grid=${settings.gridSize}`);
  }
  if (settings.matchMultipleShapes !== DEFAULTS.matchMultipleShapes) {
    diffs.push(`multi=${settings.matchMultipleShapes ? 1 : 0}`);
  }
  if (settings.multiMatchBonus !== DEFAULTS.multiMatchBonus) {
    diffs.push(`bonus=${settings.multiMatchBonus ? 1 : 0}`);
  }
  if (settings.timedMode !== DEFAULTS.timedMode) {
    diffs.push(`timed=${settings.timedMode ? 1 : 0}`);
    // Only include timer details when timed mode is enabled
    if (settings.timedMode) {
      if (settings.timerType !== DEFAULTS.timerType) {
        diffs.push(`timer=${settings.timerType}`);
      }
      if (settings.timerType === 'count-down' && settings.timeLimit !== DEFAULTS.timeLimit) {
        diffs.push(`limit=${settings.timeLimit}`);
      }
    }
  }

  // If nothing differs from defaults, return "custom" so that
  // "custom with default settings" still has its own leaderboard
  // distinct from Classic (which uses the literal string "classic").
  return diffs.length > 0 ? diffs.join(':') : 'custom';
}

/**
 * Returns a short human-readable label describing the settings
 * (for display in the leaderboard UI).
 */
export function describeSettings(hash: string): string {
  if (hash === 'classic') return 'Classic';
  if (hash === 'custom') return 'Custom (default settings)';

  const withoutVersion = hash;

  const parts = withoutVersion.split(':');
  const map = new Map(parts.map(p => {
    const [k, v] = p.split('=');
    return [k, v];
  }));

  const labels: string[] = [];

  const grid = map.get('grid');
  if (grid) labels.push(`${grid} tiles`);

  if (map.get('multi') === '0') {
    labels.push('single-match');
  }
  if (map.get('bonus') === '1') {
    labels.push('multi-match bonus');
  }

  if (map.get('timed') === '1') {
    const timer = map.get('timer');
    if (timer === 'count-down') {
      const limit = map.get('limit');
      labels.push(limit ? `${limit}s countdown` : 'countdown');
    } else {
      labels.push('timed');
    }
  }

  return labels.length > 0 ? labels.join(', ') : 'Custom';
}
