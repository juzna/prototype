/** section: Ajax
 * Ajax
**/

var Ajax = {
  getTransport: function() {
    return Try.these(
      function() {return new XMLHttpRequest()},
      function() {return new ActiveXObject('Msxml2.XMLHTTP')},
      function() {return new ActiveXObject('Microsoft.XMLHTTP')}
    ) || false;
  },

  /**
   *  Ajax.activeRequestCount -> Number
   *
   *  Represents the number of active XHR requests triggered through
   *  [[Ajax.Request]], [[Ajax.Updater]], or [[Ajax.PeriodicalUpdater]].
  **/
  activeRequestCount: 0,

  /**
   * Default headers for requests (let application modify them)
   */
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-Prototype-Version': Prototype.Version,
    'Accept': 'text/javascript, text/html, application/xml, text/xml, */*'
  },

  /**
   * List of callback which are used to create misc headers
   */
  _headerCreators: [],

  /**
   * Ajax.addHeaderCreator( fn(request) -> {} )
   *
   * Add new header creator, which is caller for every new request to create additional headers
   */
  addHeaderCreator: function(cb) {
    Ajax._headerCreators.push(cb);
  },

  getHeaderCreators: function() {
    return Ajax._headerCreators;
  },

  /**
   * List of pre-processors which will be executed on received ajax responses. It may change them
   */
  _responsePreProcessors: [],

  addResponsePreProcessor: function(cb) {
    Ajax._responsePreProcessors.push(cb);
  }
};
