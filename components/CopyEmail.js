"use client";

import { useState } from "react";

// Email line in the contact area: not a link — just the address + a "copy" button.
export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // fallback for older browsers
      const t = document.createElement("textarea");
      t.value = email;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="copy-email">
      <span className="ce-text">email: <b>{email}</b></span>
      <button type="button" className="ce-btn" onClick={copy} aria-label={`Copy email address ${email}`}>
        {copied ? "copied ✓" : "copy"}
      </button>
      <span className="sr-only" aria-live="polite">{copied ? "Email copied" : ""}</span>
    </div>
  );
}
