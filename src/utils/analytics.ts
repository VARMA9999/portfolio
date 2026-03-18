export type AnalyticsEvent = 
  | 'voice_play'
  | 'voice_pause'
  | 'background_listen_enabled'
  | 'background_listen_disabled'
  | 'section_read'
  | 'diagram_interaction'
  | 'lab_interaction';

export interface AdBlockResult {
  isBlocked: boolean;
  detectedAt: number;
}

/**
 * Tracks custom engagement events
 */
export const trackEvent = (event: AnalyticsEvent, metadata: Record<string, any> = {}) => {
  console.log(`[Analytics] Event: ${event}`, metadata);
  // In a real environment, this would call Firebase Analytics or similar
  // Example: logEvent(analytics, event, metadata);
};

/**
 * Pings the engagement timer to keep session active
 */
export const pingEngagement = (articleId: string, section: string | number) => {
  const timestamp = new Date().toISOString();
  console.log(`[Analytics] Ping: ${articleId} | Section: ${section} | Time: ${timestamp}`);
};

/**
 * Simple Adblock Detection using common bait patterns
 */
export const detectAdBlock = async (): Promise<boolean> => {
  // Common ad-related URLs that are typically blocked
  const bait = [
    'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    'https://googleads.g.doubleclick.net/pagead/ads'
  ];

  try {
    for (const url of bait) {
      const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' }).catch(() => null);
      if (!response) return true; // Blocked or network error
    }
    return false;
  } catch (e) {
    return true;
  }
};
