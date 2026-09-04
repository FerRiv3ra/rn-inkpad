import React, {useEffect, useRef} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {useColorMode} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

declare global {
  interface Window {
    ExpoSnack?: {append: (element: HTMLElement) => void};
  }
}

type Props = {
  /** Saved snack id, e.g. `@ferriv3ra/button-rninkpad`. Overrides `code`. */
  id?: string;
  /** Inline App.js source. */
  code?: string;
  /** Extra files: path -> source. */
  files?: Record<string, string>;
  name?: string;
  description?: string;
  /** Comma separated `package@version` list. */
  dependencies?: string;
  sdkVersion?: string;
  platform?: 'web' | 'ios' | 'android' | 'mydevice';
  preview?: boolean;
  height?: number;
};

const EMBED_SRC = 'https://snack.expo.dev/embed.js';
const DEFAULT_DEPENDENCIES =
  'rn-inkpad@^2.0.0,lucide-react-native,react-native-svg';

let loader: Promise<void> | undefined;

/** Loads embed.js once and resolves when `window.ExpoSnack` is ready. */
const loadEmbedScript = () => {
  if (window.ExpoSnack) {
    return Promise.resolve();
  }
  if (!loader) {
    loader = new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = EMBED_SRC;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Could not load Expo Snack'));
      document.body.appendChild(script);
    });
  }
  return loader;
};

const SnackFrame = ({
  code,
  dependencies,
  description,
  files,
  height = 560,
  id,
  name = 'rn-inkpad example',
  platform = 'web',
  preview = true,
  sdkVersion,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const {colorMode} = useColorMode();
  const {siteConfig} = useDocusaurusContext();
  // Pin the library to the documented version (root package.json).
  const libraryVersion = siteConfig.customFields?.libraryVersion as string;
  const resolvedDependencies = dependencies ?? `rn-inkpad,`;

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    let cancelled = false;
    // embed.js only scans the DOM on page load. Docusaurus is a SPA, so every
    // mounted embed has to be registered explicitly.
    loadEmbedScript().then(() => {
      if (!cancelled) {
        window.ExpoSnack?.append(element);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const snackFiles =
    files ?? (code ? {'App.js': {type: 'CODE', contents: code}} : undefined);

  return (
    <div
      ref={ref}
      data-snack-id={id}
      // embed.js runs decodeURIComponent on these attributes.
      data-snack-files={
        !id && snackFiles
          ? encodeURIComponent(JSON.stringify(snackFiles))
          : undefined
      }
      data-snack-dependencies={!id ? resolvedDependencies : undefined}
      data-snack-sdkversion={sdkVersion}
      data-snack-name={name}
      data-snack-description={description}
      data-snack-platform={platform}
      data-snack-preview={String(preview)}
      data-snack-theme={colorMode}
      data-snack-loading="lazy"
      style={{
        overflow: 'hidden',
        background: 'var(--ifm-background-surface-color)',
        border: '1px solid var(--ifm-color-emphasis-300)',
        borderRadius: 8,
        height,
        width: '100%',
        marginBottom: '1.5rem',
      }}
    />
  );
};

/**
 * Live Expo Snack. Pass a saved `id` or inline `code`. Renders only in the
 * browser and re-mounts when the color mode changes.
 */
export default function Snack(props: Props) {
  return (
    <BrowserOnly fallback={<div style={{height: props.height ?? 560}} />}>
      {() => {
        const Keyed = () => {
          const {colorMode} = useColorMode();
          return <SnackFrame key={colorMode} {...props} />;
        };
        return <Keyed />;
      }}
    </BrowserOnly>
  );
}
