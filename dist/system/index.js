'use strict';

System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      function configure(config) {
        config.globalResources('./pager');
      }

      _export('configure', configure);
    }
  };
});