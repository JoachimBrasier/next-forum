import { ChevronRight, PanelRightClose } from 'lucide-react';

export default function Breadcrumb() {
  return (
    <div className="-mt-px">
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
        <div className="flex items-center py-2">
          <button
            type="button"
            className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-application-sidebar"
            aria-label="Toggle navigation"
            data-hs-overlay="#hs-application-sidebar"
          >
            <span className="sr-only">Toggle Navigation</span>
            <PanelRightClose className="shrink-0 size-4" />
          </button>
          <ol className="ms-3 flex items-center whitespace-nowrap">
            <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
              Admin
              <ChevronRight className="shrink-0 mx-2 overflow-visible size-3.5 text-gray-400 dark:text-neutral-500" />
            </li>
            <li className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400" aria-current="page">
              Dashboard
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
