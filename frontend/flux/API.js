import Config from '../../etc/config.json';

export default {
    loadCustomers() {
         let customers =  fetch(Config.backend.url)
                 .then(res => {
                     return res.json();
                 });
         return customers;
    }
}