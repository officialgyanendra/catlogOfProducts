import React, { useState } from 'react'

export const Body = () => {
    const ProductArr = [
        {
            id: 1,
            prodctImg: 'https://via.placeholder.com/100.png/09f/fff',
            title: 'Heading',
            productInfo: 'loremxcoehcwe  einfcn eobfbubcwbuwce',
            price: '50'
        }, {
            id: 1,
            prodctImg: 'https://via.placeholder.com/100.png/09f/fff',
            title: 'Heading',
            productInfo: 'loremxcoehcwe  einfcn eobfbubcwbuwce',
            price: '90'
        }, {
            id: 1,
            prodctImg: 'https://via.placeholder.com/100.png/09f/fff',
            title: 'Heading',
            productInfo: 'loremxcoehcwe  einfcn eobfbubcwbuwce',
            price: '60'
        }, {
            id: 1,
            prodctImg: 'https://via.placeholder.com/100.png/09f/fff',
            title: 'Heading',
            productInfo: 'loremxcoehcwe  einfcn eobfbubcwbuwce',
            price: '50'
        }, {
            id: 1,
            prodctImg: 'https://via.placeholder.com/100.png/09f/fff',
            title: 'Heading',
            productInfo: 'loremxcoehcwe  einfcn eobfbubcwbuwce',
            price: '70'
        }, {
            id: 1,
            prodctImg: 'https://via.placeholder.com/100.png/09f/fff',
            title: 'Heading',
            productInfo: 'loremxcoehcwe  einfcn eobfbubcwbuwce',
            price: '49'
        }, {
            id: 1,
            prodctImg: 'https://via.placeholder.com/100.png/09f/fff',
            title: 'Heading',
            productInfo: 'loremxcoehcwe  einfcn eobfbubcwbuwce',
            price: '80'
        }
    ]
    const [cardItems, setCardItems] = useState(ProductArr);
    
    const sort = (e) => {
        if (e.target.value === '0') {
            const arr = [...cardItems]
            arr.sort((a, b) => a.price - b.price)
            setCardItems(arr)
        }

        if (e.target.value === '1') {
            const arr = [...cardItems]
            arr.sort((a, b) => b.price - a.price)
            setCardItems(arr)
        }
    }

    return (
        <>
            <div className='containt'>
                {/* left body */}
                <div className="leftContaint"></div>
                {/* rightbody */}
                <div className="rightContaint">
                    <div className='sort' onChange={sort}>
                        <select name='' id=''>
                            <option value="">Filter Product</option>
                            <option value="0">Low to High</option>
                            <option value="1">Height to Low</option>
                        </select>
                    </div>
                    <div className='card-wrap'>
                        {cardItems && cardItems.length && cardItems.map((item, index) => {
                            return (
                                <div className='card' key={index}>
                                    <img src={item.prodctImg} alt=""></img>
                                    <h3>{item.title}</h3>
                                    <p>{item.productInfo}</p>
                                    <h6>Rs. {item.price} <del>90rs</del></h6>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
