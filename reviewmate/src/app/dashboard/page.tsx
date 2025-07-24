"use client"

import { useState } from "react"
import Link from "next/link"
import { FileCode, Users, Clock, Star, ChevronRight, PlusCircle, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react'
import { Navbar } from "@/components/navbar"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("mySubmissions")

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar isAuthenticated={true} />

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300">
                <FileCode className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Submissions</p>
                <p className="text-2xl font-semibold text-gray-800 dark:text-white">12</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Reviews Given</p>
                <p className="text-2xl font-semibold text-gray-800 dark:text-white">47</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Reviews Received</p>
                <p className="text-2xl font-semibold text-gray-800 dark:text-white">28</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300">
                <Star className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Reputation</p>
                <p className="text-2xl font-semibold text-gray-800 dark:text-white">142</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab("mySubmissions")}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === "mySubmissions"
                    ? "border-emerald-500 text-emerald-600 dark:text-emerald-500"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700"
                }`}
              >
                My Submissions
              </button>
              <button
                onClick={() => setActiveTab("reviewQueue")}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === "reviewQueue"
                    ? "border-emerald-500 text-emerald-600 dark:text-emerald-500"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700"
                }`}
              >
                Review Queue
              </button>
              <button
                onClick={() => setActiveTab("receivedReviews")}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === "receivedReviews"
                    ? "border-emerald-500 text-emerald-600 dark:text-emerald-500"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700"
                }`}
              >
                Received Reviews
              </button>
              <button
                onClick={() => setActiveTab("givenReviews")}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === "givenReviews"
                    ? "border-emerald-500 text-emerald-600 dark:text-emerald-500"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700"
                }`}
              >
                Given Reviews
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "mySubmissions" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">My Code Submissions</h2>
                  <Link
                    href="/submit-code"
                    className="flex items-center text-sm text-emerald-600 hover:text-emerald-800 dark:text-emerald-500 dark:hover:text-emerald-400"
                  >
                    <PlusCircle className="h-4 w-4 mr-1" />
                    Submit New Code
                  </Link>
                </div>

                <div className="space-y-4">
                  {/* Submission Item */}
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">Authentication Service Refactor</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Node.js / Express / JWT</p>
                      </div>
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        3 Reviews
                      </span>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      Submitted 2 days ago
                    </div>
                    <div className="mt-4 flex justify-between">
                      <Link
                        href="/submissions/1"
                        className="text-sm font-medium text-emerald-600 hover:text-emerald-800 dark:text-emerald-500 dark:hover:text-emerald-400 flex items-center"
                      >
                        View Details
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                      <div className="flex -space-x-2">
                        <img
                          className="h-6 w-6 rounded-full border border-white dark:border-gray-800"
                          src="/placeholder.svg?height=24&width=24"
                          alt="Reviewer 1"
                        />
                        <img
                          className="h-6 w-6 rounded-full border border-white dark:border-gray-800"
                          src="/placeholder.svg?height=24&width=24"
                          alt="Reviewer 2"
                        />
                        <img
                          className="h-6 w-6 rounded-full border border-white dark:border-gray-800"
                          src="/placeholder.svg?height=24&width=24"
                          alt="Reviewer 3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Add other tab content here */}
          </div>
        </div>
      </main>
    </div>
  )
}