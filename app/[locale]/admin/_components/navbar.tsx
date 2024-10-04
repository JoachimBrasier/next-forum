import { Link } from '@/i18n/routing';

export default function Navbar() {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2 lg:ps-[260px] dark:bg-neutral-800 dark:border-neutral-700">
      <nav className="px-4 flex basis-full items-center w-full mx-auto">
        <div className="me-5 lg:me-0 lg:hidden">
          <Link href="/" className="mr-auto text-base font-normal whitespace-nowrap text-gray-800 dark:text-white">
            {process.env?.NEXT_PUBLIC_SITE_NAME || 'Next-forum'}
          </Link>
        </div>
        <div className="w-full flex items-center justify-end ms-auto gap-x-1 md:gap-x-3">
          <div className="flex flex-row items-center justify-end gap-1">
            <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
              <button
                id="hs-dropdown-account"
                type="button"
                className="size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-white"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <img
                  className="shrink-0 size-[38px] rounded-full"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
              </button>
              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-dropdown-account"
              >
                <div className="py-3 px-5 bg-gray-100 rounded-t-lg dark:bg-neutral-700">
                  <p className="text-sm text-gray-500 dark:text-neutral-500">Signed in as</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">james@site.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
