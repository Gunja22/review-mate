"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Save, User, Lock, Bell, Moon, Sun } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { useTheme } from "next-themes"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("profile")
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark")
  const [isLoading, setIsLoading] = useState(false)

  // Profile settings
  const [name, setName] = useState("Jane Developer")
  const [email, setEmail] = useState("jane@example.com")
  const [bio, setBio] = useState("Senior Frontend Engineer passionate about clean code and user experience.")

  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [reviewNotifications, setReviewNotifications] = useState(true)
  const [mentionNotifications, setMentionNotifications] = useState(true)

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Show success message
    }, 1500)
  }

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    setIsDarkMode(newTheme === "dark")
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar isAuthenticated={true} />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Dashboard
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Settings</h1>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="sm:flex sm:divide-x sm:divide-gray-200 dark:sm:divide-gray-700">
              {/* Sidebar */}
              <nav className="sm:w-64 p-6 bg-gray-50 dark:bg-gray-900 sm:h-auto">
                <div className="space-y-1">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                      activeTab === "profile"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                        : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    }`}
                  >
                    <User className="mr-3 h-5 w-5" />
                    Profile
                  </button>
                  <button
                    onClick={() => setActiveTab("security")}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                      activeTab === "security"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                        : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    }`}
                  >
                    <Lock className="mr-3 h-5 w-5" />
                    Security
                  </button>
                  <button
                    onClick={() => setActiveTab("notifications")}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                      activeTab === "notifications"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                        : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    }`}
                  >
                    <Bell className="mr-3 h-5 w-5" />
                    Notifications
                  </button>
                  <button
                    onClick={() => setActiveTab("appearance")}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                      activeTab === "appearance"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                        : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    }`}
                  >
                    {theme === "dark" ? <Moon className="mr-3 h-5 w-5" /> : <Sun className="mr-3 h-5 w-5" />}
                    Appearance
                  </button>
                </div>
              </nav>

              {/* Content */}
              <div className="flex-1 p-6">
                {activeTab === "profile" && (
                  <form onSubmit={handleSaveSettings}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                          Profile Information
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          Update your profile information and how others see you on the platform.
                        </p>
                      </div>

                      <div className="flex items-center">
                        <div className="h-20 w-20 rounded-full bg-emerald-500 flex items-center justify-center text-white text-2xl">
                          JD
                        </div>
                        <div className="ml-5">
                          <button
                            type="button"
                            className="bg-white dark:bg-gray-700 py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                          >
                            Change avatar
                          </button>
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">JPG, GIF or PNG. 1MB max.</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-4">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email address
                          </label>
                          <div className="mt-1">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Bio
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="bio"
                              name="bio"
                              rows={3}
                              value={bio}
                              onChange={(e) => setBio(e.target.value)}
                              className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                            />
                          </div>
                          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            Brief description for your profile. URLs are hyperlinked.
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-75 disabled:cursor-not-allowed"
                        >
                          {isLoading ? (
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
                              Saving...
                            </>
                          ) : (
                            <>
                              <Save className="h-4 w-4 mr-2" />
                              Save
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}

                {activeTab === "security" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Security Settings</h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Manage your password and account security.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Change Password</h4>
                        <div className="mt-2 space-y-4">
                          <div>
                            <label
                              htmlFor="current-password"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                              Current Password
                            </label>
                            <input
                              type="password"
                              name="current-password"
                              id="current-password"
                              className="mt-1 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="new-password"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                              New Password
                            </label>
                            <input
                              type="password"
                              name="new-password"
                              id="new-password"
                              className="mt-1 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="confirm-password"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                              Confirm New Password
                            </label>
                            <input
                              type="password"
                              name="confirm-password"
                              id="confirm-password"
                              className="mt-1 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Two-Factor Authentication</h4>
                        <div className="mt-2">
                          <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                          >
                            Enable two-factor authentication
                          </button>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Sessions</h4>
                        <div className="mt-2">
                          <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                          >
                            Sign out of all sessions
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "notifications" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Notification Settings
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Manage how and when you receive notifications.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Email Notifications</h4>
                        <div className="mt-2 space-y-4">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="email-notifications"
                                name="email-notifications"
                                type="checkbox"
                                checked={emailNotifications}
                                onChange={(e) => setEmailNotifications(e.target.checked)}
                                className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="email-notifications"
                                className="font-medium text-gray-700 dark:text-gray-300"
                              >
                                Email Notifications
                              </label>
                              <p className="text-gray-500 dark:text-gray-400">
                                Receive email notifications about activity related to you.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Review Notifications</h4>
                        <div className="mt-2 space-y-4">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="review-notifications"
                                name="review-notifications"
                                type="checkbox"
                                checked={reviewNotifications}
                                onChange={(e) => setReviewNotifications(e.target.checked)}
                                className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="review-notifications"
                                className="font-medium text-gray-700 dark:text-gray-300"
                              >
                                Review Notifications
                              </label>
                              <p className="text-gray-500 dark:text-gray-400">
                                Get notified when someone reviews your code or when your review is needed.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Mention Notifications</h4>
                        <div className="mt-2 space-y-4">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="mention-notifications"
                                name="mention-notifications"
                                type="checkbox"
                                checked={mentionNotifications}
                                onChange={(e) => setMentionNotifications(e.target.checked)}
                                className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="mention-notifications"
                                className="font-medium text-gray-700 dark:text-gray-300"
                              >
                                Mention Notifications
                              </label>
                              <p className="text-gray-500 dark:text-gray-400">
                                Get notified when someone mentions you in a comment or review.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "appearance" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Appearance Settings
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Customize how the application looks for you.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Theme</h4>
                        <div className="mt-4">
                          <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                            <div className="flex items-center">
                              {isDarkMode ? (
                                <Moon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                              ) : (
                                <Sun className="h-6 w-6 text-yellow-500" />
                              )}
                              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                                {isDarkMode ? "Dark Mode" : "Light Mode"}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={handleThemeToggle}
                              className={`${
                                isDarkMode ? "bg-emerald-600" : "bg-gray-200"
                              } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500`}
                            >
                              <span className="sr-only">Toggle theme</span>
                              <span
                                className={`${
                                  isDarkMode ? "translate-x-5" : "translate-x-0"
                                } pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                              >
                                <span
                                  className={`${
                                    isDarkMode ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200"
                                  } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
                                  aria-hidden="true"
                                >
                                  <Sun className="h-3 w-3 text-yellow-500" />
                                </span>
                                <span
                                  className={`${
                                    isDarkMode ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100"
                                  } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
                                  aria-hidden="true"
                                >
                                  <Moon className="h-3 w-3 text-gray-600" />
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
