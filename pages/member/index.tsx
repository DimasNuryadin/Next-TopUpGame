import { jwtDecode } from "jwt-decode";
import OverviewContent from "../../components/organisms/OverviewContent";
import SideBar from "../../components/organisms/SideBar";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu="overview" />
      <OverviewContent />
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

  // console.log('token : ', token);   // Console hanya bisa dilihat pada console terminal
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
      user: userFromPayload,   // Kirim data payload ke props
    }
  }
}