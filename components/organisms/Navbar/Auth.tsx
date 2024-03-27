import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";
import { useRouter } from "next/router";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
  })

  const router = useRouter()

  useEffect(() => {
    // Ambil Cookies
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token!)
      // jwt_decode
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;

      // Image
      if (userFromPayload.avatar) {
        const IMG = process.env.NEXT_PUBLIC_IMG;
        userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
      }

      setIsLogin(true)
      setUser(userFromPayload);
    }
  }, []);

  const onLogout = () => {
    // Remove Cookies
    Cookies.remove('token');
    router.push('/');
    setIsLogin(false);
  }

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a className="dropdown-toggle ms-lg-40" href="/#" id="dropdownMenuLink"
            data-bs-toggle="dropdown" aria-expanded="false">
            {user.avatar ? (
              <img
                src={user.avatar}
                className="rounded-circle"
                width="40"
                height="40"
                alt="Profile" />
            ) : (
              <img
                src="/img/avatar-1.png"
                className="rounded-circle"
                width="40"
                height="40"
                alt="EUY" />
            )}
          </a>
          <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
            <li><Link className="dropdown-item text-lg color-palette-2" href="/member">My Profile</Link></li>
            <li><Link className="dropdown-item text-lg color-palette-2" href="/">Wallet</Link></li>
            <li><Link className="dropdown-item text-lg color-palette-2" href="/member/edit-profile">Account Settings</Link>
            </li>
            <li><button type="button" onClick={onLogout} className="dropdown-item text-lg color-palette-2">Log Out</button></li>
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
