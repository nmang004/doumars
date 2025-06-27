"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { 
    name: "About", 
    href: "/about",
    subItems: [
      { name: "History", href: "/history" },
      { name: "Scrapbook", href: "/our-scrapbook" },
    ]
  },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
    setUserMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-white/95 backdrop-blur-md border-b border-neutral-gray-lighter shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="h-12 w-auto transition-transform duration-250 group-hover:scale-105">
                <img 
                  src="/images/doumarslogo.png" 
                  alt="Doumar's Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading text-2xl font-bold text-neutral-black">
                  Doumar&apos;s
                </h1>
                <p className="text-sm text-neutral-gray-dark">Since 1904</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.subItems ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setAboutDropdownOpen(true)}
                    onMouseLeave={() => setAboutDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="text-base font-medium text-neutral-black hover:text-primary-red transition-colors duration-250 relative group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-red group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Link>
                    
                    <AnimatePresence>
                      {aboutDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full mt-2 w-40 bg-neutral-white border border-neutral-gray-lighter rounded-lg shadow-lg py-2"
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-3 text-base text-neutral-gray-dark hover:bg-neutral-off-white hover:text-primary-red transition-colors duration-250"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-base font-medium text-neutral-black hover:text-primary-red transition-colors duration-250 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-red group-hover:w-full transition-all duration-300 ease-out"></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* User Authentication - Only show if user is logged in */}
            {user && (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-neutral-off-white"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                >
                  <User className="h-5 w-5" />
                </Button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 top-full mt-2 w-56 bg-neutral-white border border-neutral-gray-lighter rounded-lg shadow-lg py-2"
                    >
                      <div className="px-4 py-2 border-b border-neutral-gray-lighter">
                        <p className="text-base font-medium text-neutral-black">
                          {user.user_metadata?.full_name || user.email}
                        </p>
                        <p className="text-sm text-neutral-gray-medium">{user.email}</p>
                      </div>
                      <Link
                        href="/account/orders"
                        className="block px-4 py-3 text-base text-neutral-gray-dark hover:bg-neutral-off-white transition-colors duration-250"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Order History
                      </Link>
                      <Link
                        href="/account/profile"
                        className="block px-4 py-3 text-base text-neutral-gray-dark hover:bg-neutral-off-white transition-colors duration-250"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Profile Settings
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="w-full text-left px-4 py-3 text-base text-neutral-gray-dark hover:bg-neutral-off-white transition-colors duration-250 flex items-center"
                      >
                        <LogOut className="h-5 w-5 mr-2" />
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Order Online Button - Now positioned at far right */}
            <Button 
              asChild
              variant="accent"
              size="default"
              className="hidden sm:inline-flex"
            >
              <a href="https://order.toasttab.com/online/doumars-cones-barbecue-1919-monticello-ave" target="_blank" rel="noopener noreferrer">Order Online</a>
            </Button>


            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-neutral-gray-lighter bg-neutral-white"
          >
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <div>
                      <Link
                        href={item.href}
                        className="block px-3 py-3 text-lg font-medium text-neutral-black hover:text-primary-red hover:bg-neutral-off-white rounded-lg transition-colors duration-250"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="ml-4 mt-2 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-base text-neutral-gray-dark hover:text-primary-red hover:bg-neutral-off-white rounded-lg transition-colors duration-250"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-3 text-lg font-medium text-neutral-black hover:text-primary-red hover:bg-neutral-off-white rounded-lg transition-colors duration-250"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-neutral-gray-lighter">
                <Button 
                  asChild
                  variant="accent"
                  size="default"
                  className="w-full sm:hidden"
                >
                  <a href="https://order.toasttab.com/online/doumars-cones-barbecue-1919-monticello-ave" target="_blank" rel="noopener noreferrer">Order Online</a>
                </Button>
                <div className="flex items-center space-x-2 px-3 py-4 text-base text-neutral-gray-dark">
                  <Phone className="h-5 w-5" />
                  <span>(757) 627-4163</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  )
}