import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { PropsWithChildren, ReactNode } from 'react';

import { SSRProvider } from '@react-aria/ssr';
import { cssBundleHref } from '@remix-run/css-bundle';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react';

import launchpadStyles from '@launchpad-ui/tokens/index.css';
import themeStyles from '@launchpad-ui/tokens/themes.css';
import globalStyles from './styles/global.css';
import iconStyles from '@launchpad-ui/icons/style.css';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: launchpadStyles },
    { rel: 'stylesheet', href: themeStyles },
    { rel: 'stylesheet', href: globalStyles },
    { rel: 'stylesheet', href: iconStyles },
    ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  ];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <SSRProvider>
      <Document>
        <Layout>
          <Outlet />
        </Layout>
      </Document>
    </SSRProvider>
  );
}

function Document({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <html lang="en">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function Layout({ children }: PropsWithChildren<unknown>) {
  return <main>{children}</main>;
}

export function CatchBoundary() {
  const caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = <p>Oops! Looks like you tried to visit a page that you do not have access to.</p>;
      break;
    case 404:
      message = <p>Oops! Looks like you tried to visit a page that does not exist.</p>;
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>Hey, developer, you should replace this with what you want your users to see.</p>
        </div>
      </Layout>
    </Document>
  );
}
