// app/components/Loading.tsx

export default function Loading() {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 z-50">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
