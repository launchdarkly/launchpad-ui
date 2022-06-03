import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { SSRProvider } from '@react-aria/ssr';
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
import globalStyles from './styles/global.css';

import buttonStyles from '@launchpad-ui/button/styles/Button.css';
import iconStyles from '@launchpad-ui/icons/styles.css';
import lozengeStyles from '@launchpad-ui/lozenge/styles.css';
import alertStyles from '@launchpad-ui/alert/styles/Alert.css';
import toggleStyles from '@launchpad-ui/toggle/styles.css';
import progressStyles from '@launchpad-ui/progress/styles.css';
import tabListStyles from '@launchpad-ui/tab-list/styles.css';
import modalStyles from '@launchpad-ui/modal/styles/Modal.css';
import promptStyles from '@launchpad-ui/modal/styles/Prompt.css';
import popoverStyles from '@launchpad-ui/popover/styles.css';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: launchpadStyles },
    { rel: 'stylesheet', href: globalStyles },
    { rel: 'stylesheet', href: buttonStyles },
    { rel: 'stylesheet', href: iconStyles },
    { rel: 'stylesheet', href: lozengeStyles },
    { rel: 'stylesheet', href: alertStyles },
    { rel: 'stylesheet', href: toggleStyles },
    { rel: 'stylesheet', href: progressStyles },
    { rel: 'stylesheet', href: tabListStyles },
    { rel: 'stylesheet', href: modalStyles },
    { rel: 'stylesheet', href: promptStyles },
    { rel: 'stylesheet', href: popoverStyles },
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

function Document({ children, title }: { children: React.ReactNode; title?: string }) {
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

function Layout({ children }: React.PropsWithChildren<unknown>) {
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
