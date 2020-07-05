const commandsModule = ({ servicesManager }) => {
  const actions = {
    closeHole: () => {
      alert('closeHole');
    },
  }
  const definitions = {
    closeHole: {
      commandFn: actions.closeHole,
      storeContexts: ['VIEWER'],
      options: {},
    },
  }
  return {
    actions,
    definitions,
    defaultContext: 'ACTIVE_VIEWPORT::CORNERSTONE',
  };
};

export default commandsModule;
