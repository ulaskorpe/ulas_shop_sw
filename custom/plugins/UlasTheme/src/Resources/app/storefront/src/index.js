import ColorPickerPlugin from 'simple-color-picker';

const PluginManager = window.PluginManager;
PluginManager.register('ColorPickerPlugin',ColorPickerPlugin,'[data-colorpicker-plugin]');