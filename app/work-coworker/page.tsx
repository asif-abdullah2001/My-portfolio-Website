
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function WorkCoworker() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-work-single pt-150 pb-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto mb-lg-0">
                                    <div className="text-center">
                                        <h3 className="ds-3 mt-3 mb-4 text-primary-1">
                                            UI/UX case study: Co-worker APP
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            An Office Management and Employee Communication app designed to streamline office operations and enhance workplace connectivity.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Product</p>
                                        <h6>Business Automation</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Type</p>
                                        <h6>UI/UX Case Study</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Services</p>
                                        <h6>Product Design</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center d-flex flex-column align-items-center justify-content-center">
                                        <p className="text-300 mb-2">View Full Project</p>
                                        <Link href="https://www.behance.net/gallery/178174237/Co-worker-UIUX-case-Study-Employee-Communication-app" target="_blank" className="btn btn-dark btn-sm py-2 px-4 rounded-2 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
                                            <i className="ri-behance-fill me-2 text-primary-1 fs-5"></i>
                                            <span style={{ fontSize: '14px', color: '#ffffff', fontWeight: 'bold' }}>Behance Case Study</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-12 text-center">
                                    <img src="/assets/imgs/work/case study.jpeg" alt="Co-worker App Case Study" className="rounded-4 shadow-lg w-100 mb-8" style={{ maxWidth: '1000px' }} />
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">Overview</h5>
                                    <p className="text-300">
                                        Co-worker is a comprehensive Office Management and Employee Communication platform. It was envisioned to bridge the gap between management and employees by providing a centralized digital space for all office-related activities.
                                    </p>
                                    <h5 className="fs-5 fw-medium mt-4">The Management Solution</h5>
                                    <p className="text-300">
                                        Introducing Co-worker, an Office Management and Employee Communication app where there will be exciting facilities for the employees and the managers which will help to run and maintain an office very easily. The platform focuses on simplifying complex administrative tasks while fostering a transparent and communicative work environment.
                                    </p>
                                    <h5 className="fs-5 fw-medium mt-4">Key Features & Objectives</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Streamlined Communication:</p>
                                            <p className="text-300">Instant messaging and announcement systems to keep everyone aligned.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Efficient Management:</p>
                                            <p className="text-300">Tools for managers to monitor progress, manage resources, and oversee office operations effortlessly.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Employee Engagement:</p>
                                            <p className="text-300">Dedicated facilities to enhance employee satisfaction and ease of daily tasks.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}
