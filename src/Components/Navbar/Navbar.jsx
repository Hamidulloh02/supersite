import React,{useState} from 'react'
import "./navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Navbar() {

  const [isMobile, setisMobile] = useState(false);
  const [isOpen, setisOpen] = useState(true);
  //stiky
  const [fix, setFix] = useState(false);
  //dropdown
  const [show1, setShow1] = useState(false);
  return (
    <div>
       <container>
        <div className='BigMenu'>
            <div>
                 <img src="./images/logo.png" alt="logo" />
            </div>
            <div className='menuCategory'>
             <ul>
                <li>О нас</li>
                <li>Решение</li>
                <li>Продукция</li>
                <li>Сервисный центр</li>
                <li>Наши работы</li>
                <li>Для инвесторов</li>
                <li>Контакты</li>
                <li><div className='flagCricle'><img src="./images/flaguzb.png" alt="flag" /></div></li>
                <li><div className='flagCricle'><img src="./images/flagru.png" alt="flag" /></div></li>
                <li><div className='flagCricle'><img src="./images/flageng.png" alt="flag" /></div></li>
             </ul>
            </div>
        </div>
        {/* <div className="MobileMenuAll">
          <div className="Mobilenav">
            <div className="mobilelogo">
                <img src="./images/logo.png" alt="" />
            </div>
            <div className="mobileoption">
                <MenuIcon />
            </div>
          </div>
        </div> */}
                        <div className='MobileMenuAll'>
                    <div className="Mobilenav">
                        <div className='MobileLogo'>
                      
                                <img src="/images/logo.png" alt="logo" />
                    
                        </div>
                        <div className='ToggleMenu'>
                            {
                                (isOpen === true) ? <div onClick={(() => { { setisOpen(false) } { setisMobile(true) } })}><MenuIcon className='icon_toggle me-3' /></div> : <div onClick={(() => { { setisOpen(true) } { setisMobile(false) } })}><CloseIcon className='text-danger font-weight-bold icon_toggle me-3' /></div>
                            }
                        </div>
                    </div>

                    {(isMobile) == true ?
                        <div className='MobileIptionMenu'>
                          <ul className='mobileul'>
                            <li className='mobileli'>О нас</li>
                            <li className='mobileli'>Решение</li>
                            <li className='mobileli'>Продукция</li>
                            <li className='mobileli'>Сервисный центр</li>
                            <li className='mobileli'>Наши работы</li>
                            <li className='mobileli'>Для инвесторов</li>
                            <li className=' mb-5'>
                              <div className="d-flex ">
                                <img className='mt-3 me-3' src="./images/flaguzb.png" alt="" />
                                <img className='mt-3 me-3' src="./images/flagru.png" alt="" />
                                <img className='mt-3 me-3' src="./images/flageng.png" alt="" />
                              </div>
                            </li>
                            <li className='mb-2'>
                               <p className='w-75'>г.Ташкент Чиланзарский район ул.44 д44</p>
                            </li>
                            <li>
                               <p>+998933245643</p>
                               <p>+998933245643</p>
                            </li>
                          </ul>
                        </div>
                        :
                        <div></div>
                    }
                </div>
       </container>
    </div>
  )
}

export default Navbar