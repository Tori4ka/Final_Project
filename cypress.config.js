
const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      on('task', { downloadFile });
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
        listFiles(dir) {
          const fs = require('fs');
          const path = require('path');
          const files = fs.readdirSync(dir);
          return files;
        },
      });
    },
  },
});
