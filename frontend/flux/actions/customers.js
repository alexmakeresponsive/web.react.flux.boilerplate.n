import FluxDispatcher from '../Dispatcher.js';

import API from '../API.js';


let Actions = {
    getCustomers() {
        FluxDispatcher.dispatch({
            type: 'LOAD_CUSTOMERS_REQUEST'
        });

        API.loadCustomers()
            .then(( customers ) =>
                FluxDispatcher.dispatch({
                    type: 'LOAD_CUSTOMERS_SUCCESS',
                    data: customers
                })
            )
            .catch(err =>
                FluxDispatcher.dispatch({
                    type: 'LOAD_CUSTOMERS_FAIL',
                    data: null,
                    error: err
                })
            );
    }
};

export default Actions;