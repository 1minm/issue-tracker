import prisma from "@/prisma/client"
import { Flex, Grid } from "@radix-ui/themes"
import "./theme-config.css"
import IssueSummary from "./IssueSummary"
import IssueChart from "./IssueChart"
import LatestIssues from "./LatestIssues"
import { Metadata } from "next/types"

export default async function Home() {
	const open = await prisma.issue.count({ where: { status: "OPEN" } })
	const inProgress = await prisma.issue.count({
		where: { status: "IN_PROGRESS" },
	})
	const close = await prisma.issue.count({ where: { status: "CLOSE" } })
	return (
		<Grid columns={{ initial: "1", md: "2" }} gap="5">
			<Flex direction="column" gap="5">
				<IssueSummary open={open} inProgress={inProgress} closed={close} />
				<IssueChart open={open} inProgress={inProgress} closed={close} />
			</Flex>
			<LatestIssues />
		</Grid>
	)
}

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
	title: "Issue Tracker - Dashboard",
	description: "View a summary of project issues",
}
