import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const xgboostData = [
  { stock: "Walmart", days: 17, percentage: "56.7%" },
  { stock: "Exxon", days: 20, percentage: "66.7%" },
  { stock: "Apple", days: 16, percentage: "53.3%" },
  { stock: "JP Morgan", days: 15, percentage: "50.0%" },
  { stock: "Pfizer", days: 18, percentage: "60.0%" }
];

export default function XGBoostPage() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} relative flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 overflow-hidden pt-20`}>
      {/* Background Images */}
      {/* Same as LSTM page */}

      <main className="relative z-10 flex flex-col items-center flex-grow w-full px-6 sm:px-8 md:px-12">
        <div className="max-w-4xl w-full text-center space-y-8">
          <section>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800 dark:text-white">
              XGBoost Model Performance
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              30-day prediction accuracy across stocks
            </p>
          </section>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              {/* Same table structure as LSTM page */}
              {xgboostData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-700"}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">{item.stock}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-300">{item.days}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-300">{item.percentage}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}