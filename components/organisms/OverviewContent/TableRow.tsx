import Image from "next/image";
import cx from 'classnames'
import { NumericFormat } from "react-number-format";

interface TableRowProps {
  title: string;
  category: string;
  item: string;
  price: number;
  status: string;
  image: string;
}

export default function TableRow(props: Readonly<TableRowProps>) {
  const { title, category, item, price, status, image } = props

  const statusClass = cx({
    'float-start icon-status': true,
    'pending': status === 'pending',
    'success': status === 'success',
    'failed': status === 'failed',
  })

  const URL_IMAGE = process.env.NEXT_PUBLIC_IMG;
  const IMG = `${URL_IMAGE}/${image}`;

  return (
    <tr className="align-middle">
      <th scope="row">
        <Image loader={() => `${IMG}?w="200"&q="75"`} className="float-start me-3 mb-lg-0 mb-3" src={IMG}
          width={80} height={60} alt="Game thumb" />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          <NumericFormat
            value={price}
            prefix="Rp. "
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        </p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}</p>
        </div>
      </td>
    </tr>
  )
}
