import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
class LifeCycleMethods extends Component {
  

    constructor(props){
        super(props);

        this.state = {
            message : 'Welcome to React'
        }
        console.log(`Class Component Constructor Called`);
        

    }
      //1.Initialization phase

      updateMessage = () =>{
        console.log(`Inside UpdateMessage method `);
        this.setState({message:'Welcome to Class Comp life Cycle'});
      }
      //2.Mouting Phase
      static getDerivedStateFromProps(props){
        console.log('inside getDerived State From Props')
   }

    render(){
        console.log('Class Component render Method Called');
        return(
            <>
            <h3>Class Component Life Cycle</h3>
            <p>State Message :{this.state.message}</p>
            <Button type="button" variant="success" onClick={this.updateMessage}>Update State</Button>            
            </>
        )
    }
    

        componentDidMount(){
        console.log('Component Did Mount Called');
    }
    //3.Updating Phase
    //1.getDerivedStateFromProps
      //2. shouldComponentUpdate
      //3. render
      //4. getSnapshotBeforeUpdate
      //5. componentDidUpdate

      shouldComponentUpdate(){

        console.log('Inside should Component Update')
        return true;
      }

      getSnapshotBeforeUpdate(){
        console.log('Inside get Snapshot Before Update')
        return null
      }

    componentDidUpdate(){
        console.log(`Component did update called`);
        return null;
    }
    //4.UnMouting Phase
    componentWillUnmount(){
        console.log(`Component unmount called`);
    }
}

export default LifeCycleMethods;