import React from 'react';
import {loadMenu} from './components/menu/menu';
import {init as initModal} from './components/image/modal';
import {loadTooltips} from './components/tooltips/tooltips';
import {handleQueryString, checkSessionStorageConfig} from './util/config';
import Rx from 'rxjs/Rx';

initModal();
handleQueryString(); //Check query string arguments and persist to sessionStorage
checkSessionStorageConfig(); //Check sessionStorage for known configurations and apply them

var presidium = {
    menu: {
        load: loadMenu,
    },
    tooltips: {
        load: loadTooltips,
    }
};

window.presidium = presidium;
window.events = new Rx.Subject();