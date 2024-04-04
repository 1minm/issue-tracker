import Pagination from "./components/Pagination"
import "./theme-config.css"

export default function Home() {
	return <Pagination itemCount={21} pageSize={10} currentPage={3} />
}
