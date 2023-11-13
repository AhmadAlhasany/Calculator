import React from 'react'

function Header(props) {
  return (
    <div className='hwr rf'>
        <div className='logo'>
            calc
        </div>
        <div className='thwr rf'>
            <div className='theme rf'>
                <p>THEME</p>
            </div>
            <div className='cf'>
                <div className='nums rf'>
                    <div> 1 </div>
                    <div> 2 </div>
                    <div> 3 </div>
                </div>
                <div className='thb rf'>
                    <div className={`fth rb ${props.theme === 1 ? 'sh' : ''}`} onClick={() => {props.setTheme(1)}}></div>
                    <div className={`sth ob ${props.theme === 2 ? 'sh' : ''}`} onClick={() => {props.setTheme(2)}}></div>
                    <div className={`tth bb ${props.theme === 3 ? 'sh' : ''}`} onClick ={() => {props.setTheme(3)}}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header