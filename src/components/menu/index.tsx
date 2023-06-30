import Link from 'next/link'
import Routes from '../../config/routes';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Hamburger from '../../assets/hamburger';
import Close from '../../assets/close';
import Logo from '../home/logo';

const defaultRoutes = [
  Routes.work,
  Routes.about,
  Routes.life,
  Routes.love,
]

const Menu = () => {

  const [isActive, setIsActive] = useState(false)
  const router = useRouter()
  const currPathName = router.pathname
  const routesArray = Object.keys(Routes).map((r) => Routes[r])
  const mobileTitle =
    currPathName === '/'
      ? 'Home'
      : routesArray
        .filter((r) => r.path !== '/')
        .find((r) => currPathName.includes(r.path))?.label
  return (
    <div className="top-0 z-10 w-full bg-gray-50 lg:z-auto lg:relative" role="navigation">

      {/* Mobile Navigation Starts */}
      <div className="grid grid-cols-1 lg:hidden border-b border-gray-200">
        <div className="flex items-center pr-4">
          <button
            className="p-4 pl-4 -my-2"
            onClick={() => setIsActive(!isActive)}
            aria-label="toggle menu"
          >
            {isActive ? <Close /> : <Hamburger />}
          </button>
          <p className="font-sans text-sm font-semibold">
            {mobileTitle}
          </p>
        </div>
        {isActive && (
          <div className="w-full h-px mt-2 bg-gray-950 bg-opacity-10" />
        )}
        {isActive &&
          defaultRoutes.map((route) => {
            const defaultLinks = `flex font-sans items-center pl-12 py-4 font-medium text-sm text-opacity-80`

            return (
              <Link href={route.path} key={route.path}
                className={`${defaultLinks}`}>{route.label}
              </Link>
            )
          })}
      </div>
      {/* Mobile Navigation Ends */}

      {/* Desktop Navigation Starts */}
      <div className="hidden lg:flex top-0 z-10 my-20 pr-4 fixed">
        <div className="flex flex-col w-80">
          <Logo />
          <div>
            <Link href="/">
              <h1 className="text-xl font-extrabold text-gray-900 hover:text-blue-600 pb-4 tracking-tighter">Sriram Venugopal.</h1>
            </Link>
            <div className="flex flex-col space-y-2 text-sm text-gray-700 font-writer tracking-tight leading-relaxed">
              <div className="flex flex-row gap-2">
                <p>👋</p>
                <p>Product designer, maker and illustrator.</p>
              </div>
              <div className=" flex flex-row gap-2">
                <p>🇩🇪</p>
                <p>Living in Berlin, Germany</p>
              </div>
              <div className=" flex flex-row gap-2">
                <p>🇮🇳</p>
                <p>From Chennai, India.</p>
              </div>
              <div className=" flex flex-row gap-2">
                <p>🛍️</p>
                <p>Designing products and experiences @&nbsp;<Link href="https://en.zalando.de/?_rfl=de" target="_blank" rel="noopener noreferrer"
                 className="text-orange-500 font-semibold hover:underline hover:text-blue-600 hover:font-bold">Zalando SE</Link></p>
              </div>
            </div>
          </div>
          <div className= "flex flex-col space-y-4 my-12">
            {
              defaultRoutes.map((route) => {
                const isSelected = route.path === router.pathname
                const defaultLinks = `font-writer text-gray-700 tracking-tight py-1`
                const activeLinks = `font-writer text-gray-950 font-bold tracking-tight py-1`
                const inactiveLinks = `hover:text-blue-600 hover:font-bold`
                return (
                  <Link href={route.path} key={route.path}
                      className={`
                  ${defaultLinks} 
                  ${isSelected ? activeLinks : inactiveLinks}`}
                    >
                      {route.label}
                  </Link>
                )
              })
            }
          </div>

        </div>

      </div>

      {/* Desktop Navigation Ends */}
    </div>

  );
}

export default Menu;