import prisma from "@/prisma/client"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"
import IssueFormSkeleton from "./loading"
import { Metadata } from "next/types"

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
	ssr: false,
	loading: () => <IssueFormSkeleton />,
})

interface EditIssuePageProps {
	params: { id: string }
}

const EditIssuePage = async ({ params }: EditIssuePageProps) => {
	const issue = await prisma.issue.findUnique({
		where: {
			id: parseInt(params.id),
		},
	})

	if (!issue) notFound()

	return <IssueForm issue={issue} />
}

export const metadata: Metadata = {
	title: "Issue Tracker - Issue Editor",
	description: "Edit issue",
}

export default EditIssuePage
