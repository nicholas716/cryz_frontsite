import PrimaryLayout from 'components/Layout/PrimaryLayout'
import globlaStyle from 'styles/GlobalStyles.module.scss'
import styles from './credit-success.module.scss'
import Image from 'next/image'
import successLogo from 'public/images/credit-success.svg'

const CreditSuccess = () => {
  return (
    <div className={'flex flex-wrap justify-center'}>
      <div className={styles.container}>
        <div className={globlaStyle.container}>
          <div className={'flex justify-center items-center h-full'}>
            <div className={styles.creditSection}>
              <div className={styles.title}>¡GRACIAS POR TU COMPRA!</div>
              <div className={'pt-16 text-center'}>
                <Image src={successLogo} alt="" width={270} height={222} />
              </div>
              <div className={'pt-16 ' + styles.orderNumber}>TU NÚMERO DE PEDIDO ES #45486</div>
              <div className={'pt-4 ' + styles.description}>
                Proin in mi maximus, tempus libero vitae, hendrerit nisl. Curabitur posuere, augue a feugiat convallis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CreditSuccess

CreditSuccess.getLayout = function getLayout(page) {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
