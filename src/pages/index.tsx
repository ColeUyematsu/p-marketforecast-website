"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} relative flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 overflow-hidden pt-20`}
    >
      <div
        className={`transition-opacity duration-300 ${
          loading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Loading />
      </div>

      <div
        className={`flex flex-col flex-grow transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <main className="relative z-10 flex flex-col items-center flex-grow w-full px-6 sm:px-8 md:px-12">
          <div className="max-w-3xl w-full text-center space-y-8">
            <section>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                p-MarketForecast
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Welcome to p-MarketForecast, a Claremont Colleges P-ai Data
                Science Club project exploring the effectiveness of machine
                learning in predicting stock market performance.
              </p>
            </section>

            <section className="text-left bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Project Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                p-MarketForecast employs machine learning techniques to predict
                significant swings in stock market trends. We utilize historical
                financial data (price, volume, technical indicators) to train and
                evaluate three powerful models:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>
                  <strong>Random Forest:</strong> An ensemble method building
                  multiple decision trees.
                </li>
                <li>
                  <strong>LSTM Networks:</strong> RNNs specialized for learning
                  long-term dependencies in time series.
                </li>
                <li>
                  <strong>XGBoost:</strong> A gradient boosting algorithm building
                  trees sequentially to correct errors.
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Our project addresses challenges like data scarcity and high noise
                levels in financial forecasting. We are focused on optimizing
                model performance using structured financial data.
              </p>
            </section>

            <section className="text-left bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Technology Stack
              </h2>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Data Science:</strong> Python, Pandas, NumPy,
                  Scikit-learn, TensorFlow, PyTorch, yFinance
                </p>
                <p>
                  <strong>Frontend:</strong> Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
            </section>

            <section className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-sm w-full sm:w-auto"
                href="https://www.p-ai.org/projects-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                P-ai Club Website
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-medium text-blue-700 dark:text-blue-300 bg-blue-100 hover:bg-blue-200 dark:bg-gray-700 dark:hover:bg-gray-600 border border-transparent dark:border-gray-600 transition-colors shadow-sm w-full sm:w-auto"
                href="https://docs.google.com/document/d/1zQV9cri_i7cIoKa_VLb7YXcXPGBRdiiumzXWAFmYIZ0/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Project Proposal
              </a>
            </section>
          </div>
        </main>

        <footer className="relative z-10 w-full py-6 mt-12 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <p>
            &copy; {new Date().getFullYear()} P-ai - Claremont
            Colleges.
          </p>
        </footer>
      </div>
    </div>
  );
}
