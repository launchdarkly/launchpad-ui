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
import { LazyMotion } from 'framer-motion';

import launchpadStyles from '@launchpad-ui/core/styles/tokens.css';
import globalStyles from './styles/global.css';

// plop start imports
import alertStyles from '@launchpad-ui/core/styles/alert.css';
import avatarStyles from '@launchpad-ui/core/styles/avatar.css';
import bannerStyles from '@launchpad-ui/core/styles/banner.css';
import buttonStyles from '@launchpad-ui/core/styles/button.css';
import clipboardStyles from '@launchpad-ui/core/styles/clipboard.css';
import counterStyles from '@launchpad-ui/core/styles/counter.css';
import formStyles from '@launchpad-ui/core/styles/form.css';
import iconStyles from '@launchpad-ui/core/styles/icons.css';
import lozengeStyles from '@launchpad-ui/core/styles/lozenge.css';
import menuStyles from '@launchpad-ui/core/styles/menu.css';
import modalStyles from '@launchpad-ui/core/styles/modal.css';
import navigationStyles from '@launchpad-ui/core/styles/navigation.css';
import notificationStyles from '@launchpad-ui/core/styles/notification.css';
import paginationStyles from '@launchpad-ui/core/styles/pagination.css';
import popoverStyles from '@launchpad-ui/core/styles/popover.css';
import progressBubblesStyles from '@launchpad-ui/core/styles/progress-bubbles.css';
import progressStyles from '@launchpad-ui/core/styles/progress.css';
import sliderStyles from '@launchpad-ui/core/styles/slider.css';
import tabListStyles from '@launchpad-ui/core/styles/tab-list.css';
import tableStyles from '@launchpad-ui/core/styles/table.css';
import toggleStyles from '@launchpad-ui/core/styles/toggle.css';
import tooltipStyles from '@launchpad-ui/core/styles/tooltip.css';
// plop end imports

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
    { rel: 'stylesheet', href: popoverStyles },
    { rel: 'stylesheet', href: tooltipStyles },
    { rel: 'stylesheet', href: notificationStyles },
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
  ];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

const loadFeatures = async () => import('./utils/framer-features').then((res) => res.default);

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
        <LazyMotion strict features={loadFeatures}>
          {children}
        </LazyMotion>
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
