import React from "react";

/**
 * Full-viewport shell for hash routes (not the home scroll page).
 * Keeps the same slate background under the fixed navbar.
 */
function PageLayout({ children, className = "" }) {
  return (
    <main className={`route-page page-section ${className}`.trim()}>
      {children}
    </main>
  );
}

export default PageLayout;
