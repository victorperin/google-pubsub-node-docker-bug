require('chai').should();



it('should continue executing after @google-cloud/common call', () => {
  let executed = false;
  const PubSub = require('@google-cloud/common');
  executed = true;
  executed.should.be.true;
});

it('should continue executing after arrify call', () => {
  let executed = false;
  const PubSub = require('arrify');
  executed = true;
  executed.should.be.true;
});

it('should continue executing after async-each call', () => {
  let executed = false;
  const PubSub = require('async-each');
  executed = true;
  executed.should.be.true;
});

it('should continue executing after extend call', () => {
  let executed = false;
  const PubSub = require('extend');
  executed = true;
  executed.should.be.true;
});

it('should continue executing after google-auto-auth call', () => {
  let executed = false;
  const PubSub = require('google-auto-auth');
  executed = true;
  executed.should.be.true;
});

it('should continue executing after google-gax call', () => {
  let executed = false;
  const PubSub = require('google-gax');
  executed = true;
  executed.should.be.true;
});

it('should continue executing after google-proto-files call', () => {
  let executed = false;
  const PubSub = require('google-proto-files');
  executed = true;
  executed.should.be.true;
});

it('should continue executing after is call', () => {
  let executed = false;
  const PubSub = require('is');
  executed = true;
  executed.should.be.true;
});

it('should continue executing after lodash.snakecase call', () => {
  let executed = false;
  const PubSub = require('lodash.snakecase');
  executed = true;
  executed.should.be.true;
});

it('should continue executing after uuid call', () => {
  let executed = false;
  const PubSub = require('uuid');
  executed = true;
  executed.should.be.true;
});

it('should continue executing after @google-cloud/common-grpc call', () => {
  let executed = false;
  const PubSub = require('@google-cloud/common-grpc');
  executed = true;
  executed.should.be.true;
});

it('should continue executing after pubsub call', () => {
  let executed = false;

  const PubSub = require('@google-cloud/pubsub');

  executed = true;

  executed.should.be.true;
});
