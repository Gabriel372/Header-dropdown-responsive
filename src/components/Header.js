import { useState } from "react"
import style from './Header.module.css'
import {RiTwitterXLine,} from 'react-icons/ri'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'

function Header() {
const [interrupter,setInt] = useState(false)

const dropDown = () => {
setInt(!interrupter) }

const Close = () => {
return setInt(false) }

return<div >
<header>
<button type="button" className={style.iconBurger} onClick={dropDown} >
<div className={style.line}></div>    
<div className={style.line}></div>    
<div className={style.line}></div>  
</button>
<div className={style.socialIcons}>    
<RiTwitterXLine/>
<AiFillFacebook/>
<AiOutlineInstagram/>
</div>
<div className={style.divInput}>
<input type="text" placeholder="Pesquisar"/>
<button className={style.btnBorder} ><AiOutlineSearch className={style.btnSearch}/>
</button>
</div>
</header>
<div className={`${interrupter ? style.dropDown : style.dropNone}`} onMouseLeave={Close}>
<div className={style.spaceDrop} onClick={Close}></div>
<div className={style.linkDown}>
<a>Noticias</a>
<a>Esporte</a>
<a>Clima</a>
<a>Auto</a>
<a>Finanças</a>
</div>
</div>
</div>
}

export default Header