import React from 'react'
import "./options.css"
function Options() {
  return (
    <div className='OptionFull '>
        <div className="bgcolor">
      <dic className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12  optionone">
                <div>
                <h4 className='ms-4'>Как мы работаем?</h4>
                <div className='optionsnum'>
                    <div className='num'>1</div>
                    <div>
                        <h6>Рассчитайте площадь</h6>
                        <p>Заполните форму обратной связи, чтобы наши специалисты могли с вами связаться</p>
                    </div>
                </div>
                <div className='optionsnum'>
                    <div className='num'>1</div>
                    <div>
                       <h6>Рассчитайте площадь</h6>
                        <p>Заполните форму обратной связи, чтобы наши специалисты могли с вами связаться</p>
                    </div>
                </div>
                <div className='optionsnum'>
                    <div className='num'>1</div>
                    <div>
                        <h6>Рассчитайте площадь</h6>
                        <p>Заполните форму обратной связи, чтобы наши специалисты могли с вами связаться</p>
                    </div>
                </div>    
                <div className='optionsnum'>
                    <div className='num'>1</div>
                    <div>
                        <h6>Рассчитайте площадь</h6>
                        <p>Заполните форму обратной связи, чтобы наши специалисты могли с вами связаться</p>
                    </div>
                </div>                 
                </div>

                
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 optiontwo ">
                  <div className=''>
                    <img className='imgopt1' src="./images/optionimg1.png" alt="opt1" />
                    <img className='imgopt2' src="./images/optionimg2.png" alt="opt2" />
                  </div>
            </div>
        </div>
      </dic>            
        </div>

    </div>
  )
}

export default Options