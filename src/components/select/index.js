import AppSelect from './Select';

const SelectComponents = {
    AppSelect
};

const SelectPlugin = {
    install (Vue) {
        Object.keys(SelectComponents).forEach(name => {
            Vue.component(name, SelectComponents[name]);
        });
    }
};

export default SelectPlugin;
