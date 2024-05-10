import Plugin from 'src/plugin-system/plugin.class';

 import ColorPicker from '../node_modules/simple-color-picker';
export default class ColorPickerPlugin extends Plugin   {
    init(){
        const colorPicker = new ColorPicker();
         colorPicker.appendTo(this.el);
    }

}

