import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden bg-slate-50 pt-32 pb-24 dark:bg-[#080a0e]">
        <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Terms of Service
          </h1>
          <div className="text-slate-600 dark:text-slate-400">
            <p className="mb-4">Last updated: August 2026</p>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using the services provided by RC Dev Studios, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-slate-900 dark:text-white">2. Services</h2>
            <p className="mb-4">
              RC Dev Studios provides digital product design and development services including but not limited to web development, mobile application development, UI/UX design, and cloud & DevOps solutions. We reserve the right to modify, suspend, or discontinue any service at any time.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-slate-900 dark:text-white">3. Intellectual Property</h2>
            <p className="mb-4">
              All content, designs, code, and materials created by RC Dev Studios remain our intellectual property unless explicitly transferred to the client via a written agreement. Client-owned assets and materials provided to us remain the property of the client.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-slate-900 dark:text-white">4. Client Responsibilities</h2>
            <p className="mb-4">
              Clients are responsible for providing accurate project requirements, timely feedback, and any necessary assets or credentials. Delays caused by the client may result in project timeline adjustments.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-slate-900 dark:text-white">5. Payment Terms</h2>
            <p className="mb-4">
              Payment terms are agreed upon in the project contract. RC Dev Studios reserves the right to pause or stop work if payments are not made according to the agreed schedule.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-slate-900 dark:text-white">6. Confidentiality</h2>
            <p className="mb-4">
              We treat all client information as confidential. We will not disclose your project details, business information, or any proprietary data to third parties without your explicit consent.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-slate-900 dark:text-white">7. Limitation of Liability</h2>
            <p className="mb-4">
              RC Dev Studios is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-slate-900 dark:text-white">8. Governing Law</h2>
            <p className="mb-4">
              These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-slate-900 dark:text-white">9. Contact Us</h2>
            <p className="mb-4">
              For any questions regarding these Terms of Service, please contact us at:{" "}
              <a href="mailto:rcdevstudios@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                rcdevstudios@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
