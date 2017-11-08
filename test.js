require('chai').should();

it('should continue executing after pubsub call', () => {
  let executed = false;

  const PubSub = require('@google-cloud/pubsub');

  executed = true;

  executed.should.be.true;
});
