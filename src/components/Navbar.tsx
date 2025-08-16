import { useEffect, useState } from "react";
import logo from "../assets/AndroMetaSideTransparent.png";

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Find which section is currently in view
      const sections: any = navItems.map(item => document.getElementById(item.path));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPosition >= sections[i].offsetTop) {
          setCurrentPath(navItems[i].path);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "home", label: "Home" },
    { path: "services", label: "Services" },
    { path: "work", label: "Our Work" },
    { path: "contact", label: "Contact" },
  ];

  const handleNavClick = (path: any) => {
    setCurrentPath(path);
    const element = document.getElementById(path);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <>
      <style>{`
        @keyframes activeGlow {
          0% { box-shadow: 0 0 15px rgba(255,255,255,0.2), inset 0 1px 2px rgba(255,255,255,0.1); }
          100% { box-shadow: 0 0 25px rgba(255,255,255,0.3), inset 0 1px 2px rgba(255,255,255,0.2); }
        }

        /* Mobile pill nav fixed at bottom */
        @media (max-width: 768px) {
          .mobile-pills {
            position: fixed;
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9999;
          }
        }
      `}</style>

      {/* Desktop Navbar */}
      <nav
        className="hidden md:flex"
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
          right: "10px",
          zIndex: 1000,
          height: "60px",
          background: isScrolled
            ? "rgba(255, 255, 255, 0.05)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px) saturate(150%)" : "none",
          WebkitBackdropFilter: isScrolled
            ? "blur(20px) saturate(150%)"
            : "none",
          borderRadius: "35px",
          border: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
          boxShadow: isScrolled
            ? "inset 0 1px 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.1)"
            : "none",
          transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 30px",
        }}
      >
        {/* Logo - scrolls to top when clicked */}
        <div
          style={{ cursor: "pointer", transition: "all 0.3s ease" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          onClick={() => handleNavClick("home")}
        >
          <img
            src={logo}
            alt="AndroMeta Logo"
            style={{
              height: "45px",
              width: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Pills
        <div
          style={{
            display: "flex",
            gap: "6px",
            background: "rgba(255, 255, 255, 0.08)",
            padding: "6px",
            borderRadius: "25px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            boxShadow:
              "inset 0 1px 2px rgba(255,255,255,0.1), 0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                style={{
                  padding: "6px 16px",
                  borderRadius: "18px",
                  border: isActive
                    ? "1px solid rgba(255,255,255,0.2)"
                    : "none",
                  background: isActive
                    ? "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))"
                    : "transparent",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: isActive ? "400" : "300",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  boxShadow: isActive
                    ? "inset 0 1px 2px rgba(255,255,255,0.1), 0 4px 15px rgba(0,0,0,0.1)"
                    : "none",
                  animation: isActive
                    ? "activeGlow 2s ease-in-out infinite alternate"
                    : "none",
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div> */}

        {/* CTA - scrolls to contact section */}
        <button
          onClick={() => handleNavClick("contact")}
          style={{
            padding: "10px 20px",
            borderRadius: "22px",
            border: "1px solid rgba(255,255,255,0.2)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow:
              "inset 0 1px 2px rgba(255,255,255,0.1), 0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          Get Started
        </button>
      </nav>

      <div
        className="hidden md:flex"
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
          right: "10px",
          zIndex: 1000,
          height: "60px",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 30px",
        }}
      >
        {/* Pills */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            background: "rgba(255, 255, 255, 0.08)",
            padding: "4px",
            borderRadius: "25px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            boxShadow:
              "inset 0 1px 2px rgba(255,255,255,0.1), 0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                style={{
                  padding: "6px 16px",
                  borderRadius: "18px",
                  border: isActive
                    ? "1px solid rgba(255,255,255,0.2)"
                    : "none",
                  background: isActive
                    ? "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))"
                    : "transparent",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: isActive ? "400" : "300",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  boxShadow: isActive
                    ? "inset 0 1px 2px rgba(255,255,255,0.1), 0 4px 15px rgba(0,0,0,0.1)"
                    : "none",
                  animation: isActive
                    ? "activeGlow 2s ease-in-out infinite alternate"
                    : "none",
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Navbar */}
      <nav
        className="flex md:hidden flex-col items-center"
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
          right: "10px",
          zIndex: 1000,
          height: "60px",
          background: isScrolled
            ? "rgba(255, 255, 255, 0.05)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px) saturate(150%)" : "none",
          WebkitBackdropFilter: isScrolled
            ? "blur(20px) saturate(150%)"
            : "none",
          borderRadius: "30px",
          border: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
          boxShadow: isScrolled
            ? "inset 0 1px 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.1)"
            : "none",
          transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
          justifyContent: "center",
        }}
      >
        {/* Logo Centered - scrolls to top when clicked */}
        <div onClick={() => handleNavClick("home")}>
          <img
            src={logo}
            alt="AndroMeta Logo"
            style={{
              height: "40px",
              width: "auto",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        </div>
      </nav>

      {/* Mobile Pills Fixed at Bottom */}
      <div className="mobile-pills flex md:hidden gap-1 bg-white/10 px-3 py-2 rounded-full border border-white/10 backdrop-blur-lg">
        {navItems.map((item) => {
          const isActive = currentPath === item.path;
          return (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              style={{
                padding: "6px 14px",
                borderRadius: "18px",
                border: isActive
                  ? "1px solid rgba(255,255,255,0.2)"
                  : "none",
                background: isActive
                  ? "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))"
                  : "transparent",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: isActive ? "400" : "300",
                cursor: "pointer",
                whiteSpace: "nowrap",
                boxShadow: isActive
                  ? "inset 0 1px 2px rgba(255,255,255,0.1), 0 4px 15px rgba(0,0,0,0.1)"
                  : "none",
                animation: isActive
                  ? "activeGlow 2s ease-in-out infinite alternate"
                  : "none",
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </>
  );
}