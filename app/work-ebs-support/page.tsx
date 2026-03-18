import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function WorkEBSSupport() {
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
                                            EBS Support System Automation (Playwright)
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            Automated UI tests for the EBS Support System web application built using Playwright and Node.js.
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
                                        <h6>Automation Testing</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Timeline</p>
                                        <h6>March 2026</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center d-flex flex-column align-items-center justify-content-center">
                                        <p className="text-300 mb-2">Live URL</p>
                                        <Link href="https://uat-support-v2.oss.net.bd/" target="_blank" className="btn btn-dark btn-sm py-1 px-3 rounded-2 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
                                            <i className="ri-global-line me-2 text-primary-1"></i>
                                            <div className="text-start">
                                                <span style={{ fontSize: '12px', color: '#ffffff', fontWeight: 'bold' }}>Visit Website</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-12 text-center py-5">
                                    <div className="mx-auto rounded-4 overflow-hidden shadow-lg" style={{ maxWidth: '1000px' }}>
                                        <img src="/assets/imgs/support%20portal.png" alt="EBS Support Portal Automation" className="w-100 img-fluid" style={{ height: 'auto', display: 'block', transform: 'scale(1.1)', transformOrigin: 'center center' }} />
                                    </div>
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">Project Overview</h5>
                                    <p className="text-300">
                                        This project contains automated UI tests for the <strong>EBS Support System</strong> web application. The automation framework is built using <strong>Playwright</strong> and <strong>Node.js</strong> to validate core functionalities of the support portal such as ticket submission, viewing ticket details, replying to tickets, page redirection, and success confirmation screens.
                                    </p>
                                    <p className="text-300">
                                        The goal of this project is to reduce manual testing effort and ensure that the system works correctly after updates or deployments.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-4">Objectives</h5>
                                    <ul className="list-unstyled">
                                        <li className="d-flex mb-2"><i className="ri-check-line text-primary-1 me-2"></i> <span className="text-300">Automate major workflows of the EBS Support System</span></li>
                                        <li className="d-flex mb-2"><i className="ri-check-line text-primary-1 me-2"></i> <span className="text-300">Reduce manual regression testing time</span></li>
                                        <li className="d-flex mb-2"><i className="ri-check-line text-primary-1 me-2"></i> <span className="text-300">Ensure UI elements and user flows work correctly</span></li>
                                        <li className="d-flex mb-2"><i className="ri-check-line text-primary-1 me-2"></i> <span className="text-300">Detect issues early in the development lifecycle</span></li>
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
                                                    <td><strong>Playwright</strong></td>
                                                    <td>Browser automation and UI testing</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Node.js</strong></td>
                                                    <td>Runtime environment</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>JavaScript</strong></td>
                                                    <td>Test scripting</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>HTML Reports</strong></td>
                                                    <td>Test execution reporting</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h5 className="fs-5 fw-medium mt-5">Test Modules</h5>
                                    
                                    <h6 className="mt-4 fw-bold">1. Homepage Submission Test</h6>
                                    <p className="text-300">Automates the process of submitting a support ticket from the homepage. Validation includes: form fields, data submission, and navigation after submission.</p>

                                    <h6 className="mt-4 fw-bold">2. Homepage View Test</h6>
                                    <p className="text-300">Verifies that the homepage UI loads properly and required elements are visible.</p>

                                    <h6 className="mt-4 fw-bold">3. Ticket Details and Reply Test</h6>
                                    <p className="text-300 mb-2">Validates the ticket details page and ensures users can reply to a ticket. Test Flow:</p>
                                    <ol className="text-300 mb-3 ms-3">
                                        <li>Open ticket details page.</li>
                                        <li>Verify ticket information.</li>
                                        <li>Verify ticket progress steps.</li>
                                        <li>Click the reply button.</li>
                                        <li>Enter a reply message.</li>
                                        <li>Verify attachment upload section.</li>
                                    </ol>

                                    <h6 className="mt-4 fw-bold">4. Redirecting Test</h6>
                                    <p className="text-300">Ensures that the application redirects users correctly between pages.</p>

                                    <h6 className="mt-4 fw-bold">5. Success Screen Test</h6>
                                    <p className="text-300">Validates that the success confirmation screen appears after a successful action.</p>

                                    <h5 className="fs-5 fw-medium mt-5">Benefits of Automation</h5>
                                    <div className="row mt-3">
                                        <div className="col-12 mb-4">
                                            <div className="p-4 bg-6 rounded-3 h-100">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex mb-2"><i className="ri-arrow-right-s-line text-primary-1 me-2"></i> <span className="text-300">Faster regression testing</span></li>
                                                    <li className="d-flex mb-2"><i className="ri-arrow-right-s-line text-primary-1 me-2"></i> <span className="text-300">Reduced manual effort</span></li>
                                                    <li className="d-flex mb-2"><i className="ri-arrow-right-s-line text-primary-1 me-2"></i> <span className="text-300">Reliable and repeatable tests</span></li>
                                                    <li className="d-flex"><i className="ri-arrow-right-s-line text-primary-1 me-2"></i> <span className="text-300">Improved software quality</span></li>
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
