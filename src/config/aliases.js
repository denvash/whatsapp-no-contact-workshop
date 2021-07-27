const aliases = (prefix = `src`) => ({
  '@config': `${prefix}/config`,
  '@hooks': `${prefix}/hooks`,
  '@styles': `${prefix}/styles`,
  '@utils': `${prefix}/utils`,
  '@components': `${prefix}/components`,
  '@constants': `${prefix}/constants`,
  '$types/*': `${prefix}/types/*`,
});

module.exports = aliases;
