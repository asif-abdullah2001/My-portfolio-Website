import Link from 'next/link'
import Menu from '../Menu'
import MobileMenu from '../MobileMenu'
import OffCanvas from '../OffCanvas'

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			<header>
				<nav className={`navbar navbar-expand-lg navbar-light w-100 flex-nowrap z-999 p-0 ${scroll ? 'navbar-stick' : ''}`} style={{ position: `${scroll ? "fixed" : "relative"}`, top: `${scroll ? "0" : "auto"}` }}>
					<Link href="/#" className="navbar-menu p-4 text-center square-100 menu-tigger icon_80 icon-shape d-none d-md-flex" data-bs-target=".offCanvas__info" aria-controls="offCanvas__info" onClick={handleOffCanvas}>
						<i className="ri-menu-2-line" />
					</Link>
					<div className="container py-3 px-0">
						{/* Mobile Menu Trigger */}
						{/* Mobile Menu Trigger & Social Icons */}
						<div className="d-lg-none d-flex align-items-center ms-3">
							<div className="cursor-pointer me-4" onClick={handleMobileMenu}>
								<i className="ri-menu-line fs-1" style={{ color: '#ffffff' }} />
							</div>
							<div className="d-flex gap-3">
								<Link href="https://www.facebook.com/share/1XUM1xryGY/" target="_blank">
									<i className="ri-facebook-circle-fill fs-4" style={{ color: '#ffffff' }} />
								</Link>
								<Link href="https://www.linkedin.com/in/asif-abdullah-ba2a86245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
									<i className="ri-linkedin-fill fs-4" style={{ color: '#ffffff' }} />
								</Link>
								<Link href="https://www.behance.net/sizanabdullah" target="_blank">
									<i className="ri-behance-fill fs-4" style={{ color: '#ffffff' }} />
								</Link>
								<Link href="https://github.com/asif-abdullah2001" target="_blank" className="text-decoration-none">
									<i className="ri-github-fill fs-4" style={{ color: '#ffffff' }} />
								</Link>
							</div>
						</div>

						<div className="d-none d-lg-flex">
							<div className="collapse navbar-collapse" id="navbarSupportedContent">
								<Menu />
							</div>
						</div>
						<div className="navbar-social d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
							<div className="d-md-flex d-none gap-3">
								<Link href="https://www.facebook.com/share/1XUM1xryGY/" target="_blank">
									<i className="ri-facebook-circle-fill fs-18" />
								</Link>
								<Link href="https://www.linkedin.com/in/asif-abdullah-ba2a86245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
									<i className="ri-linkedin-fill fs-18" />
								</Link>
								<Link href="https://www.behance.net/sizanabdullah" target="_blank">
									<i className="ri-behance-fill fs-18" />
								</Link>
								<Link href="https://github.com/asif-abdullah2001" target="_blank">
									<i className="ri-github-fill fs-18" />
								</Link>
							</div>
						</div>
					</div>

				</nav>
				{/* offCanvas-menu */}
				<OffCanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />
				<MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
			</header>

		</>
	)
}
