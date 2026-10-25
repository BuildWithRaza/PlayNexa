
import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  LockKeyhole,
  Database,
  UserRound,
  Cookie,
  Eye,
  Mail,
  ChevronRight,
  FileText,
  Settings,
  Globe,
} from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "October 20, 2026";

  const sections = [
    {
      id: "information",
      icon: Database,
      title: "1. Information We Collect",
      content: (
        <>
          <p>
            When you use PlayNexa, we may collect information that you
            provide directly or that is generated through your use of
            the platform.
          </p>
          <ul>
            <li>
              <strong>Account information:</strong> Name, user ID, email
              address, and account credentials.
            </li>
            <li>
              <strong>Player profiles:</strong> Sport, position, skills,
              statistics, achievements, and profile images you choose
              to provide.
            </li>
            <li>
              <strong>Team profiles:</strong> Team name, sport, location,
              team logo, roster information, and other details submitted
              by team representatives.
            </li>
            <li>
              <strong>Communications:</strong> Messages, feedback, and
              support requests you submit to us.
            </li>
            <li>
              <strong>Technical information:</strong> Depending on how
              the app is implemented, device, browser, diagnostic, and
              usage information may be collected.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "usage",
      icon: Eye,
      title: "2. How We Use Your Information",
      content: (
        <>
          <p>We may use your information to:</p>
          <ul>
            <li>Create and manage player and team accounts.</li>
            <li>Display profiles and sports information according to your settings.</li>
            <li>Help users discover players, teams, and sports communities.</li>
            <li>Review profiles submitted for verification.</li>
            <li>Respond to support requests and user feedback.</li>
            <li>Maintain platform functionality, safety, and security.</li>
            <li>Improve features and investigate technical problems.</li>
            <li>Meet applicable legal obligations.</li>
          </ul>
        </>
      ),
    },
    {
      id: "visibility",
      icon: UserRound,
      title: "3. Public Profiles and Visibility",
      content: (
        <>
          <p>
            PlayNexa supports player and team profiles. Information
            displayed on a profile may be visible to other users,
            depending on the features and privacy controls available
            in the application.
          </p>
          <p>
            Before submitting profile information, consider whether
            you are comfortable sharing it. Avoid publishing passwords,
            financial details, private contact information, or other
            sensitive information in public profile fields.
          </p>
          <p>
            If profile verification is available, a verification status
            may be displayed to help users understand whether a profile
            has been reviewed. Verification should not be interpreted
            as a guarantee of a user's identity, ability, or conduct.
          </p>
        </>
      ),
    },
    {
      id: "sharing",
      icon: Globe,
      title: "4. How We Share Information",
      content: (
        <>
          <p>
            We do not intend to sell your personal information. Information
            may be shared in the following circumstances, where applicable:
          </p>
          <ul>
            <li>
              <strong>With other users:</strong> Profile information you
              choose to make visible on PlayNexa.
            </li>
            <li>
              <strong>With service providers:</strong> Providers that help
              operate hosting, storage, security, analytics, or support
              services, where such providers are used.
            </li>
            <li>
              <strong>For legal reasons:</strong> When disclosure is
              required by law or is necessary to respond to valid legal
              processes.
            </li>
            <li>
              <strong>With your direction:</strong> When you ask us to
              share information or otherwise consent to sharing.
            </li>
          </ul>
          <p>
            We will describe actual sharing practices more specifically
            as the platform's services and integrations are established.
          </p>
        </>
      ),
    },
    {
      id: "security",
      icon: LockKeyhole,
      title: "5. Data Security",
      content: (
        <>
          <p>
            We aim to use reasonable safeguards to protect information
            from unauthorized access, loss, misuse, or alteration.
            No online service or storage method can be guaranteed
            completely secure.
          </p>
          <p>
            If you are using a development version of PlayNexa that stores
            account information in browser localStorage, that information
            remains accessible to scripts running on the same origin and
            to anyone with access to the relevant browser profile.
            Browser localStorage is not a secure substitute for a
            production authentication system.
          </p>
          <p>
            For production use, passwords should be securely processed
            by a backend using an appropriate password-hashing method,
            rather than stored as plain text in the browser.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      icon: Cookie,
      title: "6. Cookies and Similar Technologies",
      content: (
        <>
          <p>
            PlayNexa may use cookies or similar technologies if needed
            for authentication, preferences, security, or analytics.
            The technologies actually used depend on the app's
            implementation and integrations.
          </p>
          <p>
            You can manage cookies through your browser settings.
            Disabling certain cookies may affect features that depend
            on them. If PlayNexa does not use cookies or analytics,
            this section should be updated to reflect that.
          </p>
        </>
      ),
    },
    {
      id: "rights",
      icon: Settings,
      title: "7. Your Privacy Choices and Rights",
      content: (
        <>
          <p>
            Depending on applicable law and how PlayNexa operates,
            you may have the right to:
          </p>
          <ul>
            <li>Request access to your personal information.</li>
            <li>Ask for inaccurate information to be corrected.</li>
            <li>Request deletion of your account or personal information.</li>
            <li>Object to or request limits on certain processing activities.</li>
            <li>Withdraw consent where processing relies on your consent.</li>
            <li>Raise a privacy concern or submit a complaint.</li>
          </ul>
          <p>
            To make a request, contact us using the details in the
            Contact section below. We may need to verify your identity
            before processing certain requests. Some information may
            need to be retained where required by law.
          </p>
        </>
      ),
    },
    {
      id: "retention",
      icon: Database,
      title: "8. Data Retention and Deletion",
      content: (
        <>
          <p>
            We intend to retain personal information only for as long
            as reasonably necessary for the purposes described in this
            policy, unless a longer period is required or permitted
            by applicable law.
          </p>
          <p>
            Retention periods may depend on account status, operational
            needs, security, dispute resolution, and legal obligations.
            When a deletion process is available, we will explain how
            to request account or data deletion.
          </p>
        </>
      ),
    },
    {
      id: "children",
      icon: ShieldCheck,
      title: "9. Children's Privacy",
      content: (
        <>
          <p>
            PlayNexa should only collect children's personal information
            in accordance with applicable law and any required parental
            or guardian consent. If the platform is available to minors,
            appropriate safeguards and age-related controls should be
            implemented.
          </p>
          <p>
            If you believe a child has provided personal information
            inappropriately, contact us so the matter can be reviewed.
          </p>
        </>
      ),
    },
    {
      id: "changes",
      icon: FileText,
      title: "10. Changes to This Policy",
      content: (
        <p>
          We may update this Privacy Policy as PlayNexa develops or
          when our legal obligations or data practices change. We will
          update the date shown at the top when a revised version is
          published. Where required by law, we will provide additional
          notice or seek consent for material changes.
        </p>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-600 px-5 py-20 text-white sm:py-28">
        <div className="absolute -right-20 -top-16 -z-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 -z-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur">
            <ShieldCheck size={34} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
            Your Privacy Matters
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            At PlayNexa, we believe that building a sports community
            should go hand in hand with respecting your privacy.
            Learn what information may be collected and how it is handled.
          </p>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-50">
            <FileText size={16} />
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Intro notice */}
      <section className="px-5 pt-10">
        <div className="mx-auto flex max-w-5xl gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
            <LockKeyhole size={24} />
          </div>
          <div>
            <h2 className="font-bold text-slate-900">
              Privacy in simple terms
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              This page explains the intended privacy practices for
              PlayNexa, a platform for player and team profiles. The
              final policy should reflect the data your deployed app
              actually collects, stores, and shares.
            </p>
          </div>
        </div>
      </section>

      {/* Policy content */}
      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-4">

          {/* Table of contents */}
          <aside className="lg:sticky lg:top-6">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="mb-4 font-bold text-slate-900">
                On this page
              </h2>

              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    <span>{section.title}</span>
                    <ChevronRight size={15} className="shrink-0" />
                  </a>
                ))}

                <a
                  href="#contact"
                  className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  <span>11. Contact Us</span>
                  <ChevronRight size={15} className="shrink-0" />
                </a>
              </nav>
            </div>
          </aside>

          {/* Main policy */}
          <div className="space-y-5 lg:col-span-3">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-xl font-extrabold leading-snug text-slate-900">
                        {section.title}
                      </h2>

                      <div className="policy-content mt-4 space-y-4 text-sm leading-7 text-slate-600">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            {/* Contact */}
            <article
              id="contact"
              className="scroll-mt-8 rounded-2xl bg-gradient-to-br from-blue-800 to-cyan-600 p-7 text-white shadow-lg sm:p-9"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <Mail size={25} />
              </div>

              <h2 className="mt-5 text-2xl font-extrabold">
                11. Contact Us
              </h2>

              <p className="mt-3 leading-7 text-blue-100">
                If you have questions about this Privacy Policy or
                want to make a privacy-related request, please contact
                the PlayNexa team.
              </p>

              <a
                href="mailto:privacy@playnexa.com"
                className="mt-5 inline-flex items-center gap-2 break-all rounded-xl bg-white px-5 py-3 font-bold text-blue-800 transition hover:bg-cyan-50"
              >
                <Mail size={18} />
                privacy@playnexa.com
              </a>

              <p className="mt-4 text-xs leading-6 text-blue-100">
                Replace this example email address with an active
                contact address managed by your team.
              </p>
            </article>

            {/* Back to top */}
            <div className="flex justify-end">
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-slate-950 px-5 py-12 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <ShieldCheck className="mx-auto text-cyan-400" size={35} />

          <h2 className="mt-4 text-2xl font-extrabold">
            Your game deserves a trusted space.
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            Thank you for being part of the PlayNexa community.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-bold text-white transition hover:brightness-110"
            >
              Contact Us
            </Link>

            <Link
              to="/"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
