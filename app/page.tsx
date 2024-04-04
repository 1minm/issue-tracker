"use client"

import { useSearchParams } from "next/navigation"
import Pagination from "./components/Pagination"
import "./theme-config.css"

export default function Home({
	searchParams,
}: {
	searchParams: { page: string }
}) {
	return (
		<Pagination
			itemCount={21}
			pageSize={10}
			currentPage={parseInt(searchParams.page)}
		/>
	)
}
