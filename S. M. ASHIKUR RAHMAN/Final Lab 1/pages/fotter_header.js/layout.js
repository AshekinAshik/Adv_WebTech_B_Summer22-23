import Content from "../nabvar";
import Fotter from "./fotter";
import Header from "./header";

export default function Layout(props,{children}) {
    return (
      <div>
       <head>
        <div>
            <title>page {props.page}</title>
        </div>
       </head>
       <Header></Header>
       <Content></Content>
       {children}
       <Fotter></Fotter>
      </div>
    )
  }