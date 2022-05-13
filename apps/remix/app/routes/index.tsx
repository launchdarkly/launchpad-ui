import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

type IndexData = {
  components: Array<{ name: string; to: string }>;
};

export const loader: LoaderFunction = async () => {
  const data: IndexData = {
    components: [
      {
        to: 'components/button',
        name: 'Button',
      },
      {
        to: 'components/lozenge',
        name: 'Lozenge',
      },
    ],
  };

  return json(data);
};

export const meta: MetaFunction = () => {
  return {
    title: 'Remix SSR',
    description: 'SSR component testing',
  };
};

export default function Index() {
  const data = useLoaderData<IndexData>();

  return (
    <>
      <h1>Remix SSR</h1>
      <ul>
        {data.components.map((component) => (
          <li key={component.to}>
            <Link to={component.to} prefetch="intent">
              {component.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
