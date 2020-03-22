import React from 'react';
import ReactDOM from 'react-dom';
import './index.styl';
import actionsCustomers from '../../flux/actions/customers.js';
import Store from '../../flux/Store.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: []
        }
    }

    loadCustomers() {
        actionsCustomers.getCustomers();
    }

    componentDidMount() {
        Store.bind( 'change', this.StoreChanged.bind(this) );
    }

    componentWillUnmount() {
        Store.unbind( 'change', this.StoreChanged.bind(this) );
    }

    StoreChanged() {
        this.setState({customers: Store.customers});
    }

    render() {
        return (
            <div className="App content">
                <div className=" t-center">
                    <h2 className="title">Node React Flux</h2>
                    <button onClick={ this.loadCustomers.bind(this) } className="button">Load customers</button>
                </div>
                <div className="t-center">
                    <ul className="list">
                        {this.state.customers.map(customer =>
                            <li key={customer.id} className="item">{customer.firstName} {customer.lastName}</li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);