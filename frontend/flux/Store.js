import FluxDispatcher from './Dispatcher.js';
import MicroEvent from '../../vendor/MicroEvent/index.js';

let Store = {
    customers: [],
};


MicroEvent.mixin( Store );


FluxDispatcher.register( function( action ) {
    switch(action.type) {
        case 'LOAD_CUSTOMERS_SUCCESS': {
            Store.customers = action.data;
            Store.trigger( 'change' );
            break;
        }

        default: {
            // console.log('No such handler');
        }
    }
});


export default Store;
