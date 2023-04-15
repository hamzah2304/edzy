import { ConnectButton } from '@rainbow-me/rainbowkit'
import styles from '../../styles/Navbar.module.css'
export default function Navbar() {
  return (
    <header className='flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800'>
      <nav
        className='max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between'
        aria-label='Global'
      >
        <div className='flex items-center justify-between'>
          <a
            className='inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white'
            href='/'
          >
            <svg
              className='w-10 h-auto'
              width='100'
              height='100'
              viewBox='0 0 100 100'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='100' height='100' rx='10' fill='black' />
              <path
                d='M37.656 68V31.6364H51.5764C54.2043 31.6364 56.3882 32.0507 58.1283 32.8793C59.8802 33.696 61.1882 34.8146 62.0523 36.2351C62.9282 37.6555 63.3662 39.2654 63.3662 41.0646C63.3662 42.5443 63.0821 43.8108 62.5139 44.8643C61.9458 45.906 61.1823 46.7524 60.2235 47.4034C59.2646 48.0544 58.1934 48.522 57.0097 48.8061V49.1612C58.2999 49.2322 59.5369 49.6288 60.7206 50.3509C61.9162 51.0611 62.8927 52.0672 63.6503 53.3693C64.4079 54.6714 64.7867 56.2457 64.7867 58.0923C64.7867 59.9744 64.3309 61.6671 63.4195 63.1705C62.508 64.6619 61.1349 65.8397 59.3002 66.7038C57.4654 67.5679 55.1572 68 52.3754 68H37.656ZM44.2433 62.4957H51.3279C53.719 62.4957 55.4413 62.04 56.4948 61.1286C57.5601 60.2053 58.0928 59.0215 58.0928 57.5774C58.0928 56.5002 57.8264 55.5296 57.2938 54.6655C56.7611 53.7895 56.0035 53.103 55.021 52.6058C54.0386 52.0968 52.8667 51.8423 51.5054 51.8423H44.2433V62.4957ZM44.2433 47.1016H50.7597C51.896 47.1016 52.92 46.8944 53.8314 46.4801C54.7429 46.054 55.459 45.4562 55.9798 44.6868C56.5125 43.9055 56.7789 42.9822 56.7789 41.9169C56.7789 40.5083 56.2817 39.3482 55.2874 38.4368C54.3049 37.5253 52.843 37.0696 50.9017 37.0696H44.2433V47.1016Z'
                fill='white'
              />
            </svg>
            edzy
          </a>
          <div className='sm:hidden'>
            <button
              type='button'
              className='hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'
              data-hs-collapse='#navbar-image-and-text-1'
              aria-controls='navbar-image-and-text-1'
              aria-label='Toggle navigation'
            >
              <svg
                className='hs-collapse-open:hidden w-4 h-4'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                />
              </svg>
              <svg
                className='hs-collapse-open:block hidden w-4 h-4'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
              </svg>
            </button>
          </div>
        </div>
        <div
          id='navbar-image-and-text-1'
          className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block'
        >
          <div className='flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5'>
            <a
              className='font-medium text-blue-500'
              href='learn'
              //aria-current='page'
            >
              LEARN
            </a>
            <a
              className='font-medium text-white hover:text-gray-400 dark:text-white dark:hover:text-gray-500'
              href='teach'
            >
              TEACH
            </a>
            <a
              className='font-medium text-gray-600 hover:text-gray-400 dark:text-white dark:hover:text-gray-500'
              href='profile'
            >
              PROFILE
            </a>
            <ConnectButton></ConnectButton>
          </div>
        </div>
      </nav>
    </header>
  )
}
