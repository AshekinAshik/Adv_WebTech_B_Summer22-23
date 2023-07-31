import MyFooter from './footer'
import MyHeader from './header'
import Header from './header'

export default function Layout (props) {
    return (
        <>
            <MyHeader title={props.title}/>
            
            {/* <MyFooter></MyFooter> */}
        </>
    )
}