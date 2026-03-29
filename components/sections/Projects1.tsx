
import Link from "next/link"
import dynamic from 'next/dynamic'
const PortfolioFilter = dynamic(() => import('../elements/PortfolioFilter'), {
	ssr: false,
})

export default function Projects1() {
	return (
		<>

			<div id="projects" className="section-projects-1 position-relative pt-120 pb-6 bg-900">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">My Latest Works</h3>
							<span className="fs-5 fw-medium text-200">
								I believe that working hard and trying to learn every day will
								<br />
								make me improve in satisfying my customers.
							</span>
						</div>
						<div className="col-lg-auto">
							<Link href="/work" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto d-none d-xl-block">
								View All Projects
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-900 fillter-project" data-background="assets/imgs/projects/projects-1/background.png">
				<PortfolioFilter />
			</div>
		</>
	)
}
