import Image from "next/image";
import CheckoutConfirmation from "../components/organisms/CheckoutConfimation";
import CheckoutDetail from "../components/organisms/CheckoutDetail";
import CheckoutItem from "../components/organisms/CheckoutItem";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "../services/data-types";

interface CheckoutProps {
  user: UserTypes;
}

export default function Checkout(props: Readonly<CheckoutProps>) {
  const { user } = props;
  console.log('user', user)

  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <Link href="/#">
            <Image src="/icon/logo.svg" width={60} height={60} alt="Logo" />
          </Link>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
        </div>
        <CheckoutItem />
        <hr />
        <CheckoutDetail />
        <CheckoutConfirmation />
      </div>
    </section>
  )
}

// Cek user sudah login
export async function getServerSideProps({ req }: any) {      // contex berisi req, res, dll
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanetn: false,
      }
    }
  }
  console.log('token : ', token);   // Console hanya bisa dilihat pada console

  // atob tidak bisa digunakan di server jadi pakai fungsi Buffer yang sudah disediakan oleh node
  const jwtToken = Buffer.from(token, 'base64').toString('ascii');

  // jwt_decode
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);

  const userFromPayload: UserTypes = payload.player;

  // Image
  if (userFromPayload.avatar) {
    const IMG = process.env.NEXT_PUBLIC_IMG;
    userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  }

  return {
    props: {
      user: userFromPayload,   // Kirim data payload
    }
  }
}