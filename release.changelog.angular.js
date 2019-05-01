'use strict'

module.exports = (() => {
  return Promise.resolve(require('conventional-changelog-angular'))
    .then((config) => {
      const bkTransform = config.writerOpts.transform;
      config.writerOpts.transform = (commit, context) => {
        commit.notes.push({ title: '' });
        const ret = bkTransform(commit, context);
        if (commit.type === `chore`) {
          commit.type = `Chore`
        }
        commit.notes.pop();
        return ret;
      };
      return config;
    });
})();
