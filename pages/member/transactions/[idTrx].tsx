import { jwtDecode } from "jwt-decode";
import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import { HistoryTransactionTypes, JWTPayloadTypes, UserTypes } from "../../../services/data-types";
import { getMemberTransactionDetail } from "../../../services/member";

interface TransactionDetailProps {
  transactionDetail: HistoryTransactionTypes
}

export default function TransactionDetail(props: Readonly<TransactionDetailProps>) {
  const { transactionDetail } = props;
  // console.log("detail :", transactionDetail)

  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent data={transactionDetail} />
    </section>
  )
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  },
  params: {
    idTrx: string;
  }
}

// Cek user sudah login
export async function getServerSideProps({ req, params }: GetServerSideProps) {      // contex berisi req, res, dll
  // console.log("params : ", params)
  const { idTrx } = params;
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

  const response = await getMemberTransactionDetail(idTrx, jwtToken)
  // console.log("response : ", response)

  return {
    props: {
      transactionDetail: response.data,   // Kirim data payload ke props
    }
  }
}