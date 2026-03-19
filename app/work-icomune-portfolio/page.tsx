import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function WorkICommunePortfolio() {
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
                                            ICommune App Portfolio Website
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            A modern and responsive portfolio website built with Next.js to showcase the ICommune application.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Product</p>
                                        <h6>ICommune Application</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Type</p>
                                        <h6>Next.js Development</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Role</p>
                                        <h6>Lead Developer</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Timeline</p>
                                        <h6>March 2026</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center d-flex flex-column align-items-center justify-content-center">
                                         <p className="text-300 mb-2">Live URL</p>
                                         <Link href="https://icommune.app/" target="_blank" className="btn btn-dark btn-sm py-1 px-3 rounded-2 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
                                             <i className="ri-global-line me-2 text-primary-1"></i>
                                             <div className="text-start">
                                                 <span style={{ fontSize: '12px', color: '#ffffff', fontWeight: 'bold' }}>Visit Website</span>
                                             </div>
                                         </Link>
                                     </div>
                                </div>

                                <div className="col-12 text-center py-5">
                                    <div className="mx-auto rounded-4 overflow-hidden shadow-lg" style={{ maxWidth: '1000px' }}>
                                        <img src="/assets/icomune%20portfolio.jpeg" alt="ICommune App Portfolio Website" className="w-100 img-fluid" style={{ height: 'auto', display: 'block' }} />
                                    </div>
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">Project Overview</h5>
                                    <p className="text-300">
                                        Developed a <strong>modern and responsive portfolio website</strong> for the ICommune application using <strong>Next.js</strong>. The primary goal of this project was to showcase the app’s features, modules, and overall product vision in a clean and user-friendly interface.
                                    </p>
                                    <p className="text-300">
                                        Although my core role is in Software Quality Assurance at <strong>Business Automation Ltd.</strong>, I independently took the initiative to design and develop this website due to development resource constraints. This project reflects my adaptability, cross-functional skills, and ability to contribute beyond traditional QA responsibilities.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-4">Development Approach</h5>
                                    <p className="text-300">
                                        The project was built using a <strong>vibe coding approach</strong>, leveraging AI-powered tools such as <strong>GitHub Copilot</strong> and <strong>agentic AI</strong> to accelerate development and maintain code efficiency. This workflow allowed for rapid prototyping and high-quality implementation of complex UI components.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-5">Key Highlights</h5>
                                    <ul className="list-unstyled">
                                        <li className="d-flex mb-2"><i className="ri-check-line text-primary-1 me-2"></i> <span className="text-300">Built with Next.js for performance and scalability</span></li>
                                        <li className="d-flex mb-2"><i className="ri-check-line text-primary-1 me-2"></i> <span className="text-300">Fully responsive and user-friendly UI</span></li>
                                        <li className="d-flex mb-2"><i className="ri-check-line text-primary-1 me-2"></i> <span className="text-300">Utilized AI-assisted development (GitHub Copilot & Agentic AI)</span></li>
                                        <li className="d-flex mb-2"><i className="ri-check-line text-primary-1 me-2"></i> <span className="text-300">Focused on clean structure and maintainable code</span></li>
                                        <li className="d-flex mb-2"><i className="ri-check-line text-primary-1 me-2"></i> <span className="text-300">Demonstrates cross-role capability (SQA → Development)</span></li>
                                    </ul>

                                    <h5 className="fs-5 fw-medium mt-5">Technology Stack</h5>
                                    <div className="table-responsive">
                                        <table className="table table-bordered text-300">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th>Technology</th>
                                                    <th>Purpose</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><strong>Next.js</strong></td>
                                                    <td>Core Framework for performance and scalability</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>React</strong></td>
                                                    <td>UI Component Development</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>AI-Powered Tools</strong></td>
                                                    <td>GitHub Copilot & Agentic AI for rapid development</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Vibe Coding</strong></td>
                                                    <td>Modern development methodology</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h5 className="fs-5 fw-medium mt-5">Project Impact</h5>
                                    <div className="row mt-3">
                                        <div className="col-12 mb-4">
                                            <div className="p-4 bg-6 rounded-3 h-100">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex mb-2"><i className="ri-arrow-right-s-line text-primary-1 me-2"></i> <span className="text-300">Showcased product vision effectively</span></li>
                                                    <li className="d-flex mb-2"><i className="ri-arrow-right-s-line text-primary-1 me-2"></i> <span className="text-300">Optimized performance and SEO</span></li>
                                                    <li className="d-flex mb-2"><i className="ri-arrow-right-s-line text-primary-1 me-2"></i> <span className="text-300">Bridged the gap between QA and Development</span></li>
                                                    <li className="d-flex"><i className="ri-arrow-right-s-line text-primary-1 me-2"></i> <span className="text-300">Delivered a premium user experience</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}
