const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="w-full md:w-1/3 lg:w-1/2 flex flex-col items-center mb-8">
        <span>&lt;/&gt; by Noé Henchoz with 💙</span>
        <span><a href="https://henchoz.org/" className="hover:underline">henchoz.org</a> &copy; {new Date().getFullYear()} - All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;