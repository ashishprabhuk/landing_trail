import { useEffect, useState } from "react";
import logo from "../assets/AndroMetaSideTransparent.png";

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to show/hide background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const handleNavClick = (path) => {
    setCurrentPath(path);
  };

  return (
    <>
      <style>{`
        @keyframes logoGlow {
          0% { filter: brightness(1); }
          100% { filter: brightness(1.1); }
        }
        
        @keyframes activeGlow {
          0% { box-shadow: 0 0 15px rgba(255,255,255,0.2), inset 0 1px 2px rgba(255,255,255,0.1) !important; }
          100% { box-shadow: 0 0 25px rgba(255,255,255,0.3), inset 0 1px 2px rgba(255,255,255,0.2) !important; }
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
          right: "10px",
          zIndex: 1000,
          height: "70px",
          background: isScrolled
            ? `
            rgba(255, 255, 255, 0.05),
            linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))
          `
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px) saturate(150%)" : "none",
          WebkitBackdropFilter: isScrolled
            ? "blur(20px) saturate(150%)"
            : "none",
          borderRadius: "35px",
          border: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
          boxShadow: isScrolled
            ? `
            inset 0 1px 1px rgba(255,255,255,0.1),
            0 8px 32px rgba(0,0,0,0.1)
          `
            : "none",
          transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            padding: "0 30px",
            position: "relative",
          }}
        >
          {/* Logo */}
          {/* Logo */}
<div
  style={{
    cursor: "pointer",
    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
  <img
    src={logo}
    alt="AndroMeta Logo"
    style={{
      height: "45px", // adjust as needed
      width: "auto",
      display: "block",
      objectFit: "contain",
    }}
  />
</div>


          {/* Center Navigation Pills */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
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
            {navItems.map((item, index) => {
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
                    fontWeight: isActive ? "600" : "500",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                    whiteSpace: "nowrap",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: isActive
                      ? "inset 0 1px 2px rgba(255,255,255,0.1), 0 4px 15px rgba(0,0,0,0.1)"
                      : "none",
                    animation: isActive
                      ? "activeGlow 2s ease-in-out infinite alternate"
                      : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.12)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.transform = "translateY(0px)";
                      e.currentTarget.style.boxShadow = "none";
                    }
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* CTA Button - Glass Effect */}
          <button
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
              transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow:
                "inset 0 1px 2px rgba(255,255,255,0.1), 0 4px 15px rgba(0,0,0,0.1)",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "inset 0 1px 2px rgba(255,255,255,0.2), 0 8px 25px rgba(0,0,0,0.15)";
              e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "inset 0 1px 2px rgba(255,255,255,0.1), 0 4px 15px rgba(0,0,0,0.1)";
              e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
          >
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
}
