
function Footer() {
  return (
    <footer className="mt-0 border-t border-white/10 py-6">
      {/* Footer content */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 md:flex-row">
        {/* Brand name */}
        <h3 className="text-2xl font-bold text-purple-500">
          Ritesh Jaiswal
        </h3>

        {/* Copyright notice */}
        <p className="mt-3 text-sm text-gray-400 md:mt-0">
          © 2026 Ritesh Jaiswal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
