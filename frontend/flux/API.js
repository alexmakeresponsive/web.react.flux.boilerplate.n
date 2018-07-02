import Config from '../../etc/config.json';

export default {
    loadCustomers() {
         let customers =  fetch(Config.backend.url)
                 .then(res => {
                     // console.log('res.json() = ', res.json());
                     return res.json();
                 });

        //  console.log('loadCustomers = ', customers);

         return customers;

    }
}