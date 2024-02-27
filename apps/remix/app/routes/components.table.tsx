import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeadCell,
	TableRow,
} from '@launchpad-ui/core';

export default function Index() {
	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableHeadCell id="1" scope="col">
						Col 1
					</TableHeadCell>
					<TableHeadCell id="2" scope="col">
						Col 2
					</TableHeadCell>
				</TableRow>
			</TableHead>
			<TableBody>
				<TableRow>
					<TableCell headers="1">Data 1</TableCell>
					<TableCell headers="2">Data 2</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
