module.exports = {
  // if set baseURL: "https://test.com" should use visit("/") in beforeEach function request 
  // baseURL = "https://test.com"
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  reporter: "mochawesome",

  reporterOptions:{
    reporterDir:"cypress/report/mochawesome-report",
    overwrite:true,
    html:true,
    json:false,
    timestamp: "mmddyyyy_HHMMss"
  }
};
