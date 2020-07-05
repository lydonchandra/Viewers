import toolbarModule from './toolbarModule';
import commandsModule from './commandsModule';

export default {
  /**
   * Only required property. Should be a unique value across all extensions.
   */
  id: 'ch.lydon.ohif.closehole',

  // Lifecyle
  preRegistration() {
    console.debug('preRegistration: ch.lydon.ohif.closehole');
  },
  // Modules
  getCommandsModule() {
    return commandsModule;
  },

  getToolbarModule() {
    return toolbarModule;
  },
  getPanelModule() { /* */ },
  getSopClassHandler() { /* */ },
  getViewportModule() { /* */ },
}
