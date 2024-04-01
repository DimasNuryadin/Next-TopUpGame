import Image from "next/image";
import Link from "next/link";
import CheckoutConfirmation from "../components/organisms/CheckoutConfimation";
import CheckoutDetail from "../components/organisms/CheckoutDetail";
import CheckoutItem from "../components/organisms/CheckoutItem";

export default function Checkout() {

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

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  }
}

// Cek user sudah login
export async function getServerSideProps({ req }: GetServerSideProps) {      // contex berisi req, res, dll
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanetn: false,
      }
    }
  }

  return {
    props: {},
  }
}