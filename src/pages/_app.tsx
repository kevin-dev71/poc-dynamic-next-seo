import Meta from '@/features/meta';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* pass prop with all data you want */}
      <Meta title={pageProps?.product?.name} />

      <Component {...pageProps} />
    </>
  );
}
