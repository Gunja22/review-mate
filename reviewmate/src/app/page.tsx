import Link from "next/link"
import { Code, Users, Shield, Zap, Star } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white dark:bg-gray-900 pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28">
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                <h1>
                  <span className="block text-base font-semibold text-emerald-600 dark:text-emerald-500">
                    Introducing
                  </span>
                  <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                    <span className="text-gray-900 dark:text-white">Peer Review Platform for </span>
                    <span className="text-emerald-600 dark:text-emerald-500">Developers</span>
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Get anonymous, constructive feedback from fellow developers and AI-powered suggestions to level up
                  your coding skills.
                </p>
                <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                  <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3">
                    <Link
                      href="/signup"
                      className="rounded-md bg-emerald-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    >
                      Get started for free
                    </Link>
                    <Link
                      href="/features"
                      className="rounded-md bg-gray-100 dark:bg-gray-800 px-5 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <div className="relative block w-full overflow-hidden rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                    <img className="w-full" src="/placeholder.svg?height=400&width=600" alt="Code review interface" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="h-20 w-20 text-emerald-500" fill="currentColor" viewBox="0 0 84 84">
                        <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                        <path d="M55 42L35 55V29L55 42Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Our platform makes it easy to get valuable feedback on your code from peers and AI.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="pt-6">
                <div className="flow-root rounded-lg bg-white dark:bg-gray-900 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-emerald-500 p-3 shadow-lg">
                        <Code className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                      Submit Your Code
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                      Upload code snippets or connect your GitHub repository for review.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-white dark:bg-gray-900 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-emerald-500 p-3 shadow-lg">
                        <Shield className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                      Anonymous Review
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                      Your code is anonymized before being shared with peer reviewers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-white dark:bg-gray-900 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-emerald-500 p-3 shadow-lg">
                        <Users className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                      Receive Feedback
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                      Get constructive feedback from experienced developers in your field.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-white dark:bg-gray-900 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-emerald-500 p-3 shadow-lg">
                        <Zap className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                      AI Enhancement
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                      AI analyzes your code and provides additional improvement suggestions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white dark:bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Trusted by developers worldwide
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              See what other developers are saying about our platform.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-gray-50 dark:bg-gray-800 px-6 py-8 shadow-sm">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-emerald-700 font-semibold text-lg">JS</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">John Smith</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Senior Frontend Developer</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <Star
                        key={rating}
                        className={`h-5 w-5 ${rating < 5 ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    "The anonymous review system helped me receive honest feedback without bias. I've improved my coding
                    skills significantly."
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 dark:bg-gray-800 px-6 py-8 shadow-sm">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-700 font-semibold text-lg">AJ</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Alex Johnson</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <Star
                        key={rating}
                        className={`h-5 w-5 ${rating < 5 ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    "The AI suggestions combined with human reviews provide a comprehensive analysis of my code. It's
                    like having a team of senior devs reviewing my work."
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 dark:bg-gray-800 px-6 py-8 shadow-sm">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-700 font-semibold text-lg">SL</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Sarah Lee</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Backend Engineer</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <Star
                        key={rating}
                        className={`h-5 w-5 ${rating < 4 ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    "I've been using this platform for 3 months and my code quality has improved dramatically. The
                    GitHub integration makes it seamless to get reviews on my PRs."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-emerald-600 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by developers from over 80 countries
            </h2>
            <p className="mt-3 text-xl text-emerald-200">
              Join thousands of developers improving their code quality every day.
            </p>
          </div>
          <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-emerald-200">Developers</dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-white">10,000+</dd>
            </div>
            <div className="mt-10 flex flex-col sm:mt-0">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-emerald-200">Reviews</dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-white">50,000+</dd>
            </div>
            <div className="mt-10 flex flex-col sm:mt-0">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-emerald-200">Satisfaction</dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-white">98%</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            <span className="block">Ready to improve your code?</span>
            <span className="block text-emerald-600 dark:text-emerald-500">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-emerald-600 px-5 py-3 text-base font-medium text-white hover:bg-emerald-700"
              >
                Get started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white dark:bg-gray-800 px-5 py-3 text-base font-medium text-emerald-600 dark:text-emerald-500 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center">
                <Code className="h-8 w-8 text-emerald-500" />
                <span className="ml-2 text-xl font-bold text-white">ReviewMate</span>
              </div>
              <p className="text-base text-gray-400">
                Helping developers write better code through anonymous peer reviews and AI-powered suggestions.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-white">Platform</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        API
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium text-white">Support</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Guides
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Status
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-white">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Press
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium text-white">Legal</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Terms
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Cookie Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Licensing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; {new Date().getFullYear()} Peer Review Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
