const TOOLBAR_BUTTON_TYPES = {
  COMMAND: 'command',
  SET_TOOL_ACTIVE: 'setToolActive',
  BUILT_IN: 'builtIn',
};

const definitions = [
  {
    id: 'closeHole',
    label: 'Close Hole',
    icon: 'sphere',
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'closeHole',
    commandOptions: { toolName: 'closeHole' },
  },
];

export default {
  definitions,
  defaultContext: 'ACTIVE_VIEWPORT::CORNERSTONE',
};
