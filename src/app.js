import _ from "lodash";
require("es6-promise").polyfill();
import 'nodelist-foreach-polyfill';
import tabs from './components/tabs';
import modal from './components/modal';
import data from './components/data';
import cards from './components/cards';
import form from './components/form';
import slider from './components/slider';
import loader from './components/loader';
import accordion from './components/accordion';
import {openModal} from './components/modal';

window.addEventListener("DOMContentLoaded", () => {
    const modalTimer = setTimeout(() => openModal('.modal', modalTimer), 5000);

    tabs();
    modal('[data-modal]', '.modal', modalTimer);
    data();
    cards();
    form(modalTimer);
    slider();
    loader();
    accordion();
});

