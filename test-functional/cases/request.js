const axios = require('axios');
const { addContext } = require('../helpers');

describe('Request', () => {
  it('has request as context', function () {
    return axios.get('http://ip.jsontest.com')
      .then(res => {
        addContext(this, {
          title: 'HTTP Request',
          value: res.request._header
        });
        addContext(this, {
          title: 'HTTP Response',
          value: res.data
        });
      });
  });
});
