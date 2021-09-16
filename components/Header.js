import NavItem from './NavItem'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const Header = () => {
    const [activeMobileMenu, setActiveMobileMenu] = useState(false)

    const controls = useAnimation()

    const animiation = {
        initial: {
            height: '60px',
        },
        visible: {
            height: '250px',
        },
    }

    const animiationNavItems = {
        initial: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    }

    useEffect(() => {
        if (activeMobileMenu) {
            controls.start('visible')
        } else {
            controls.start('initial')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeMobileMenu])

    return (
        <AnimatePresence exitBeforeEnter>
            <header className="bg-secoundary text-white min-h-16 md:h-16 flex justify-center items-center sticky top-0 z-50">
                <div className="hidden md:flex justify-between items-center space-x-20">
                    <div>
                        <ul className="flex items-center space-x-6">
                            <NavItem text="portfolio" />
                            <div className="h-1 w-1 bg-secoundaryText rounded-full"></div>
                            <NavItem text="about" />
                        </ul>
                    </div>
                    <div className="bg-secoundary h-36 rotate-45 w-36 translate-y-2 translate-x-2 flex items-center justify-center overflow-visible">
                        <div className="-rotate-45 translate-y-6 translate-x-6 animate-pulse overflow-visible">
                            <motion.svg
                                drag
                                dragConstraints={{
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                }}
                                dragElastic={0.4}
                                width="100"
                                height="100"
                                viewBox="0 0 58 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M28.5 9.5L1 1.5L28.5 50L56.5 1.5L28.5 9.5Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                />
                            </motion.svg>
                        </div>
                    </div>
                    <div>
                        <ul className="flex items-center space-x-6">
                            <NavItem text="blog" />
                            <div className="h-1 w-1 bg-secoundaryText rounded-full"></div>
                            <NavItem text="get in touch" />
                        </ul>
                    </div>
                </div>
                <motion.div
                    variants={animiation}
                    initial="initial"
                    animate={controls}
                    onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    className="relative md:hidden justify-center flex flex-col items-center w-full h-60"
                >
                    <motion.ul
                        variants={animiationNavItems}
                        initial="initial"
                        animate={controls}
                        className="z-50 flex flex-col justify-center text-center space-y-3"
                    >
                        <NavItem text="portfolio" />
                        <NavItem text="about" />
                        <NavItem text="blog" />
                        <NavItem text="get in touch" />
                    </motion.ul>

                    <div className="bg-secoundary h-20 rotate-45 w-20 translate-y-2 translate-x-2 flex items-center justify-center overflow-visible absolute bottom-0 mobile_logo ">
                        <div className="-rotate-45 translate-y-4 translate-x-4 animate-pulse overflow-visible">
                            <motion.svg
                                drag
                                dragConstraints={{
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                }}
                                dragElastic={0.4}
                                width="60"
                                height="60"
                                viewBox="0 0 58 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M28.5 9.5L1 1.5L28.5 50L56.5 1.5L28.5 9.5Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                />
                            </motion.svg>
                        </div>
                    </div>
                    <div className="absolute top-2 right-5">
                        {activeMobileMenu ? (
                            <XIcon className="h-10 text-primary" />
                        ) : (
                            <MenuIcon className="h-10 text-primary" />
                        )}
                    </div>
                </motion.div>
            </header>
        </AnimatePresence>
    )
}

export default Header
