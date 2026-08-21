import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — RC Dev Studios",
  description: "Learn how RC Dev Studios collects, uses, stores, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden bg-white pt-32 pb-24 dark:bg-[#050507]">
        <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 lg:px-8">

          {/* Page Header */}
          <div className="mb-12 border-b border-slate-200 pb-10 dark:border-slate-800">
            <h1 className="mb-4 text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Last updated: <span className="font-semibold text-slate-700 dark:text-slate-300">August 21, 2026</span>
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              At <strong>RC Dev Studios</strong>, your privacy matters to us. This Privacy Policy explains how we collect, 
              use, store, share, and protect your personal information when you visit{" "}
              <span className="font-medium text-purple-600 dark:text-purple-400">rcdevstudios.com</span> or contact us about our services.
            </p>
          </div>

          <div className="space-y-12 text-slate-600 dark:text-slate-400">

            {/* 1. What Data We Collect */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                1. What Data We Collect
              </h2>
              <p className="mb-4">We may collect the following types of personal information:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Identity Data:</strong> Your name, company name, or similar identifiers you provide when reaching out to us.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Contact Data:</strong> Email address, phone number, or other contact information you share via forms or direct messages.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Technical Data:</strong> IP address, browser type and version, time zone, operating system, and device information collected automatically when you visit our website.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Usage Data:</strong> Information about how you use our website, which pages you visit, how long you spend on them, and what links you click.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Communications Data:</strong> Messages, project briefs, or any content you send to us directly via email or contact forms.</span>
                </li>
              </ul>
            </section>

            {/* 2. Why We Collect It */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                2. Why We Collect Your Data
              </h2>
              <p className="mb-4">We collect your personal data for the following purposes:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-pink-500 translate-y-1" />
                  <span>To respond to your enquiries and project requests</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-pink-500 translate-y-1" />
                  <span>To provide our design, development, and consulting services</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-pink-500 translate-y-1" />
                  <span>To send relevant project updates and communications</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-pink-500 translate-y-1" />
                  <span>To improve our website experience and service quality</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-pink-500 translate-y-1" />
                  <span>To analyse website traffic and usage through analytics tools</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-pink-500 translate-y-1" />
                  <span>To ensure website security and prevent fraudulent activity</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-pink-500 translate-y-1" />
                  <span>To comply with legal obligations</span>
                </li>
              </ul>
            </section>

            {/* 3. How We Use the Data */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                3. How We Use Your Data
              </h2>
              <p className="mb-4">
                We will only use your personal data when the law allows us to. The legal bases we rely on include:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Contract performance:</strong> Processing necessary to fulfil a service agreement with you.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Legitimate interests:</strong> Running and improving our business, provided your rights are not overridden.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Consent:</strong> Where you have specifically agreed, such as subscribing to updates or newsletters.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Legal obligation:</strong> Compliance with applicable laws or regulations.</span>
                </li>
              </ul>
            </section>

            {/* 4. Who We Share It With */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                4. Who We Share Your Data With
              </h2>
              <p className="mb-4">
                We do not sell or trade your personal data. We may share it only with trusted third-party service providers to operate our website and deliver services:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Hosting & Infrastructure:</strong> Cloud providers such as AWS or Vercel for website hosting.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Analytics:</strong> Services like Google Analytics to understand how visitors use our website.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Email Communication:</strong> Email service providers to communicate with you regarding projects or enquiries.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Legal compliance:</strong> Where required by law, court order, or government authority.</span>
                </li>
              </ul>
              <p className="mt-4">All third-party providers are required to keep your data secure and to use it only for the purposes we specify.</p>
            </section>

            {/* 5. Cookies */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                5. Cookies and Tracking Technologies
              </h2>
              <p className="mb-4">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. These include:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-pink-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Strictly necessary cookies:</strong> Required for the website to function correctly (e.g., theme preferences).</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-pink-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Analytics cookies:</strong> Help us understand website usage and improve our content.</span>
                </li>
              </ul>
              <p className="mt-4">You can control cookies through your browser settings. Disabling certain cookies may affect your website experience.</p>
            </section>

            {/* 6. Data Security */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                6. How We Protect Your Information
              </h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal data from unauthorised access, loss, alteration, or disclosure. While we take every reasonable precaution, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* 7. Data Retention */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                7. How Long We Retain Your Information
              </h2>
              <p>
                We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including any legal, accounting, or reporting requirements. When data is no longer needed, it is securely deleted or anonymised.
              </p>
            </section>

            {/* 8. Your Rights */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                8. Your Privacy Rights
              </h2>
              <p className="mb-4">Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Access:</strong> Request a copy of the personal data we hold about you.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Correction:</strong> Ask us to correct inaccurate or incomplete data.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Deletion:</strong> Request that we erase your personal data, subject to applicable legal exceptions.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Objection:</strong> Object to us processing your data for certain purposes.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500 translate-y-1" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Portability:</strong> Request a copy of your data in a structured, machine-readable format.</span>
                </li>
              </ul>
              <p className="mt-4">To exercise any of these rights, please contact us using the details in Section 12.</p>
            </section>

            {/* 9. Children's Privacy */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                9. Children&apos;s Privacy
              </h2>
              <p>
                Our website and services are not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a child, please contact us immediately so we can delete it.
              </p>
            </section>

            {/* 10. Third-Party Links */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                10. Third-Party Links and Services
              </h2>
              <p>
                Our website may contain links to third-party websites, GitHub repositories, or other services. We are not responsible for the privacy practices of those third parties. We encourage you to review the privacy policies of any external sites you visit.
              </p>
            </section>

            {/* 11. Policy Updates */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                11. Policy Updates
              </h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Last updated&quot; date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your information. Continued use of our website after any changes constitutes your acceptance of the updated policy.
              </p>
            </section>

            {/* 12. Contact Us */}
            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-[#0c0f14]">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                12. Contact Us About Privacy
              </h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests relating to this Privacy Policy or how we handle your personal data, please contact us:
              </p>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Email: </span>
                  <a href="mailto:rcdevstudios@gmail.com" className="text-purple-600 hover:underline dark:text-purple-400">
                    rcdevstudios@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Phone: </span>
                  <a href="tel:7676339179" className="text-purple-600 hover:underline dark:text-purple-400">
                    7676339179
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">GitHub: </span>
                  <a href="https://github.com/rcdevstudios" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline dark:text-purple-400">
                    github.com/rcdevstudios
                  </a>
                </p>
              </div>
              <div className="mt-6 flex gap-4">
                <Link
                  href="/"
                  className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-[#11161d] dark:text-white"
                >
                  ← Back to Home
                </Link>
                <Link
                  href="/terms-of-service"
                  className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
                >
                  Terms of Service →
                </Link>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
