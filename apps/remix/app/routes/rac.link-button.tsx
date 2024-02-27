import { LinkButton } from '@launchpad-ui/components';
import { MemoryRouter } from 'react-router-dom';

export default function Index() {
	return (
		<MemoryRouter>
			<LinkButton to="/">LinkButton</LinkButton>
		</MemoryRouter>
	);
}
