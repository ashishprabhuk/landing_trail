import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [gradientPos, setGradientPos] = useState(0);

  // Animate gradient for "liquid glass" feel
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPos((pos) => (pos + 0.5) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/Home", label: "Home" },
    { path: "/Services", label: "Services" },
    { path: "/Contact Us", label: "Contact Us" },
    { path: "/About Us", label: "About Us" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: "10px", // Reduced from 20px
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        background: `linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.1) ${gradientPos}%,
          rgba(255, 255, 255, 0.05) ${(gradientPos + 50) % 100}%
        )`,
        backdropFilter: "blur(16px) saturate(180%)", // Reduced blur from 20px
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        borderRadius: "40px", // Reduced from 50px
        padding: "8px 16px", // Reduced from 12px 24px
        border: "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow:
          "inset 0 1px 1px rgba(255,255,255,0.2), 0 6px 24px rgba(0,0,0,0.2)", // Reduced shadow
        transition: "background 0.5s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "4px", // Reduced from 6px
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "90vw",
          overflowX: "auto",
        }}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                padding: "6px 14px", // Reduced from 10px 18px
                borderRadius: "20px", // Reduced from 25px
                textDecoration: "none",
                color: "#ffffff",
                background: isActive
                  ? "linear-gradient(135deg, rgba(30,144,255,0.8), rgba(0,191,255,0.8))"
                  : "rgba(255,255,255,0.05)",
                border: isActive
                  ? "1px solid rgba(255, 255, 255, 0.3)"
                  : "1px solid rgba(255,255,255,0.05)",
                fontSize: "13px", // Reduced from 14px
                fontWeight: isActive ? "600" : "normal",
                transition: "all 0.3s ease", // Reduced from 0.4s
                whiteSpace: "nowrap",
                boxShadow: isActive
                  ? "0 0 8px rgba(30,144,255,0.5)" // Reduced from 12px
                  : "inset 0 0 3px rgba(255,255,255,0.05)", // Reduced from 4px
                backdropFilter: "blur(8px)", // Reduced from 10px
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.15)";
                  e.currentTarget.style.boxShadow =
                    "0 0 6px rgba(255,255,255,0.3)"; // Reduced from 8px
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.05)";
                  e.currentTarget.style.boxShadow =
                    "inset 0 0 3px rgba(255,255,255,0.05)"; // Reduced from 4px
                }
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}