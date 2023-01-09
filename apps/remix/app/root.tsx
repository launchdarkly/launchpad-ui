import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { PropsWithChildren, ReactNode } from 'react';

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

// plop start imports
import alertStyles from '@launchpad-ui/alert/style.css';
import avatarStyles from '@launchpad-ui/avatar/style.css';
import bannerStyles from '@launchpad-ui/banner/style.css';
import buttonStyles from '@launchpad-ui/button/style.css';
import chipStyles from '@launchpad-ui/chip/style.css';
import clipboardStyles from '@launchpad-ui/clipboard/style.css';
import comboboxStyles from '@launchpad-ui/combobox/style.css';
import counterStyles from '@launchpad-ui/counter/style.css';
import drawerStyles from '@launchpad-ui/drawer/style.css';
import filterStyles from '@launchpad-ui/filter/style.css';
import formStyles from '@launchpad-ui/form/style.css';
import iconStyles from '@launchpad-ui/icons/style.css';
import markdownStyles from '@launchpad-ui/markdown/style.css';
import menuStyles from '@launchpad-ui/menu/style.css';
import modalStyles from '@launchpad-ui/modal/style.css';
import navigationStyles from '@launchpad-ui/navigation/style.css';
import paginationStyles from '@launchpad-ui/pagination/style.css';
import popoverStyles from '@launchpad-ui/popover/style.css';
import progressBubblesStyles from '@launchpad-ui/progress-bubbles/style.css';
import progressStyles from '@launchpad-ui/progress/style.css';
import sliderStyles from '@launchpad-ui/slider/style.css';
import snackbarStyles from '@launchpad-ui/snackbar/style.css';
import splitButtonStyles from '@launchpad-ui/split-button/style.css';
import tabListStyles from '@launchpad-ui/tab-list/style.css';
import tableStyles from '@launchpad-ui/table/style.css';
import toastStyles from '@launchpad-ui/toast/style.css';
import toggleStyles from '@launchpad-ui/toggle/style.css';
import tooltipStyles from '@launchpad-ui/tooltip/style.css';
// plop end imports

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: launchpadStyles },
    { rel: 'stylesheet', href: globalStyles },
    { rel: 'stylesheet', href: buttonStyles },
    { rel: 'stylesheet', href: iconStyles },
    { rel: 'stylesheet', href: chipStyles },
    { rel: 'stylesheet', href: alertStyles },
    { rel: 'stylesheet', href: toggleStyles },
    { rel: 'stylesheet', href: progressStyles },
    { rel: 'stylesheet', href: tabListStyles },
    { rel: 'stylesheet', href: modalStyles },
    { rel: 'stylesheet', href: popoverStyles },
    { rel: 'stylesheet', href: tooltipStyles },
    { rel: 'stylesheet', href: bannerStyles },
    { rel: 'stylesheet', href: clipboardStyles },
    { rel: 'stylesheet', href: menuStyles },
    { rel: 'stylesheet', href: formStyles },
    { rel: 'stylesheet', href: avatarStyles },
    { rel: 'stylesheet', href: navigationStyles },
    { rel: 'stylesheet', href: progressBubblesStyles },
    { rel: 'stylesheet', href: counterStyles },
    { rel: 'stylesheet', href: sliderStyles },
    { rel: 'stylesheet', href: tableStyles },
    { rel: 'stylesheet', href: paginationStyles },
    { rel: 'stylesheet', href: splitButtonStyles },
    { rel: 'stylesheet', href: markdownStyles },
    { rel: 'stylesheet', href: filterStyles },
    { rel: 'stylesheet', href: snackbarStyles },
    { rel: 'stylesheet', href: toastStyles },
    { rel: 'stylesheet', href: drawerStyles },
    { rel: 'stylesheet', href: comboboxStyles },
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
