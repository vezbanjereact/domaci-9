const Footer = () => {
  return (
    <footer className="bg-primary bg-black text-white py-5">
      <div className="mx-auto container px-4">
        <div className="flex items-center justify-between gap-6 border-t border-secondary pt-8">
          <img
            src="https://www.yts-official.top/static/yts/image/logo-YTS.svg"
            className="h-7 w-min"
          />
          <p className="text-sm text-quaternary">
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
