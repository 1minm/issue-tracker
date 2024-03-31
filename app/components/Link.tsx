import NextLink from "next/link"
import { Link as RadixLink } from "@radix-ui/themes"

interface LinkProps {
	children: string
	href: string
}

const Link = ({ children, href }: LinkProps) => {
	return (
		<>
			<NextLink href={href} passHref legacyBehavior>
				<RadixLink>{children}</RadixLink>
			</NextLink>
		</>
	)
}

export default Link
