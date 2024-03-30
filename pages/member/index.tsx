import OverviewContent from "../../components/organisms/OverviewContent";
import SideBar from "../../components/organisms/SideBar";

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
  return {
    props: {
      user: {},
    }
  }
}