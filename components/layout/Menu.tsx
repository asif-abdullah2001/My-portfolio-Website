import Link from "next/link"
import { usePathname } from "next/navigation" // usePathname is more suited for client-side path checking

export default function Menu() {
	const pathname = usePathname()

	return (
		<>
			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
				<li className="nav-item">
					<Link href="/" className={pathname === "/" ? "nav-link active" : "nav-link"}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/#projects" className={pathname === "/work" ? "nav-link active" : "nav-link"}>
						Portfolio
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/#resume" className="nav-link">
						My Resume
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/#skills" className="nav-link">
						My Skills
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/#contact" className={pathname === "#contact" ? "nav-link active" : "nav-link"}>
						Contact
					</Link>
				</li>
			</ul>
		</>
	)
}
