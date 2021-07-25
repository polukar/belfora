
import lazyLoadImg from 'lazyload';
import tooltip from 'tooltip';
import counter from 'counter';
import removeCart from 'remove-cart';
import basket from 'basket';
import search from 'search';
import like from 'like';
import cart from 'cart';
import sliders from 'sliders';
import accardeon from 'accardeon';
import mobileBar from 'mobile-bar';
import filter from 'filter';


let app = {
    init() {
        lazyLoadImg.init();
        tooltip.init();
        counter.init();
        removeCart.init();
        search.init();
        like.init();
        cart.init();
        sliders.init();
        accardeon.init();
        mobileBar.init();
        basket.init();
        filter.init();
    }
};
app.init();