import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function WorkPersonalPortfolio() {
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
                                            Personal Portfolio Website
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            A modern and interactive portfolio built with Next.js to showcase my professional journey.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Product</p>
                                        <h6>Personal Brand</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Type</p>
                                        <h6>Next.js Development</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Timeline</p>
                                        <h6>March 2026</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center d-flex flex-column align-items-center justify-content-center">
                                         <p className="text-300 mb-2">Platform</p>
                                         <Link href="https://asif-abullah.netlify.app/" target="_blank" className="btn btn-dark btn-sm py-1 px-3 rounded-2 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
                                             <i className="ri-global-line me-2 text-primary-1"></i>
                                             <div className="text-start">
                                                 <span style={{ fontSize: '12px', color: '#ffffff', fontWeight: 'bold' }}>Visit Website</span>
                                             </div>
                                         </Link>
                                     </div>
                                </div>

                                <div className="col-12 text-center py-5">
                                    <div className="mx-auto rounded-4 overflow-hidden shadow-lg" style={{ maxWidth: '1000px' }}>
                                        <img src="/assets/my%20portfolio.jpeg" alt="Personal Portfolio Website" className="w-100 img-fluid" style={{ height: 'auto', display: 'block' }} />
                                    </div>
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">Project Overview</h5>
                                    <p className="text-300">
                                        Designed and developed my own <strong>personal portfolio website</strong> using <strong>Next.js</strong> to showcase my skills, projects, and professional journey in a clean and interactive way.
                                    </p>
                                    <p className="text-300">
                                        This project reflects my ability to blend creativity with technical implementation, even though my primary role is in Software Quality Assurance. From planning to deployment, the entire project was handled independently, demonstrating my initiative and self-learning mindset.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-4">The "Anti-Gravity" Inspiration</h5>
                                    <p className="text-300">
                                        The website was built using a <strong>vibe coding approach</strong>, where I leveraged AI-assisted development tools to speed up the workflow and maintain code quality. I used Google <strong>“Anti-Gravity”</strong> as a creative inspiration and idea source during the design process to bring a unique and engaging feel to the UI.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-5">Key Highlights</h5>
                                    <ul className="list-unstyled">
                                        <li className="d-flex mb-2"><i className="ri-check-line text-primary-1 me-2"></i> <span className="text-300">Developed with Next.js for high performance and scalability</span></li>
                                        <li className="d-flex mb-2"><i className="ri-check-line text-primary-1 me-2"></i> <span className="text-300">Inspired by creative concepts like Google Anti-Gravity</span></li>
                                        <li className="d-flex mb-2"><i className="ri-check-line text-primary-1 me-2"></i> <span className="text-300">AI-assisted "vibe coding" development methodology</span></li>
                                        <li className="d-flex mb-2"><i className="ri-check-line text-primary-1 me-2"></i> <span className="text-300">Fully responsive, modern, and interactive design</span></li>
                                        <li className="d-flex mb-2"><i className="ri-check-line text-primary-1 me-2"></i> <span className="text-300">Fast and secure deployment using Netlify</span></li>
                                        <li className="d-flex mb-2"><i className="ri-check-line text-primary-1 me-2"></i> <span className="text-300">Complete end-to-end self-learning personal project</span></li>
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
                                                    <td>Frontend Framework</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Vercel/Netlify</strong></td>
                                                    <td>Deployment & CI/CD</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>AI Tools</strong></td>
                                                    <td>GitHub Copilot & Agentic AI</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Glassmorphism</strong></td>
                                                    <td>UI Design Aesthetic</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h5 className="fs-5 fw-medium mt-5">Outcome & Learning</h5>
                                    <div className="row mt-3">
                                        <div className="col-12 mb-4">
                                            <div className="p-4 bg-6 rounded-3 h-100">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex mb-2"><i className="ri-arrow-right-s-line text-primary-1 me-2"></i> <span className="text-300">Bridged the gap between SQA and Full-stack development</span></li>
                                                    <li className="d-flex mb-2"><i className="ri-arrow-right-s-line text-primary-1 me-2"></i> <span className="text-300">Mastered modern AI-driven development workflows</span></li>
                                                    <li className="d-flex mb-2"><i className="ri-arrow-right-s-line text-primary-1 me-2"></i> <span className="text-300">Created a professional-grade personal brand platform</span></li>
                                                    <li className="d-flex"><i className="ri-arrow-right-s-line text-primary-1 me-2"></i> <span className="text-300">Optimized for accessibility and speed</span></li>
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
