"use client"

import { Status } from "@prisma/client"
import { Select } from "@radix-ui/themes"

interface IssueStatusFilterProps {}

const statuses: { label: string; value: Status | "ALL" }[] = [
	{ label: "All", value: "ALL" },
	{ label: "Open", value: "OPEN" },
	{ label: "In Progress", value: "IN_PROGRESS" },
	{ label: "Closed", value: "CLOSE" },
]

const IssueStatusFilter = ({}: IssueStatusFilterProps) => {
	return (
		<Select.Root>
			<Select.Trigger placeholder="Filter by status..." />
			<Select.Content>
				{statuses.map((status) => (
					<Select.Item key={status.value} value={status.value || ""}>
						{status.label}
					</Select.Item>
				))}
			</Select.Content>
		</Select.Root>
	)
}

export default IssueStatusFilter
