import Accordion from './Accordion';
import AccordionHeader from './AccordionHeader';
import AccordionBody from './AccordionBody';

const AccordionComponents = {
    Accordion,
    AccordionHeader,
    AccordionBody
};

const AccordionPlugin = {
    install (Vue) {
        Object.keys(AccordionComponents).forEach(name => {
            Vue.component(name, AccordionComponents[name]);
        });
    }
};

export default AccordionPlugin;
