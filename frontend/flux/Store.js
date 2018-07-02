import FluxDispatcher from './Dispatcher.js';
import MicroEvent from  './MicroEvent.js';

let Store = {
    customers: [],

    getStoreCustomers() {
        return this.customers
    }
};

// console.log('Store.customers = ',Store.customers)

MicroEvent.mixin( Store );


FluxDispatcher.register( function( action ) {
    switch(action.type) {
        case 'LOAD_CUSTOMERS_SUCCESS': {
            Store.customers = action.data;
            Store.trigger( 'change' );
            // console.log('Store customers = ',Store.customers);
            break;
        }

        default: {
            // console.log('No such handler');
        }
    }

    // return true; // Needed for Flux promise resolution
});


export default Store;
