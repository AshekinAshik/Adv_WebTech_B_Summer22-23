import MyFooter from './footer'
import MyHeader from './header'
import Header from './header'

export default function Layout ({children}, props) {
    return (
        <>
            <MyHeader title={props.title}/>
            <br></br>

            {children}
            
            <br></br><br></br><br></br><br></br>
            <MyFooter/>
        </>
    )
}