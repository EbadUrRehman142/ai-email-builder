
import React from "react";

const footerStyle = {
  width: "100%",
  padding: "1rem 0b 0 0",
  background: "linear-gradient(90deg, violet 0%, purple 100%)",
  color: "#fff",
  borderTop: "none",
  marginTop: "3rem",
  boxShadow: "0 -2px 16px rgba(44,83,100,0.08)",
};

const iconStyle = {
  display: "inline-block",
  margin: "0 0.5rem",
  verticalAlign: "middle",
  width: 24,
  height: 24,
  fill: "#fff",
  opacity: 0.85,
  transition: "opacity 0.2s",
  cursor: "pointer",
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          {/* <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>
            AI Email Builder
          </div> */}
          <div style={{ fontSize: 16, color: "#e0e0e0", marginBottom: 8, textAlign: "center", maxWidth: 600 }}>
            Effortlessly design, customize, and send beautiful emails with the power of AI. Elevate your communication and boost productivity.
          </div>
          <div style={{ margin: "0.5rem 0 1rem 0" }}>
            {/* Social media icon placeholders */}
            <span style={iconStyle} title="Twitter">
              <svg viewBox="0 0 24 24"><path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.93 8.93 0 0 1-2.83 1.08 4.48 4.48 0 0 0-7.63 4.08A12.7 12.7 0 0 1 3.1 4.86a4.48 4.48 0 0 0 1.39 5.98c-.73-.02-1.42-.22-2.02-.56v.06a4.48 4.48 0 0 0 3.6 4.4c-.34.09-.7.14-1.07.14-.26 0-.51-.02-.76-.07a4.48 4.48 0 0 0 4.18 3.11A9 9 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.19 0-.37-.01-.56.88-.64 1.64-1.44 2.25-2.35z" /></svg>
            </span>
            <span style={iconStyle} title="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" /></svg>
            </span>
            <span style={iconStyle} title="GitHub">
              <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.012-1.243-.018-2.252-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z" /></svg>
            </span>
          </div>
          <div style={{ fontSize: 14, color: "#b0b0b0" }}>
            &copy; {new Date().getFullYear()} AI Email Builder. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 