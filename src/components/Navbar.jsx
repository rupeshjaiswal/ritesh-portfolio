
import { useEffect, useState } from "react";

// Shared navigation items for desktop and mobile menus.
const navItems = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Reviews", id: "reviews" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Highlight the page section currently visible in the viewport.
  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Disconnect the observer when the component unmounts.
    return () => observer.disconnect();
  }, []);

  // Update the selected link and close the mobile menu.
  const handleNavigation = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  // Desktop link styles: purple hover and active color, no underline.
  const getDesktopLinkClass = (id) => {
    const isActive = activeSection === id;

    return [
      "inline-block py-2 text-base font-medium no-underline",
      "transition-colors duration-300 ease-in-out",
      "hover:text-purple-400",
      "focus-visible:outline focus-visible:outline-2",
      "focus-visible:outline-purple-400 focus-visible:outline-offset-4",
      isActive ? "text-purple-400" : "text-white",
    ].join(" ");
  };

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-md"
      aria-label="Main navigation"
    >
      {/* Main navbar: logo, desktop links, and mobile toggle */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Brand logo */}
        <a
          href="#home"
          onClick={() => handleNavigation("home")}
          className="text-2xl font-bold text-purple-500 no-underline transition-colors duration-300 hover:text-purple-400"
        >
          Ritesh Jaiswal
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={getDesktopLinkClass(id)}
                onClick={() => handleNavigation(id)}
                aria-current={
                  activeSection === id ? "location" : undefined
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Hire Me button */}
        <a
          href="#fiverr"
          className="hidden items-center justify-center rounded-lg bg-purple-600 px-5 py-2 font-semibold text-white no-underline shadow-md shadow-purple-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:outline-offset-4 md:inline-flex"
        >
          Hire Me
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="rounded text-3xl text-white transition-colors duration-300 hover:text-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile navigation menu */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-purple-500/20 bg-[#0b1020] transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        {navItems.map(({ label, id }) => {
          const isActive = activeSection === id;

          return (
            <a
              key={id}
              href={`#${id}`}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => handleNavigation(id)}
              aria-current={isActive ? "location" : undefined}
              className={`block border-l-2 px-6 py-4 no-underline transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 ${
                isActive
                  ? "border-purple-400 bg-purple-500/10 text-purple-400"
                  : "border-transparent text-white hover:border-purple-400 hover:bg-purple-500/5 hover:text-purple-300"
              }`}
            >
              {label}
            </a>
          );
        })}

        {/* Mobile Hire Me button */}
        <a
          href="#fiverr"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
          className="mx-6 my-4 block rounded-lg bg-purple-600 px-5 py-3 text-center font-semibold text-white no-underline transition-colors duration-300 hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
