"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Upload, Github, Code } from 'lucide-react'
import { Navbar } from "@/components/navbar"

export default function SubmitCodePage() {
  const [submitMethod, setSubmitMethod] = useState<string | null>(null)
  const [language, setLanguage] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [codeSnippet, setCodeSnippet] = useState("")
  const [githubUrl, setGithubUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect to dashboard or confirmation page
      window.location.href = "/dashboard"
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar isAuthenticated={true} />

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <Link href="/dashboard" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Dashboard
          </Link>
        </div>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Submit Code for Review</h1>

          {!submitMethod ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Choose submission method</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setSubmitMethod("snippet")}
                  className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-gray-700 transition"
                >
                  <Code className="h-10 w-10 text-emerald-600 dark:text-emerald-500 mb-3" />
                  <span className="text-lg font-medium text-gray-900 dark:text-white">Code Snippet</span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
                    Paste a specific code snippet or function for targeted feedback
                  </p>
                </button>

                <button
                  onClick={() => setSubmitMethod("github")}
                  className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-gray-700 transition"
                >
                  <Github className="h-10 w-10 text-emerald-600 dark:text-emerald-500 mb-3" />
                  <span className="text-lg font-medium text-gray-900 dark:text-white">GitHub Repository</span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
                    Connect to a GitHub repository or specific pull request
                  </p>
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                      placeholder="E.g., Authentication Service Refactor"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="language" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Primary Language/Framework
                    </label>
                    <select
                      id="language"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                      required
                    >
                      <option value="">Select language or framework</option>
                      <option value="javascript">JavaScript</option>
                      <option value="typescript">TypeScript</option>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                      <option value="csharp">C#</option>
                      <option value="go">Go</option>
                      <option value="ruby">Ruby</option>
                      <option value="php">PHP</option>
                      <option value="react">React</option>
                      <option value="angular">Angular</option>
                      <option value="vue">Vue</option>
                      <option value="node">Node.js</option>
                      <option value="django">Django</option>
                      <option value="flask">Flask</option>
                      <option value="spring">Spring</option>
                      <option value="laravel">Laravel</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Description
                    </label>
                    <textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={3}
                      className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                      placeholder="Briefly describe what this code does and what kind of feedback you're looking for..."
                      required
                    />
                  </div>

                  {submitMethod === "snippet" ? (
                    <div>
                      <label htmlFor="code-snippet" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Code Snippet
                      </label>
                      <textarea
                        id="code-snippet"
                        value={codeSnippet}
                        onChange={(e) => setCodeSnippet(e.target.value)}
                        rows={10}
                        className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 dark:bg-gray-700 dark:text-white sm:text-sm font-mono"
                        placeholder="Paste your code here..."
                        required
                      />
                    </div>
                  ) : (
                    <div>
                      <label htmlFor="github-url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        GitHub Repository or Pull Request URL
                      </label>
                      <input
                        type="url"
                        id="github-url"
                        value={githubUrl}
                        onChange={(e) => setGithubUrl(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                        placeholder="https://github.com/username/repo or PR URL"
                        required
                      />
                    </div>
                  )}

                  <div className="flex items-center">
                    <input
                      id="anonymous"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-emerald-600 focus:ring-emerald-500 dark:bg-gray-700"
                    />
                    <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                      Submit anonymously (your username will not be visible to reviewers)
                    </label>
                  </div>

                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setSubmitMethod(null)}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 flex items-center disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Upload className="h-4 w-4 mr-2" />
                          Submit for Review
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}