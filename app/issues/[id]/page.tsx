import prisma from "@/prisma/client"
import { notFound } from "next/navigation"

interface IssueDetailPageProps {
	params: { id: string }
}

const IssueDetailPage = async ({ params: { id } }: IssueDetailPageProps) => {
	const issue = await prisma.issue.findUnique({
		where: { id: parseInt(id) },
	})
	if (!issue) notFound()

	return (
		<>
			<p>{issue.title}</p>
			<p>{issue.description}</p>
			<p>{issue.status}</p>
			<p>{issue.createdAt.toDateString()}</p>
		</>
	)
}

export default IssueDetailPage
