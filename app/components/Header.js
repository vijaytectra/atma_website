"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Header.module.css";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Check auth status on component mount and route change
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("/api/auth/verify", {
          credentials: "include",
        });
        const data = await response.json();
        setIsLoggedIn(data.success);

        // Redirect if logged-in user tries to access login/register
        if (
          data.success &&
          (pathname === "/login" || pathname === "/register")
        ) {
          router.push("/membership");
        }
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    checkAuthStatus();
  }, [pathname, router]);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setIsLoggedIn(false);
        router.push("/");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "What We Do",
      path: "#",
      submenu: [
        { name: "Annual Convention", path: "/annual-convention" },
        { name: "Charitable Activities", path: "/charitable-activities" },
      ],
    },
    {
      name: "Who We Are",
      path: "#",
      submenu: [
        { name: "About Us", path: "/about-us" },
        { name: "ATMA Chapters", path: "/atma-chapters" },
      ],
    },
    { name: "Gallery", path: "/gallery" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact" },
    { name: "Donate", path: "/donation" },
    // Register item will be conditionally rendered below
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (index) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logoContainer}>
            <Image
              className={`${styles.logo} py-2`}
              src="/logos/logo.png"
              alt="Logo"
              width={300}
              height={100}
            />
          </Link>

          <div
            className={`${styles.menuIcon} ${
              isMobileMenuOpen ? styles.open : ""
            }`}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FiX />
            ) : (
              <Image
                src="/menu.svg"
                alt="menu"
                width={30}
                height={30}
                className={styles.menuIconImage}
                priority="true"
              />
            )}
          </div>

          <nav
            className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ""}`}
          >
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className={`${styles.navItem} ${
                  item.submenu ? styles.hasSubmenu : ""
                }`}
                onMouseEnter={() =>
                  !isMobileMenuOpen && item.submenu && setOpenSubMenu(index)
                }
                onMouseLeave={() =>
                  !isMobileMenuOpen && item.submenu && setOpenSubMenu(null)
                }
              >
                <Link
                  href={item.path}
                  className={
                    pathname === item.path
                      ? styles.activeNavLink
                      : styles.navLink
                  }
                  onClick={(e) => {
                    if (item.submenu) {
                      e.preventDefault();
                      toggleSubMenu(index);
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                >
                  {item.name}
                  {item.submenu && (
                    <FiChevronDown className={styles.submenuIcon} />
                  )}
                </Link>

                {item.submenu && (
                  <div
                    className={`${styles.submenu} ${
                      openSubMenu === index ? styles.open : ""
                    }`}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.path}
                        className={styles.submenuLink}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setOpenSubMenu(null);
                        }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Conditional render for Register/Logout */}
            {!isLoggedIn ? (
              <div className={styles.navItem}>
                <Link
                  href="/register"
                  className={
                    pathname === "/register"
                      ? styles.activeNavLink
                      : styles.navLink
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log In/Register
                </Link>
              </div>
            ) : (
              <div className={styles.navItem}>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className={styles.navLink}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </nav>

          {/* Conditional button in header */}
          <div className={`flex gap-2 xl:gap-4 ${styles.dnone}`}>
            <Link href="/donation" className={styles.donationButton}>
              <Button
                text="Donate"
                bgColor="transparent"
                color="var(--primary)"
                hoverBgColor="var(--primary)"
                hoverTextColor="var(--color-white)"
                className="border-1 border-solid border-primary"
              />
            </Link>
            {!isLoggedIn ? (
              <Link href="/register" className={styles.donationButton}>
                <Button
                  text="Log In/Register"
                  bgColor="var(--secondary)"
                  color="var(--color-white)"
                  hoverBgColor="var(--btn-hover)"
                  hoverTextColor="var(--primary)"
                />
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className={styles.donationButton}
                style={{
                  background: "var(--primary)",
                  color: "var(--color-white)",
                  border: "none",
                  padding: "10px 20px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "var(--secondary)";
                  e.currentTarget.style.color = "var(--color-black)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "var(--primary)";
                  e.currentTarget.style.color = "var(--color-white)";
                }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
