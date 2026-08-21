import Link from "next/link";
import Image from "next/image";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const metadata = {
  title: "PixelMotion — Privacy Policy | RC Dev Studios",
  description:
    "Privacy Policy for PixelMotion, the modern creative editing application by RC Dev Studios. Learn how we collect, use, and protect your data.",
};

export default function PixelMotionPrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden bg-white pt-32 pb-24 dark:bg-[#050507]">
        <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 lg:px-8">

          {/* Page Header */}
          <div className="mb-12 border-b border-slate-200 pb-10 dark:border-slate-800">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/pixelmotion_logo.png"
                  alt="PixelMotion"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-purple-600 dark:text-purple-400">PixelMotion</p>
                <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                  Privacy Policy
                </h1>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400">
              Last updated:{" "}
              <span className="font-semibold text-slate-700 dark:text-slate-300">August 21, 2026</span>
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              This Privacy Policy describes how <strong>RC Dev Studios</strong> collects, uses, stores, and protects
              your personal information when you use <strong>PixelMotion</strong> — our modern creative editing
              application for Android. By using PixelMotion, you agree to the practices described in this policy.
            </p>
          </div>

          <div className="space-y-12 text-slate-600 dark:text-slate-400">

            {/* 1. Data Collected */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                1. Information We Collect
              </h2>
              <p className="mb-4">PixelMotion collects the following information when you create an account and use the app:</p>

              <h3 className="mb-3 mt-6 text-lg font-bold text-slate-800 dark:text-slate-200">Account Information</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Name:</strong> Your full name, provided during sign-up, used to identify your account.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Email address:</strong> Used to create your account, log in, and receive password reset or OTP verification emails.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Password:</strong> Stored securely in encrypted form. We never store or transmit your plain-text password.</span>
                </li>
              </ul>

              <h3 className="mb-3 mt-6 text-lg font-bold text-slate-800 dark:text-slate-200">Media Access</h3>
              <p className="mb-3">PixelMotion requires access to your device media for its core editing functionality:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-pink-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Images:</strong> We request <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">READ_MEDIA_IMAGES</code> and <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">READ_EXTERNAL_STORAGE</code> to allow you to import photos for editing. We do not upload your images to our servers without your explicit action.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-pink-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Videos:</strong> We request <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">READ_MEDIA_VIDEO</code> to allow you to import video files for editing purposes.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-pink-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">User-selected media:</strong> On Android 13+, we use <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">READ_MEDIA_VISUAL_USER_SELECTED</code> so you have precise control over which specific files you share with the app.</span>
                </li>
              </ul>

              <h3 className="mb-3 mt-6 text-lg font-bold text-slate-800 dark:text-slate-200">Session & Device Information</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Device type:</strong> Collected to display active session information in account security settings.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Session location:</strong> Approximate location derived from IP address, shown to you in your active sessions list so you can identify and revoke suspicious logins.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Last active time:</strong> Timestamp of your most recent session activity, used for session management security.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Access token:</strong> A secure token stored locally on your device to keep you logged in between sessions.</span>
                </li>
              </ul>

              <h3 className="mb-3 mt-6 text-lg font-bold text-slate-800 dark:text-slate-200">Project Data</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Local projects:</strong> Your editing projects are stored locally on your device. Project metadata may be synced with our servers to enable cross-device access or backups if you choose to do so.</span>
                </li>
              </ul>
            </section>

            {/* 2. Why We Collect */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                2. Why We Collect This Information
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                  <span>To create and manage your PixelMotion account</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                  <span>To authenticate you securely via login, OTP, and password reset</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                  <span>To provide core creative editing features — importing and processing images and videos</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                  <span>To display your active login sessions so you can manage account security</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                  <span>To allow you to change your password and manage two-factor authentication</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                  <span>To maintain and improve the app&apos;s performance and reliability</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                  <span>To provide customer support via the Help & Support feature</span>
                </li>
              </ul>
            </section>

            {/* 3. Permissions */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                3. App Permissions
              </h2>
              <p className="mb-4">PixelMotion requests the following Android permissions:</p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-[#0c0f14]">
                      <th className="px-5 py-3 text-left font-semibold text-slate-700 dark:text-slate-300">Permission</th>
                      <th className="px-5 py-3 text-left font-semibold text-slate-700 dark:text-slate-300">Why It&apos;s Needed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr>
                      <td className="px-5 py-3 font-mono text-xs text-purple-700 dark:text-purple-400">INTERNET</td>
                      <td className="px-5 py-3">API communication for authentication and syncing</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 font-mono text-xs text-purple-700 dark:text-purple-400">READ_EXTERNAL_STORAGE</td>
                      <td className="px-5 py-3">Access media files on Android 12 and below</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 font-mono text-xs text-purple-700 dark:text-purple-400">READ_MEDIA_IMAGES</td>
                      <td className="px-5 py-3">Import photos for editing on Android 13+</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 font-mono text-xs text-purple-700 dark:text-purple-400">READ_MEDIA_VIDEO</td>
                      <td className="px-5 py-3">Import videos for editing on Android 13+</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 font-mono text-xs text-purple-700 dark:text-purple-400">READ_MEDIA_VISUAL_USER_SELECTED</td>
                      <td className="px-5 py-3">Granular user-controlled media selection on Android 13+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                You can revoke any of these permissions at any time in your Android device settings under <strong className="text-slate-800 dark:text-slate-200">Settings → Apps → PixelMotion → Permissions</strong>. Revoking permissions may disable certain features.
              </p>
            </section>

            {/* 4. Data Storage & Security */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                4. Data Storage and Security
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500" />
                  <span>Your <strong className="text-slate-800 dark:text-slate-200">password is hashed</strong> and never stored or transmitted in plain text.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500" />
                  <span>All network communication between the app and our servers uses <strong className="text-slate-800 dark:text-slate-200">HTTPS encryption</strong>.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500" />
                  <span>Your session token is stored <strong className="text-slate-800 dark:text-slate-200">locally on your device</strong> and used to authenticate API requests without re-entering credentials.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500" />
                  <span>Local project data is stored on <strong className="text-slate-800 dark:text-slate-200">your device only</strong> and is not uploaded unless you explicitly trigger a sync.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500" />
                  <span>We implement reasonable technical and organisational measures to protect your data from unauthorised access.</span>
                </li>
              </ul>
            </section>

            {/* 5. Data Sharing */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                5. Who We Share Your Data With
              </h2>
              <p className="mb-4">We do not sell your personal data. We may share it with:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-pink-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Backend / Cloud Infrastructure:</strong> Our own servers (hosted via cloud providers) process account authentication and session management.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-pink-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Email service:</strong> To deliver OTP codes and password reset emails to you.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-pink-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Legal authorities:</strong> Only if required by applicable law, court order, or regulatory process.</span>
                </li>
              </ul>
            </section>

            {/* 6. Session Management */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                6. Session Management & Security
              </h2>
              <p>
                PixelMotion lets you view and manage all active login sessions from the <strong className="text-slate-800 dark:text-slate-200">Security Settings</strong> screen. You can see which device and approximate location each session is from, when it was last active, and remotely log out of any session you don&apos;t recognise. You can also enable <strong className="text-slate-800 dark:text-slate-200">two-factor authentication</strong> for additional account protection.
              </p>
            </section>

            {/* 7. Data Retention */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                7. Data Retention
              </h2>
              <p>
                We retain your account data for as long as your PixelMotion account is active. When you delete your account, we will delete or anonymise your personal data within a reasonable period, except where we are required to retain it by law. Local data stored on your device is removed when you uninstall the app.
              </p>
            </section>

            {/* 8. Your Rights */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                8. Your Rights
              </h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Access</strong> the personal data we hold about you</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Correct</strong> any inaccurate information (via account settings or by contacting us)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Delete</strong> your account and associated data</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Revoke</strong> media permissions at any time via Android system settings</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                  <span><strong className="text-slate-800 dark:text-slate-200">Log out</strong> of any active session remotely from Security Settings</span>
                </li>
              </ul>
            </section>

            {/* 9. Children's Privacy */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                9. Children&apos;s Privacy
              </h2>
              <p>
                PixelMotion is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has registered an account, please contact us at{" "}
                <a href="mailto:rcdevstudios@gmail.com" className="text-purple-600 hover:underline dark:text-purple-400">rcdevstudios@gmail.com</a>{" "}
                and we will delete the account immediately.
              </p>
            </section>

            {/* 10. Third-Party Links */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                10. Third-Party Services
              </h2>
              <p>
                PixelMotion may use third-party libraries (such as Retrofit for networking and Gson for JSON parsing). These libraries do not independently collect your personal data. Our app does not currently integrate third-party advertising SDKs or social login providers.
              </p>
            </section>

            {/* 11. Policy Updates */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                11. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy as PixelMotion evolves with new features. When we make significant changes, we will update the &quot;Last updated&quot; date at the top. For major changes, we may notify you within the app. Continued use of PixelMotion after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* 12. Contact */}
            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-[#0c0f14]">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                12. Contact Us
              </h2>
              <p className="mb-4">
                If you have questions, concerns, or data requests regarding this Privacy Policy or PixelMotion&apos;s data practices, please reach out:
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
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-[#11161d] dark:text-white"
                >
                  ← Back to Home
                </Link>
                <Link
                  href="/#products"
                  className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
                >
                  View PixelMotion →
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
