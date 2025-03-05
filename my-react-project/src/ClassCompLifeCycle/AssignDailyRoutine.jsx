import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
class DailyRoutine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: 'Waking up',
    };
    console.log('Constructor: Getting ready for the day');
  }

  componentDidMount() {
    console.log('componentDidMount: Starting the day’s activities');
    // Simulate a state change
    this.setState({ activity: 'Waking Up' });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activity !== this.state.activity) {
      console.log(`componentDidUpdate: Activity changed from ${prevState.activity} to ${this.state.activity}`);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Ending the day, going to sleep');
    // Clean up operations if needed
  }

  changeActivity = (newActivity) => {
    this.setState({ activity: newActivity });
  };

  render() {
    return (
      <div>
        <h1 >Daily Routine</h1>
        <h3> Activity: {this.state.activity}</h3>
       
        <Button onClick={() => this.changeActivity('Working')} class="button">Update Activity</Button>
        
      </div>
    );
  }
}

export default DailyRoutine;
