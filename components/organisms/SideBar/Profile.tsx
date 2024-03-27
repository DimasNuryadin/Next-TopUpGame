import Cookies from "js-cookie";
import Image from "next/image";
import { useEffect, useState } from "react";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";
import { jwtDecode } from "jwt-decode";

export default function Profile() {
  const [user, setUser] = useState({
    avatar: '',
    name: '',
    email: '',
  })

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
      setUser(userFromPayload)
    }
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      {user.avatar ? (
        <Image
          src={user.avatar}
          loader={() => user.avatar}
          unoptimized
          width={90}
          height={90}
          className="img-fluid mb-20"
          alt="Profile"
          style={{ borderRadius: '100%' }}
          priority
        />
      ) : (
        <Image
          src="/img/avatar-1.png"
          width={90}
          height={90}
          className="img-fluid mb-20"
          alt="Profile"
          style={{ borderRadius: '100%' }}
        />
      )}
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  )
}
