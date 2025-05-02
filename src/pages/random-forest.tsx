import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RandomForestPage() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} relative flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 overflow-hidden pt-20`}
    >
      {/* Background Bear Image */}
      <div className="absolute top-1/4 left-0 -z-10 hidden md:block opacity-5 dark:opacity-10 pointer-events-none">
        <img
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
        <img
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
              Random Forest
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Machine Learning
            </p>
          </section>

          {/* Algorithm Diagram Section */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-center">
              <Image
                src="/Random-Forest-Algorithm.png"
                alt="Random Forest Algorithm Diagram"
                width={600}
                height={400}
                className="rounded-md"
              />
            </div>
          </section>

          {/* Description Section */}
          <section className="text-left bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              About Random Forest
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Random Forest is an ensemble learning method that operates by constructing multiple decision trees during training and outputting the class that is the mode of the classes (classification) or mean prediction (regression) of the individual trees.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Key Features:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Reduces overfitting compared to single decision trees</li>
              <li>Handles both classification and regression tasks</li>
              <li>Can handle large datasets with higher dimensionality</li>
              <li>Provides feature importance estimates</li>
            </ul>
          </section>

          {/* Call-to-Action Buttons */}
          <section className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              className="inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-medium text-blue-700 dark:text-blue-300 bg-blue-100 hover:bg-blue-200 dark:bg-gray-700 dark:hover:bg-gray-600 border border-transparent dark:border-gray-600 transition-colors shadow-sm w-full sm:w-auto"
              href="https://scikit-learn.org/stable/modules/ensemble.html#forests-of-randomized-trees"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </section>
        </div>
      </main>

      <footer className="relative z-10 w-full py-6 mt-12 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <p>
          &copy; {new Date().getFullYear()} Machine Learning Algorithms. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}