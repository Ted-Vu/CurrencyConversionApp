import Link from "next/link";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link href="/">
        <a class="navbar-brand md-opjjpmhoiojifppkkcdabiobhakljdgm_doc">
          BitzPrize{" "}
        </a>
      </Link>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link md-opjjpmhoiojifppkkcdabiobhakljdgm_doc">
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link md-opjjpmhoiojifppkkcdabiobhakljdgm_doc">
                About
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
