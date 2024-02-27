import Link from "next/link";

// Props Validation
interface AuthProps {
  isLogin?: boolean;
}
export default function Auth(props: Readonly<Partial<AuthProps>>) {
  const { isLogin } = props;
  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink"
            data-bs-toggle="dropdown" aria-expanded="false">
            <img src="/img/avatar-1.png" className="rounded-circle" width="40" height="40"
              alt="" />
          </a>

          <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
            <li><Link className="dropdown-item text-lg color-palette-2" href="/member">My Profile</Link></li>
            <li><Link className="dropdown-item text-lg color-palette-2" href="/">Wallet</Link></li>
            <li><Link className="dropdown-item text-lg color-palette-2" href="/member/edit-profile">Account Settings</Link>
            </li>
            <li><Link className="dropdown-item text-lg color-palette-2" href="/sign-in">Log Out</Link></li>
          </ul>
        </div>
      </li>
    )
  }
  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in" className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill">
        Sign In
      </Link>
    </li>
  )
}
