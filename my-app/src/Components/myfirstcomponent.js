import React from 'react';
import '../App.css';


class Button extends React.Component{

    render(){
        return (
            <button 
            onClick = {()=>this.props.onClickFunction(this.props.incrementValue)}>
                 + {this.props.incrementValue}
            </button>
        ); 
    }
}

    const Result = (props) => {

        return (
            <div>Points Selected: {props.counter}</div>
        );
    };

    class MyApp extends React.Component {

        state = { counter: 0 };

        incrementCounter = (incrementValue) => {
            this.setState((prevState) => ({
                counter: prevState.counter + incrementValue
            }));
        }

        render() {

            return (
                <div className="button-space">
                    <Button incrementValue={1} onClickFunction={this.incrementCounter} />
                    <Button incrementValue={5} onClickFunction={this.incrementCounter} />
                    <Button incrementValue={10} onClickFunction={this.incrementCounter} />
                    <Button incrementValue={100} onClickFunction={this.incrementCounter} />

                    <div className="button-space">
                        <Result counter={this.state.counter} />
                    </div>
                    
                </div>
            );
        }
    }

export default MyApp;
