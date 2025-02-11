import React, { useEffect, useState } from 'react'

const Pagination = () => {

    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)


    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products')
        const res = await data.json()
        console.log(res.products)
        setProducts(res.products)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const ProductsPerPage = 5
    const totalProducts = products.length //30
    const totalPages = Math.ceil(totalProducts / ProductsPerPage)
    // console.log(currentPage)

    const currentProducts = products.slice(((currentPage - 1) * ProductsPerPage), (currentPage * ProductsPerPage))


    if (products.length === 0) {
        return <span>No Products Found ! </span>
    }
    return (
        <div>
            <h1 className='text-2xl text-center mt-2 '>Pagination</h1>
            <div className='  grid grid-cols-3  py-2 m-2'>
                {
                    currentProducts.map((product) => (
                        <div key={product.id} className='flex flex-col items-center justify-center border-2'>

                            <img src={product.images[0]} className='w-[240px]' />
                            <p className='font-bold text-xl'>{product.title}</p>
                        </div>
                    ))
                }
            </div>
            <div className='  flex justify-center items-center gap-3'>
                {currentPage > 1 && <button className='py-1 px-2 bg-blue-400 rounded-lg'
                    onClick={() => handlePageChange(currentPage - 1)}>Previous</button>}

                {
                    [...Array(totalPages)].map((_, i) => (<button onClick={() => handlePageChange(i + 1)} className=' hover:cursor-pointer bg-gray-400 rounded-lg py-1 px-2' key={i}>{i + 1}</button>))
                }
                {currentPage < totalPages && currentPage >= 1 && (
                    <button className='py-1 px-2 bg-blue-400 rounded-lg' onClick={() => handlePageChange(currentPage + 1)}>
                        Next
                    </button>
                )}

            </div>
            <span className='text-center w-full '>{currentPage}</span>
        </div>
    )
}

export default Pagination