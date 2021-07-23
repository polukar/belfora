
import tooltip from 'tooltip';
import counter from 'counter';
import removeCart from 'remove-cart';
import basket from 'basket';


let app = {
    init() {
        tooltip.init();
        counter.init();
        removeCart.init();
        basket.init();
    }
};
app.init();