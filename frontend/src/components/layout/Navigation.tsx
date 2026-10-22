
import { Link, useLocation } from "react-router-dom";

const menus = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation" aria-label="메인 메뉴">
      {menus.map((menu) =>
        location.pathname === "/" ? (
          <a
            key={menu.id}
            className="nav-link"
            href={`#${menu.id}`}
          >
            {menu.label}
          </a>
        ) : (
          <Link
            key={menu.id}
            className="nav-link"
            to={`/#${menu.id}`}
          >
            {menu.label}
          </Link>
        )
      )}
    </nav>
  );
}
