
import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state = ({actualpage:0,option:[0,1,2]})
  }
  changePage(selectedPage){
    this.setState({actualpage:selectedPage})
  }
  render(){
    const activePage = this.state.actualpage
 
    let pageInformation;

    switch(activePage)
    {
    case 0:
    pageInformation = "React · Declarative. React makes it painless to create interactive UIs. · Component-Based. Build encapsulated components that manage their own state, then compose"
    break
    case 1:
    pageInformation = "What It's Used For: VueJS is primarily used to build web interfaces and one-page applications. In saying that, it can also be applied to both desktop and mobile app development thanks to the HTML extensions and JS base working in tandem with an Electron framework –"
    break
    default:
    pageInformation = "What is Angular?link · A component-based framework for building scalable web applications · A collection of well-integrated libraries that cover a wide variety of ."
  }
  Math.floor(Math.random() * 3);


    return(
      <>
      <div>
        <button onClick={()=>this.changePage(0)}>option 0</button>
        <button onClick={()=>this.changePage(1)}>option 1</button>
        <button onClick={()=>this.changePage(2)}>option 2</button>
      </div>
      {pageInformation}
      </>
    )
  }
}

export default App;
