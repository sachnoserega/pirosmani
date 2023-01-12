import React from 'react'
import axios from 'axios'

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../Pagination';

import { setCategoryId, setCurrentPage } from '../redux/slice/filterSlice'
import { SearchContext } from '../../src/App';
import { useSelector, useDispatch } from 'react-redux'

// import { useNavigate } from 'react-router';
// import qs from 'qs'

const Home = () => {

    // const navigate = useNavigate()
    const dispatch = useDispatch()
    // const categoryId = useSelector(state => state.filter.categoryId)
    // const sortType = useSelector((state) => state.filter.sort.sortProperty)
    // const currentPage = useSelector((state) => state.filter.currentPage)

    // Оптимизация
    const { categoryId, sort, currentPage } = useSelector(state => state.filter)
    const sortType = sort.sortProperty

    const { searchValue } = React.useContext(SearchContext)

    const [items, setItems] = React.useState([])
    const [isLoading, setisLoading] = React.useState(true)

    // React.useEffect(() => {
    //     if (window.location.search) {
    //         const params = qs.parse(window.location.search.substring(1))      
    //     }
    // }, [])

    React.useEffect(() => {
        const order = sortType.includes('-') ? 'asc' : 'desc'
        const sortBy = sortType.replace('-', '')
        const categor = categoryId > 0 ? `category=${categoryId}` : ''
        // Поиск по BackEnd при помощи (mockAPI)
        const search = searchValue ? `search=${searchValue}` : ''

        setisLoading(true)
        // fetch(`https://63b6a4964f17e3a931ba8ae2.mockapi.io/items?${categor}&sortBy=${sortBy}&order=${order}${search}`
        // fetch(`https://63b6a4964f17e3a931ba8ae2.mockapi.io/items?page=${currentPage}&limit=8${categor}&sortBy=${sortBy}&order=${order}`

        axios.get(`https://63b6a4964f17e3a931ba8ae2.mockapi.io/items?page=${currentPage}&limit=4&${categor}&sortBy=${sortBy}&order=${order}${search}`)
            .then((res) => {
                setItems(res.data)
                setisLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType, searchValue, currentPage])

    // Для сохранения параметров в адресной строке
    // React.useEffect(() => {
    //     const queryString = qs.stringify({
    //         sortProperty: sortType,
    //         categoryId,
    //         currentPage,
    //     })
    //     // navigate(`?${queryString}`)
    // }, [categoryId, sortType, searchValue, currentPage])



    const pizzas = items
        .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
        .map((obj) => <PizzaBlock key={obj.id} {...obj} />)
    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />)

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const onChangePage = (number) => {
        dispatch(setCurrentPage(number))
    }

    return (
        <>
            <div className="content__top">
                <Categories
                    value={categoryId}
                    onChangeCategory={onChangeCategory}
                />
                <Sort />
            </div>
            <h2 className="content__title">Все блюда</h2>
            <div className="content__items">
                {isLoading
                    ? skeletons
                    : pizzas
                }
            </div>
            <Pagination
            currentPage={currentPage}
            onChangePage={onChangePage} />
        </>
    );
}

export default Home;