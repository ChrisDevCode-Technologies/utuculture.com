import { useEffect } from 'react';

type Props = {
  propertyId?: string;
  widgetKey?: string;
  defer?: boolean; // if true, load after a short delay
};

export function TawkWidget({
  propertyId = (import.meta.env.VITE_TAWK_PROPERTY_ID as string) || '6981af2de4ef801c3fc865de',
  widgetKey = (import.meta.env.VITE_TAWK_KEY as string) || '1jgh98j5u',
  defer = false,
}: Props) {
  useEffect(() => {
    if ((window as any).Tawk_API) return; // already loaded

    const load = () => {
      const s1 = document.createElement('script');
      const s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src = `https://embed.tawk.to/${propertyId}/${widgetKey}`;
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode?.insertBefore(s1, s0);
    };

    if (defer) {
      const id = window.setTimeout(load, 1500);
      return () => window.clearTimeout(id);
    }

    load();
  }, [propertyId, widgetKey, defer]);

  return null;
}

export default TawkWidget;
