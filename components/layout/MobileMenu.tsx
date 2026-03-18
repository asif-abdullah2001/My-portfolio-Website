'use client'
import Link from 'next/link'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	return (
		<>
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<div className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo">
						<div className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''}`} onClick={handleMobileMenu}>
							<span className="burger-icon-top" />
							<span className="burger-icon-mid" />
							<span className="burger-icon-bottom" />
						</div>
					</div>
					<div className="mobile-header-content-area">
						<PerfectScrollbar className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
								<nav>
									<ul className="mobile-menu font-heading ps-0">
										<li className="nav-item">
											<Link className="nav-link active" href="/" onClick={handleMobileMenu}>Home</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" href="/#projects" onClick={handleMobileMenu}>Portfolio</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" href="/#resume" onClick={handleMobileMenu}>My Resume</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" href="/#skills" onClick={handleMobileMenu}>My Skills</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" href="/#contact" onClick={handleMobileMenu}>Contact</Link>
										</li>
									</ul>
								</nav>

								<div className="mobile-social-icon mt-4 mb-4 ps-0">
									<h6 className="mb-3 text-white">Follow Me</h6>
									<div className="d-flex gap-4">
										<Link href="https://www.facebook.com/share/1XUM1xryGY/" target="_blank">
											<i className="ri-facebook-circle-fill fs-3 text-white" />
										</Link>
										<Link href="https://www.linkedin.com/in/asif-abdullah-ba2a86245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
											<i className="ri-linkedin-fill fs-3 text-white" />
										</Link>
										<Link href="https://www.behance.net/sizanabdullah" target="_blank">
											<i className="ri-behance-fill fs-3 text-white" />
										</Link>
										<Link href="https://github.com/asif-abdullah2001" target="_blank">
											<i className="ri-github-fill fs-3 text-white" />
										</Link>
									</div>
								</div>
							</div>
						</PerfectScrollbar>
					</div>
				</div>
			</div>
		</>
	)
}
