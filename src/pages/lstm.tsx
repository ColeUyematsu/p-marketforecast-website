"use client";

import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { useState, useRef } from "react";
import Loading from "../components/Loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function LSTMPage() {
  const [loading, setLoading] = useState(true);
  const imagesLoaded = useRef(0);
  const totalImages = 1;

  const handleImageLoad = () => {
    imagesLoaded.current += 1;
    if (imagesLoaded.current >= totalImages) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

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
              <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800 dark:text-white">
                Long Short-Term Memory (LSTM)
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A Recurrent Neural Network
              </p>
            </section>

            <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-center">
                <Image
                  src="/lstm.png"
                  alt="LSTM Architecture Diagram"
                  width={600}
                  height={400}
                  className="rounded-md"
                  onLoad={handleImageLoad}
                  priority
                />
              </div>
            </section>

            <section className="text-left bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                About LSTM Networks
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Long Short-Term Memory (LSTM) networks are a special kind of recurrent neural network (RNN) 
                capable of learning long-term dependencies in sequential data. They are particularly effective 
                for time series analysis, natural language processing, and other tasks where context and 
                temporal relationships are crucial.
              </p>
              
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Key Components:
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>
                  <strong>Cell State (C<sub>t</sub>):</strong> The &quot;memory&quot; of the network that carries 
                  information throughout the sequence processing
                </li>
                <li>
                  <strong>Hidden State (H<sub>t</sub>):</strong> The output state that contains information 
                  from previous time steps
                </li>
                <li>
                  <strong>Input Gate:</strong> Controls what new information gets added to the cell state
                </li>
                <li>
                  <strong>Forget Gate:</strong> Decides what information to discard from the cell state
                </li>
                <li>
                  <strong>Output Gate:</strong> Determines what information to output based on the cell state
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                How LSTMs Work:
              </h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>The forget gate decides what information to discard from the cell state</li>
                <li>The input gate selects new information to store in the cell state</li>
                <li>The cell state is updated by combining the filtered previous state and new candidate values</li>
                <li>The output gate determines what parts of the cell state to output as the hidden state</li>
                <li>This process repeats for each time step in the sequence</li>
              </ol>
            </section>

            <section className="text-left bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Applications in Market Forecasting
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                In financial markets, LSTMs can capture complex temporal patterns in:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Price movement prediction</li>
                <li>Volatility forecasting</li>
                <li>Anomaly detection in trading patterns</li>
                <li>Multi-timeframe analysis</li>
                <li>News sentiment analysis for market impact</li>
              </ul>
            </section>

            <section className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-sm w-full sm:w-auto"
                href="https://pytorch.org/docs/stable/generated/torch.nn.LSTM.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
              <Link
                  href="/data/lstm"
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
    </div>
  );
}
