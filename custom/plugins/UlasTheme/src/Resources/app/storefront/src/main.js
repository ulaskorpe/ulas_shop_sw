//this should be your js
import ColorPickerPlugin from "./colorpicker";
 

const PluginManager = window.PluginManager;

PluginManager.register('ColorPickerPlugin',ColorPickerPlugin, '[data-colorpicker-plugin]');
  
 //let cp =  new ColorPickerPlugin;

 

 /*
 
 const colorPickerDiv = document.getElementById('colorPicker');
    // Initialize the color picker plugin
    cp.create({
        el: colorPickerDiv,
        theme: 'classic', // Change the theme as needed
        default: '#000000', // Set the default color
        components: {
            // Define which components are visible
            preview: true,
            opacity: true,
            hue: true,
            interaction: {
                hex: true,
                rgba: true,
                hsva: true,
                input: true,
                clear: true,
                save: true
            }
        }
    });*/
