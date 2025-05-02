import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function XGBoostPage() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} relative flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 overflow-hidden pt-20`}
    >
      {/* Background Bear Image */}
      <div className="absolute top-1/4 left-0 -z-10 hidden md:block opacity-5 dark:opacity-10 pointer-events-none">
        <Image
          src="/bear.png"
          alt="Bear outline background"
          width={400}
          height={400}
          aria-hidden="true"
          className="max-w-md lg:max-w-lg"
        />
      </div>

      {/* Background Bull Image */}
      <div className="absolute top-1/4 right-0 -z-10 hidden md:block opacity-5 dark:opacity-10 pointer-events-none">
        <Image
          src="/bull.png"
          alt="Bull outline background"
          width={400}
          height={400}
          aria-hidden="true"
          className="max-w-md lg:max-w-lg"
        />
      </div>

      <main className="relative z-10 flex flex-col items-center flex-grow w-full px-6 sm:px-8 md:px-12">
        <div className="max-w-3xl w-full text-center space-y-8">
          {/* Title Section */}
          <section>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800 dark:text-white">
              XGBoost (Extreme Gradient Boosting)
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              An optimized gradient boosting machine learning algorithm
            </p>
          </section>

          {/* Algorithm Diagram Section */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-center">
              <Image
                src="/xgboost.jpg"
                alt="XGBoost Algorithm Diagram"
                width={600}
                height={400}
                className="rounded-md"
              />
            </div>
          </section>

          {/* Description Section */}
          <section className="text-left bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              About XGBoost
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              XGBoost is an advanced implementation of gradient boosted decision trees designed for speed and performance.
              It builds decision trees sequentially, where each new tree focuses on correcting the errors of the previous ones,
              combining many weak learners into a strong predictive model.
            </p>
            
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Key Features:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>
                <strong>Gradient Boosting:</strong> Builds trees sequentially to correct residual errors
              </li>
              <li>
                <strong>Regularization:</strong> Includes L1 (Lasso) and L2 (Ridge) regularization to prevent overfitting
              </li>
              <li>
                <strong>Parallel Processing:</strong> Optimized for efficient computation
              </li>
              <li>
                <strong>Handling Missing Values:</strong> Automatically learns how to handle missing data
              </li>
              <li>
                <strong>Tree Pruning:</strong> Grows trees depth-first and prunes backward
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              How XGBoost Works:
            </h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Makes initial prediction (often the mean of target values)</li>
              <li>Calculates residuals (actual - predicted) for each instance</li>
              <li>Builds a decision tree to predict these residuals</li>
              <li>{"Updates predictions by adding the new tree's predictions (with learning rate η)"}</li>
              <li>Repeats steps 2-4 for specified number of trees</li>
              <li>Final prediction: ŷ = ∑(η × fₖ(x)) where fₖ are the individual trees</li>
            </ol>
          </section>

          {/* Mathematical Details Section */}
          <section className="text-left bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Mathematical Foundation
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Objective Function:</strong> Obj(θ) = L(θ) + Ω(θ)<br />
                Where L is the loss function and Ω is the regularization term
              </p>
              <p>
                <strong>Regularization:</strong> Ω(fₖ) = γT + ½λ‖w‖²<br />
                T = number of leaves, w = leaf weights
              </p>
              <p>
                <strong>Gradient Boosting:</strong> Updates are computed using:<br />
                Fₖ(x) = Fₖ₋₁(x) + ηfₖ(x)<br />
                where η is the learning rate
              </p>
            </div>
          </section>

          {/* Applications Section */}
          <section className="text-left bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Applications in Market Forecasting
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              XGBoost excels in financial applications due to its:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Ability to handle mixed data types (numerical and categorical)</li>
              <li>Robustness to outliers and missing data</li>
              <li>Feature importance analysis for interpretability</li>
              <li>High predictive accuracy with proper tuning</li>
              <li>Efficiency in processing large financial datasets</li>
            </ul>
          </section>

          {/* Call-to-Action Buttons */}
          <section className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              className="inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-sm w-full sm:w-auto"
              href="https://xgboost.readthedocs.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
            <Link
                href="/data/xg-boost"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-medium text-blue-700 dark:text-blue-300 bg-blue-100 hover:bg-blue-200 dark:bg-gray-700 dark:hover:bg-gray-600 border border-transparent dark:border-gray-600 transition-colors shadow-sm w-full sm:w-auto"
            >
                Our Results
            </Link>
          </section>
        </div>
      </main>

      <footer className="relative z-10 w-full py-6 mt-12 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <p>
          &copy; {new Date().getFullYear()} P-ai Market Forecasting. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}