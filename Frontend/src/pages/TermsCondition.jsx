
import React from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  ShieldCheck,
  UserCheck,
  Users,
  Trophy,
  AlertTriangle,
  Ban,
  Scale,
  RefreshCw,
  Mail,
  ChevronRight,
  LockKeyhole,
} from "lucide-react";

const TermsCondition = () => {
  const lastUpdated = "October 20, 2026";

  const sections = [
    {
      id: "acceptance",
      icon: FileText,
      title: "1. Acceptance of Terms",
      content: (
        <>
          <p>
            Welcome to PlayNexa. These Terms and Conditions govern your
            access to and use of the PlayNexa platform, including its
            website, features, player profiles, team profiles, and
            related services.
          </p>
          <p>
            By accessing or using PlayNexa, you agree to these Terms.
            If you do not agree, you should not use the platform.
            If you use PlayNexa on behalf of a team or organization,
            you confirm that you are authorized to act on its behalf.
          </p>
        </>
      ),
    },
    {
      id: "eligibility",
      icon: UserCheck,
      title: "2. Eligibility and Accounts",
      content: (
        <>
          <p>
            You must meet the age and legal requirements applicable to
            your use of PlayNexa. Where a user is a minor, any required
            consent or supervision must be obtained in accordance with
            applicable law.
          </p>
          <ul>
            <li>Provide accurate information when creating an account.</li>
            <li>Keep your login credentials confidential.</li>
            <li>Notify the platform administrator if you suspect unauthorized access.</li>
            <li>Do not impersonate another person, player, or team.</li>
            <li>Do not create accounts for unlawful or deceptive purposes.</li>
          </ul>
          <p>
            You are responsible for activity carried out through your
            account, subject to applicable law and the platform's
            security obligations.
          </p>
        </>
      ),
    },
    {
      id: "profiles",
      icon: Users,
      title: "3. Player and Team Profiles",
      content: (
        <>
          <p>
            PlayNexa enables users to create player and team profiles
            to present sports-related information and connect with
            the sports community.
          </p>
          <ul>
            <li>Submit information that is accurate to the best of your knowledge.</li>
            <li>Only upload images and content that you have permission to use.</li>
            <li>Obtain appropriate permission before submitting another person's personal information.</li>
            <li>Keep profile details reasonably up to date.</li>
            <li>Do not publish confidential, abusive, misleading, or unlawful content.</li>
          </ul>
          <p>
            You retain rights you hold in your submitted content.
            You grant PlayNexa permission to host, display, and process
            that content as reasonably necessary to operate the service,
            subject to your settings and applicable law.
          </p>
        </>
      ),
    },
    {
      id: "verification",
      icon: ShieldCheck,
      title: "4. Profile Verification",
      content: (
        <>
          <p>
            PlayNexa may provide a profile verification feature to
            indicate that a profile has undergone a review process.
            The scope of any review depends on the verification
            procedures actually implemented by the platform.
          </p>
          <p>
            A verification status is not a guarantee of athletic
            ability, achievements, identity in every circumstance,
            trustworthiness, or future conduct. Users should make
            their own informed decisions when interacting with others.
          </p>
          <p>
            PlayNexa may review, decline, suspend, or revoke verification
            where permitted by applicable rules and law.
          </p>
        </>
      ),
    },
    {
      id: "conduct",
      icon: Trophy,
      title: "5. Acceptable Use",
      content: (
        <>
          <p>
            You agree to use PlayNexa responsibly and respectfully.
            You must not:
          </p>
          <ul>
            <li>Harass, threaten, bully, or discriminate against other users.</li>
            <li>Post fraudulent, deceptive, defamatory, or unlawful material.</li>
            <li>Upload malware or attempt to compromise platform security.</li>
            <li>Access another user's account without authorization.</li>
            <li>Scrape, copy, or collect user information without permission or a lawful basis.</li>
            <li>Interfere with the normal operation of the service.</li>
            <li>Use the platform to facilitate illegal activity or spam.</li>
          </ul>
          <p>
            We may investigate reported violations and take reasonable
            action where permitted by law and supported by our
            implemented moderation procedures.
          </p>
        </>
      ),
    },
    {
      id: "content",
      icon: FileText,
      title: "6. Content and Intellectual Property",
      content: (
        <>
          <p>
            PlayNexa's original branding, design, software, and other
            platform materials may be protected by intellectual
            property laws. You may not reproduce or commercially exploit
            those materials without authorization, except as permitted
            by law.
          </p>
          <p>
            You are responsible for the content you submit and must
            have the necessary rights or permissions to use it.
            You must not upload content that infringes another
            person's copyright, trademark, privacy, or other rights.
          </p>
          <p>
            If you believe content on PlayNexa infringes your rights,
            contact us with enough information to identify the content
            and explain your concern.
          </p>
        </>
      ),
    },
    {
      id: "third-party",
      icon: LockKeyhole,
      title: "7. Privacy and Personal Information",
      content: (
        <>
          <p>
            Your use of PlayNexa is also subject to our Privacy Policy,
            which explains how personal information may be collected,
            used, stored, and shared.
          </p>
          <p>
            Review our{" "}
            <Link
              to="/privacy-policy"
              className="font-semibold text-blue-700 underline underline-offset-4 hover:text-cyan-600"
            >
              Privacy Policy
            </Link>{" "}
            before submitting personal information. Public profile
            information may be visible to other users depending on the
            platform's features and settings.
          </p>
        </>
      ),
    },
    {
      id: "disclaimer",
      icon: AlertTriangle,
      title: "8. No Guarantee of Sports Opportunities",
      content: (
        <>
          <p>
            PlayNexa provides tools for presenting sports profiles and
            discovering connections. Unless expressly stated otherwise,
            the platform does not guarantee selection by a team,
            recruitment, contracts, sponsorships, match participation,
            performance results, or career opportunities.
          </p>
          <p>
            Users are responsible for evaluating the accuracy of
            information provided by other users and for making
            appropriate arrangements before meeting, training, or
            engaging in sports activities.
          </p>
          <p>
            PlayNexa is not a substitute for professional coaching,
            medical advice, or appropriate safety precautions during
            sports activities.
          </p>
        </>
      ),
    },
    {
      id: "termination",
      icon: Ban,
      title: "9. Suspension and Account Termination",
      content: (
        <>
          <p>
            You may stop using PlayNexa at any time. If account deletion
            is supported, you may request it through the available
            account controls or by contacting us.
          </p>
          <p>
            Where permitted by law, PlayNexa may restrict, suspend,
            or terminate access if there is a reasonable basis to
            believe that a user has violated these Terms, compromised
            platform security, or created a serious risk to others.
          </p>
          <p>
            Any handling or retention of information following account
            closure is subject to the Privacy Policy and applicable law.
          </p>
        </>
      ),
    },
    {
      id: "liability",
      icon: Scale,
      title: "10. Limitation of Liability",
      content: (
        <>
          <p>
            To the extent permitted by applicable law, PlayNexa is
            provided on an "as available" basis. We do not guarantee
            that the service will always be uninterrupted, error-free,
            or available on every device.
          </p>
          <p>
            Nothing in these Terms excludes or limits liability that
            cannot lawfully be excluded or limited. Any other limitation
            of liability must be interpreted subject to applicable law
            and the rights available to users.
          </p>
          <p>
            Users remain responsible for their own decisions and
            interactions with other users, including arrangements
            made outside the platform.
          </p>
        </>
      ),
    },
    {
      id: "changes",
      icon: RefreshCw,
      title: "11. Changes to These Terms",
      content: (
        <p>
          We may revise these Terms as PlayNexa develops, features
          change, or legal requirements evolve. The latest version
          will be published on this page with an updated revision date.
          Where required by law, we will provide notice or obtain
          consent for material changes. Your options if you disagree
          with a change are subject to applicable law.
        </p>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero */}
      <section
        id="top"
        className="relative isolate overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-600 px-5 py-20 text-white sm:py-28"
      >
        <div className="absolute -right-20 -top-16 -z-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 -z-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur">
            <FileText size={34} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
            Clear Rules. Better Connections.
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Terms &amp; Conditions
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Please read these terms carefully before using PlayNexa.
            They explain the basic rules, responsibilities, and
            expectations for everyone in our sports community.
          </p>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-50">
            <FileText size={16} />
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-5 pt-10">
        <div className="mx-auto flex max-w-5xl gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h2 className="font-bold text-slate-900">
              Welcome to PlayNexa
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              These Terms are intended to help users understand how
              to use PlayNexa responsibly. They should be reviewed and
              adapted to the actual features, business practices, and
              legal requirements of the deployed application.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
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
                  <span>12. Contact Us</span>
                  <ChevronRight size={15} className="shrink-0" />
                </a>
              </nav>
            </div>
          </aside>

          {/* Terms sections */}
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

                      <div className="terms-content mt-4 space-y-4 text-sm leading-7 text-slate-600">
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
                12. Contact Us
              </h2>

              <p className="mt-3 leading-7 text-blue-100">
                If you have questions about these Terms or need help
                with your PlayNexa account, contact our team.
              </p>

              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-800 transition hover:bg-cyan-50"
              >
                Contact PlayNexa <ChevronRight size={18} />
              </Link>
            </article>

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
            Play fair. Connect respectfully.
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            Thank you for helping make PlayNexa a welcoming sports community.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/privacy-policy"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-bold text-white transition hover:brightness-110"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsCondition;
