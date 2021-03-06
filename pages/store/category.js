import React, { useEffect, useState } from 'react'

// next components
import Image from 'next/image'
import { useRouter } from 'next/router'

// redux
import { useDispatch } from 'react-redux'

// custom components
import PrimaryLayout from 'components/Layout/PrimaryLayout'
import StoreProductCard from 'components/Store/StoreProductCard'
import StorePregress from 'components/Store/StorePregress'
import CategoryFilter from 'components/Store/CategoryFilter'
import BackButton from 'components/components/BackButton'

// graphql
import { useMutation, useLazyQuery } from '@apollo/client'
import graphql from 'crysdiazGraphql'

// styles
import globalStyles from 'styles/GlobalStyles.module.scss'
import styles from './category.module.scss'

const Category = props => {
  // loading part ###########################
  const dispatch = useDispatch()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (isMounted === true) {
      dispatch({ type: 'set', isLoading: false })
    }
  }, [isMounted, dispatch])
  // loading part end #######################

  // variables
  const { viewport } = props
  const router = useRouter()
  const [products, setProducts] = useState([])
  const [someProducts, setSomeProducts] = useState([])
  const [categoryId, setCategoryId] = useState(-1)
  const [showCount, setShowCount] = useState(0)
  const [moreToggle, setMoreToggle] = useState(false)

  const [categoryList, setCategoryList] = useState([
    { id: 0, label: 'Material Deportivo' },
    { id: 1, label: 'Accessorios' },
    { id: 2, label: 'Salud y Belleza' },
    { id: 3, label: 'Productos Bio' },
  ])
  const [brandList, setBrandList] = useState([
    { id: 0, label: 'Material Deportivo' },
    { id: 1, label: 'Accessorios' },
    { id: 2, label: 'Salud y Belleza' },
    { id: 3, label: 'Productos Bio' },
  ])

  const newProduct = [
    {
      id: 0,
      url: '/images/accessory.svg',
      name: 'Poke flannel marfa swag slow-carb narwhal',
      price: '265',
      discountPrice: '154',
    },
    {
      id: 1,
      url: '/images/accessory.svg',
      name: 'Poke flannel marfa swag slow-carb narwhal',
      price: '265',
      discountPrice: '',
    },
    {
      id: 2,
      url: '/images/accessory.svg',
      name: 'Poke flannel marfa swag slow-carb narwhal',
      price: '265',
      discountPrice: '154',
    },
    {
      id: 3,
      url: '/images/accessory.svg',
      name: 'Poke flannel marfa swag slow-carb narwhal',
      price: '265',
      discountPrice: '',
    },
    {
      id: 4,
      url: '/images/accessory.svg',
      name: 'Poke flannel marfa swag slow-carb narwhal',
      price: '265',
      discountPrice: '154',
    },
    {
      id: 5,
      url: '/images/accessory.svg',
      name: 'Poke flannel marfa swag slow-carb narwhal',
      price: '265',
      discountPrice: '',
    },
    {
      id: 6,
      url: '/images/accessory.svg',
      name: 'Poke flannel marfa swag slow-carb narwhal',
      price: '265',
      discountPrice: '154',
    },
    {
      id: 7,
      url: '/images/accessory.svg',
      name: 'Poke flannel marfa swag slow-carb narwhal',
      price: '265',
      discountPrice: '',
    },
    {
      id: 8,
      url: '/images/accessory.svg',
      name: 'Poke flannel marfa swag slow-carb narwhal',
      price: '265',
      discountPrice: '',
    },
    {
      id: 9,
      url: '/images/accessory.svg',
      name: 'Poke flannel marfa swag slow-carb narwhal',
      price: '265',
      discountPrice: '154',
    },
    {
      id: 10,
      url: '/images/accessory.svg',
      name: 'Poke flannel marfa swag slow-carb narwhal',
      price: '265',
      discountPrice: '',
    },
  ]

  // handlers
  useEffect(() => {
    if (router.query.category) {
      setCategoryId(router.query.category)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query])

  useEffect(() => {
    setProducts(newProduct)
    if (newProduct.length > (viewport === 'mobile' ? 6 : 9)) {
      setShowCount(viewport === 'mobile' ? 6 : 9)
      setMoreToggle(true)
      setSomeProducts(newProduct.slice(0, viewport === 'mobile' ? 6 : 9))
    } else if (newProduct.length >= 0) {
      setShowCount(newProduct.length)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSelectCategory = id => {}

  const handleClickProduct = id => {
    router.push({
      pathname: viewport === 'mobile' ? '/store/mobile-detail' : '/store/detail',
      query: {
        id: id,
      },
    })
  }

  const handleClickMore = () => {
    setMoreToggle(!moreToggle)
    setShowCount(products.length)
  }

  return (
    <>
      {viewport === 'mobile' ? (
        <div className="pt-20">
          <div className={globalStyles.container}>
            <div className="mt-4">
              <BackButton viewport={viewport} />
            </div>
            <div className={'mt-4 ' + styles.mobileTitle}>Material deportivo</div>
            <div className="w-full flex justify-center mt-4">
              <CategoryFilter
                categoryList={categoryList}
                brandList={brandList}
                onClick={id => onSelectCategory(id)}
                viewport={viewport}
              />
            </div>
            <div className={'grid grid-cols-2 gap-4 flex justify-center mt-4'}>
              {moreToggle ? (
                <>
                  {someProducts.map((item, index) => (
                    <StoreProductCard
                      item={item}
                      key={index}
                      handleClickProduct={handleClickProduct}
                      viewport={viewport}
                    />
                  ))}
                </>
              ) : (
                <>
                  {products.map((item, index) => (
                    <StoreProductCard
                      item={item}
                      key={index}
                      handleClickProduct={handleClickProduct}
                      viewport={viewport}
                    />
                  ))}
                </>
              )}
            </div>
            <div className="flex justify-center mt-8">
              <StorePregress currentCount={showCount} allCount={products.length} />
            </div>
            {moreToggle ? (
              <div className="flex justify-center my-4 cursor-pointer">
                <div className={styles.moreButton} onClick={handleClickMore}>
                  Cargar mas
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <div className={'flex flex-wrap justify-center'}>
          <div className={globalStyles.container + ' my-20'}>
            <div className={styles.container}>
              <div className={'flex mt-9'}>
                <p className={styles.homePath + ' cursor-pointer'}>home</p>
                <p className={styles.homePath}>&nbsp;{'>'}&nbsp;</p>
                <p className={styles.categoryPath + ' cursor-pointer'}>{categoryList[categoryId]?.label}</p>
              </div>
              <div className="flex justify-end mt-10">
                <CategoryFilter
                  categoryList={categoryList}
                  brandList={brandList}
                  onClick={id => onSelectCategory(id)}
                />
              </div>
              <div className={'grid grid-cols-3 gap-8 flex justify-center mt-10'}>
                {moreToggle ? (
                  <>
                    {someProducts.map((item, index) => (
                      <StoreProductCard
                        item={item}
                        key={index}
                        handleClickProduct={handleClickProduct}
                        viewport={viewport}
                      />
                    ))}
                  </>
                ) : (
                  <>
                    {products.map((item, index) => (
                      <StoreProductCard
                        item={item}
                        key={index}
                        handleClickProduct={handleClickProduct}
                        viewport={viewport}
                      />
                    ))}
                  </>
                )}
              </div>
              <div className="flex justify-center mt-20">
                <StorePregress currentCount={showCount} allCount={products.length} />
              </div>
              {moreToggle ? (
                <div className="flex justify-center mt-8 cursor-pointer">
                  <div className={styles.moreButton} onClick={handleClickMore}>
                    Cargar mas
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Category

Category.getLayout = function getLayout(page) {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
