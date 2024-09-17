import { Container } from "../../UI"
import { navBar } from "../../../common/constans"
import classes from './Footer.module.scss'
import { Link } from "react-router-dom"



const contactArr=[
    {
        title:'email',
        value:'testing@gmail.com'
    },
    {
        title:'phone',
        value:'+996 555 55-55-55'
    },
    {
        title:'address',
        value:'Booblik'
    },

]



export const Footer =() => {




    return(
        <div className={classes.wrapper}>
            <Container>
                <div className={classes.content}>
                    <div>
                    <div className={classes.navbar}>
                    {navBar.map((navEl, i) => (
                            <Link to={navEl.url} key={i}>{navEl.title}</Link>
                ))}
                    </div>
                    <div className={classes.navbar}>
                        {contactArr.map((item,i) => (
                            <p key={i}> {item.title} : {item.value}</p>
                        ))}
                    </div>
                    </div>
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10197003.915269101!2d47.580443999999964!3d51.39381350000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7df2addcdcb%3A0xa8f28349aa3fa886!2z0JHRg9Cx0LvQuNC6!5e0!3m2!1sru!2skg!4v1719410102464!5m2!1sru!2skg" 
                    width="250" 
                    height="175" 
                    style={{border:0, borderRadius: '8px'}} 
                    allowFullScreen={undefined} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </Container>
        </div>
    )
}