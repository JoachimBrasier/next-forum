import { ChevronDown, Home, MessagesSquare, Users } from 'lucide-react';

import { Link } from '@/i18n/routing';

export default function Sidebar() {
  return (
    <div
      id="hs-application-sidebar"
      className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-transform duration-300 transform w-[260px] h-full hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 dark:bg-neutral-800 dark:border-neutral-700"
      role="dialog"
      tabIndex={-1}
      aria-label="Sidebar"
    >
      <div className="relative flex flex-col h-full max-h-full">
        <div className="px-6 pt-4">
          <Link href="/" className="mr-auto text-base font-normal whitespace-nowrap text-gray-800 dark:text-white">
            {process.env?.NEXT_PUBLIC_SITE_NAME || 'Next-forum'}
          </Link>
        </div>
        <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
            <ul className="flex flex-col space-y-1">
              <li>
                <Link
                  className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300"
                  href="/admin"
                >
                  <Home className="shrink-0 size-4" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300"
                  href="/admin/users"
                >
                  <Users className="shrink-0 size-4" />
                  Users
                </Link>
              </li>
              <li className="hs-accordion" id="forum-accordion">
                <button
                  type="button"
                  className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
                  aria-expanded="true"
                  aria-controls="forum-accordion-child"
                >
                  <MessagesSquare className="shrink-0 size-4" />
                  Forum
                  <ChevronDown className="shrink-0 size-4 ms-auto hs-accordion-active:rotate-180" />
                </button>
                <div
                  id="forum-accordion-child"
                  role="region"
                  aria-labelledby="forum-accordion"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                >
                  <ul className="ps-8 pt-1 space-y-1">
                    <li>
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                        href="/admin/forum/topics"
                      >
                        Topics
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                        href="/admin/forum/comments"
                      >
                        Comments
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
