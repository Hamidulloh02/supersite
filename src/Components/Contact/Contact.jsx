import React from 'react'
import "./contact.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
            <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23970.865031985482!2d69.23254532805814!3d41.322825224493265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b72efbb0c17%3A0xa52a74c6aab1b415!2zMzAg0L_RgNC-0YHQv9C10LrRgiDQndCw0LLQvtC4LCDQotCw0YjQutC10L3Rgiwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1669964958749!5m2!1sru!2s"></iframe>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
            <div className='contactfor container'>
              <h4>Бесплатная консультация</h4>
              <p>Оставьте свои контакты чтобы наши специалисты связались с вами</p>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 2, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                </div>
                <div>
                  <TextField
                    id="standard-multiline-flexible"
                    label="Антон"
                    multiline
                    maxRows={12}
                    variant="standard"
                  />
                  <TextField
                    id="standard-multiline-flexible"
                    label="Ваш телефон номер"
                    multiline
                    maxRows={12}
                    variant="standard"
                  />
                  <TextField
                    id="standard-multiline-flexible"
                    label="Оставьте сообщение"
                    multiline
                    maxRows={12}
                    variant="standard"
                  />
                </div>
              </Box>
              <a href="" className='ms-3'>Отправить</a>
              <div>
                <div className="row">
                  <div className="col-6">
                     <div className="telnumber ms-3">
                      <div className='iconsclass'><CallIcon/></div>
                      <div>
                      <div className='number'>+998-71-234-31-35 </div>
                      <div className='number'>+998-71-867-87-45</div>
                      </div>
                     </div>
                  </div>
                  <div className="col-6">
                  <div className="telnumber">
                      <div className='iconsclass'><PlaceIcon/></div>
                      <div>
                      <div className='number'>100788, г. Ташкент</div>
                      <div className='number'> ул. Ш. Тимура, 91А</div>
                      </div>
                     </div>
                  </div>
                  <div className="col-6">
                  <div className="telnumber  ms-3">
                      <div className='iconsclass'><EmailIcon/></div>
                      <div>
                      <div className='number'>info@site.uz</div>
                      </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact