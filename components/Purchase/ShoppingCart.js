import React, { useState } from 'react'

// next components
import Image from 'next/image'

// custom components
import AcceptCommonButtom from 'components/Purchase/CommonButton'
// import CommonButton from './CommonButton'

import Radio from 'components/Purchase/Radio'
// styles
import styles from './ShoppingCart.module.scss'

// images
import down from 'public/images/down.svg'
import up from 'public/images/up.svg'
import plus from 'public/images/plus-gray.svg'
import minus from 'public/images/minus-gray.svg'

const ShoppingCart = props => {
  const { data, handleRemoveCart, handleAcceptDiscount, tabIndex, shoppingInfo, docData } = props
  const [expend, setExpend] = useState(false)

  const handleClickExpand = () => {
    setExpend(!expend)
  }

  let total = 0
  data?.map(item => (total += item.price))

  const handleChangeFrame = () => {}
  return (
    <div className={styles.shoppingCart}>
      <div className={'flex justify-between'}>
        <div className={styles.summary}>Resumen compra</div>
        <div className={'relative cursor-pointer ' + styles.badge}>
          <div className={'absoulte top-3 right-3 ' + styles.summaryNumber}>2</div>
        </div>
      </div>
      <div className={styles.divider + ' mt-4 mb-4'} />
      <div className={'max-h-54 overflow-y-auto -mr-8 pr-1'}>
        {data?.map((item, index) => (
          <div key={index}>
            <div className={'flex justify-between items-center my-3'}>
              <div className={'flex justify-between'}>
                <div className={'mr-4'} style={{ minWidth: '88px' }}>
                  <Image src={item.image} alt={''} width={88} height={88} />
                </div>
                <div className={'flex flex-col justify-evenly'}>
                  <div className={styles.listDescription}>{item.description}</div>
                  <div className={styles.listPrice}>€&nbsp;&nbsp;{item.price}</div>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center">
                <div className={'cursor-pointer flex justify-center items-center ' + styles.outOperater}>
                  <Image src={plus} alt={''} width={10} height={10} />
                </div>
                <div className={'cursor-pointer flex justify-center items-center my-2 ' + styles.outCounter}>
                  <div className={styles.listDescription}>{item.orderCount}</div>
                </div>
                <div className={'cursor-pointer flex justify-center items-center ' + styles.outOperater}>
                  <Image src={minus} alt={''} width={10} height={10} />
                </div>
              </div>
            </div>
            <button
              className={'flex justify-between items-center ' + styles.outlineButton}
              onClick={() => handleRemoveCart(index)}
            >
              <Image src={'/images/trash.svg'} alt={''} width={12} height={12} />
              <p className={'pl-3 ' + styles.outlineLabel}>Eliminar</p>
            </button>
          </div>
        ))}
      </div>
      {data?.length !== 0 && <div className={styles.divider + ' mt-4'} />}
      <div className={'mt-4'}>
        <div className={'flex justify-between'}>
          <div className={styles.discount}>Cupón descuento?</div>
          <div
            className={'duration-200 hover:bg-gray-300 w-6 h-6 flex justify-center items-center p-1.5 rounded-full'}
            onClick={handleClickExpand}
          >
            {expend ? (
              <Image src={up} alt="" width={15} height={15} />
            ) : (
              <Image src={down} alt="" width={15} height={15} />
            )}
          </div>
        </div>
        {expend && (
          <div>
            <div className={'flex justify-end mt-3'}>
              <input type="text" id="discount" name="number" className={styles.inputDiscount} />
            </div>
            <div className={'flex justify-end mt-1'}>
              <AcceptCommonButtom label={'Aplicar'} handleClick={handleAcceptDiscount} type={'fill'} />
            </div>
          </div>
        )}
      </div>
      <div className={styles.divider + ' mt-4 mb-4'} />
      <div className={'flex justify-between'}>
        <div className={styles.listDescription}>Total +IVA</div>
        <div className={styles.listPrice}>€&nbsp;{total.toFixed(2)}</div>
      </div>
      {docData && (
        <div className={'pt-36'}>
          <Radio
            handleChangeType={handleChangeFrame}
            type={'billAddress'}
            value={'billAddress'}
            label={'Dirección facturación'}
          />
          <div className={'pt-2 pl-8 ' + styles.billAddress}>
            <div>{docData.name + ' ' + docData.surname}</div>
            <div>{docData.address}</div>
            <div>{docData.province}</div>
            <div>{docData.postalCode}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShoppingCart
