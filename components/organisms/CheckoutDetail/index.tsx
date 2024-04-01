import { useEffect, useState } from "react"
import { NumericFormat } from "react-number-format";
import cx from "classnames";

export default function CheckoutDetail() {
  const [dataTopUp, setDataTopUp] = useState({
    verifyID: '',
    nominalItem: {
      price: 0,
      coinQuantity: 0,
      coinName: '',
      _id: '',
    },
    paymentItem: {
      payment: {
        type: '',
        _id: '',
      },
      bank: {
        bankName: '',
        name: '',
        noRekening: '',
        _id: '',
      }
    },
    bankAccountName: '',
  })

  const className = {
    purchaseLabel: cx('text-lg color-palette-1 mb-20'),
    purchaseDetail: cx('purchase-details'),
  }

  useEffect(() => {
    const dataFromLocal = localStorage.getItem('data-topup');
    const dataTopUpLocal = JSON.parse(dataFromLocal!);
    setDataTopUp(dataTopUpLocal);
  }, [])

  const itemPrice = dataTopUp.nominalItem.price;
  const tax = dataTopUp.nominalItem.price * (10 / 100);
  const totalPrice = itemPrice + tax;

  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
        <p className={className.purchaseLabel}>
          Your Game ID
          {''}
          <span className={className.purchaseDetail}>
            {dataTopUp.verifyID}
          </span>
        </p>
        <p className={className.purchaseLabel}>
          Order ID
          {''}
          <span className={className.purchaseDetail}>
            #GG001
          </span>
        </p>
        <p className={className.purchaseLabel}>
          Item
          {''}
          <span className={className.purchaseDetail}>
            {dataTopUp.nominalItem.coinQuantity} {dataTopUp.nominalItem.coinName}
          </span>
        </p>
        <p className={className.purchaseLabel}>
          Price
          {''}
          <span className={className.purchaseDetail}>
            <NumericFormat
              value={itemPrice}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className={className.purchaseLabel}>
          Tax (10%)
          {''}
          <span className={className.purchaseDetail}>
            <NumericFormat
              value={tax}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className={className.purchaseLabel}>
          Total
          {''}
          <span className="purchase-details color-palette-4">
            <NumericFormat
              value={totalPrice}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
      </div>

      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
        <p className={className.purchaseLabel}>
          Your Account Name
          {''}
          <span className={className.purchaseDetail}>{dataTopUp.bankAccountName}</span>
        </p>
        <p className={className.purchaseLabel}>
          Type
          {''}
          <span className="payment-details">{dataTopUp.paymentItem.payment.type}</span>
        </p>
        <p className={className.purchaseLabel}>
          Bank Name
          {''}
          <span className="payment-details">{dataTopUp.paymentItem.bank.bankName}</span>
        </p>
        <p className={className.purchaseLabel}>
          Bank Account Name
          {''}
          <span className="payment-details">{dataTopUp.paymentItem.bank.name}</span>
        </p>
        <p className={className.purchaseLabel}>
          Bank Number
          {''}
          <span className="payment-details">{dataTopUp.paymentItem.bank.noRekening}</span>
        </p>
      </div>
    </>
  )
}
