"use client"

import { Button, TextField } from "@radix-ui/themes"
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { useForm, Controller } from "react-hook-form"
import axios from "axios"
import { useRouter } from "next/navigation"
// import dynamic from "next/dynamic"
// const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
// 	ssr: false,
// })

interface IssueForm {
	title: string
	description: string
}

const NewIssuePage = () => {
	const router = useRouter()
	const { register, control, handleSubmit } = useForm<IssueForm>()

	return (
		<>
			<form
				className="max-w-xl space-y-3"
				onSubmit={handleSubmit(async (data) => {
					await axios.post("/api/issues", data)
					router.push("/issues")
				})}
			>
				<TextField.Root placeholder="Title" {...register("title")} />
				<Controller
					control={control}
					name="description"
					render={({ field }) => <SimpleMDE {...field} />}
				/>
				<Button>Submit New Issue</Button>
			</form>
		</>
	)
}

export default NewIssuePage