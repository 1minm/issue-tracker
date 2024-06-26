import { Status } from "@prisma/client"
import { Card, Flex, Text } from "@radix-ui/themes"
import Link from "next/link"

interface IssueSummaryProps {
	open: number
	inProgress: number
	closed: number
}

const IssueSummary = ({ closed, inProgress, open }: IssueSummaryProps) => {
	const containers: {
		label: string
		value: number
		status: Status
	}[] = [
		{ label: "Open Issues", value: open, status: "OPEN" },
		{ label: "In-progress Issues", value: inProgress, status: "IN_PROGRESS" },
		{ label: "Close Issues", value: closed, status: "CLOSE" },
	]

	return (
		<Flex gap="4">
			{containers.map((container) => (
				<Card key={container.label}>
					<Flex direction="column" gap="1">
						<Link
							className="text-sm font-medium"
							href={`/issues/list?status=${container.status}`}
						>
							{container.label}
						</Link>
						<Text size="5" className="font-bold">
							{container.value}
						</Text>
					</Flex>
				</Card>
			))}
		</Flex>
	)
}

export default IssueSummary
