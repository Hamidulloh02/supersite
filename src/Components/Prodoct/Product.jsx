import React from 'react'
import "./product.css"

function Product() {
  return (
    <div>
        <div className='container mt-3'>
            <div className="d-flex">
                <h3>Наша продукция</h3>
                <img className='productimg ' src="./images/underline.png" alt="" />
            </div>
            <div className="row m-3">
                <div className="col-lg-4 col-md-6 col-sm-12 ">
                    <img className='productimg' src="./images/product01.png" alt="product" />
                    <h4>Hi MO 5 LR5-72HBD</h4>
                    <button className='productbtn'>Подробнее</button>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img className='productimg' src="./images/product01.png" alt="product" />
                    <h4>Hi MO 5 LR5-72HBD</h4>
                    <button className='productbtn'>Подробнее</button>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img className='productimg' src="./images/product01.png" alt="product" />
                    <h4>Hi MO 5 LR5-72HBD</h4>
                    <button className='productbtn'>Подробнее</button>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img className='productimg' src="./images/product01.png" alt="product" />
                    <h4>Hi MO 5 LR5-72HBD</h4>
                    <button className='productbtn'>Подробнее</button>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img className='productimg' src="./images/product01.png" alt="product" />
                    <h4>Hi MO 5 LR5-72HBD</h4>
                    <button className='productbtn'>Подробнее</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product