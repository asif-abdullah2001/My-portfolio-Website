import Link from 'next/link'

export default function Footer1() {
	return (
		<>
			<footer>
				<div className="section-footer position-relative pt-60 pb-60 bg-secondary-1">
					<div className="container position-relative z-1">
						<div className="text-center">

							<div className="navigation d-none d-md-flex align-items-center justify-content-center flex-wrap gap-4 my-4">
								<Link href="/" className="fs-5">
									Home
								</Link>
								<Link href="/work" className="fs-5">
									Portfolio
								</Link>
								<Link href="/#contact" className="fs-5">
									Contact
								</Link>
							</div>
						</div>
						<div className="row text-center py-4">
							<span className="fs-6 text-white-keep">© {new Date().getFullYear()} All Rights Reserved by <span><Link href="/#" className="text-primary-1">Asif Abdullah</Link></span>
							</span></div>
					</div>
					<div className="position-absolute top-0 start-0 w-100 h-100 z-0" data-background="assets/imgs/footer-1/background.png " />
				</div>
			</footer>

		</>
	)
}
