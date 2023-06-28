import { Pagination } from '@launchpad-ui/core';

export default function Index() {
  return (
    <Pagination
      resourceName="flags"
      onChange={() => undefined}
      currentOffset={0}
      pageSize={2}
      isReady={true}
      totalCount={4}
    />
  );
}
