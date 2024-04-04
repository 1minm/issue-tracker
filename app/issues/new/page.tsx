import dynamic from "next/dynamic"
import IssueFormSkeleton from "./loading"
import { Metadata } from "next/types"

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
	ssr: false,
	loading: () => <IssueFormSkeleton />,
})

const NewIssuePage = () => {
	return (
		<>
			<IssueForm />
		</>
	)
}

export const metadata: Metadata = {
	title: "Issue Tracker - New Issue",
	description: "New issue",
}

export default NewIssuePage
