import { Slider } from '@launchpad-ui/core';

export default function Index() {
	return <Slider min={0} max={50} value={25} onChange={() => undefined} />;
}
