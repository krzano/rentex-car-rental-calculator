import logo from "@/assets/images/logo.svg";
import { RoutePaths } from "@/constants/routes";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setIsTop(false) : setIsTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      className={`bg sticky top-0 z-50 w-screen border-b border-gray-200 bg-white transition-shadow ease-in-out ${!isTop && "shadow-natural"}`}
    >
      <div className="mx-auto flex max-w-screen-xl px-4 py-2 md:px-8 md:py-3">
        <Link to={RoutePaths.HOME}>
          <img src={logo} alt="Rentex logo" className="h-10 md:h-12" />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
