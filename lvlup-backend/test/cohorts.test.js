'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const supertest = require('supertest');
const knex = require('../knex');
const app = require('../app');


beforeEach((done) => {
  knex.migrate.latest().then(() => {
    done();
  }).catch((err) => {
    done(err);
  });
});

afterEach(done => {
  knex.migrate.rollback()
  .then(() => done())
  .catch((err) => {
    done(err);
  });
});

describe('GET /cohorts/', () => {
  it('should respond with all cohorts across all campuses', (done) => {
    supertest(app)
      .get('/cohorts/')
      .set('Accept', 'application/json')
      .expect((cohorts) => {
        delete cohorts.body.id;
        delete cohorts.body.created_at;
        delete cohorts.body.updated_at;
        delete cohorts.body.campus_id;
      })
      .expect(200, [
        {
          name: 'g42',
          type: 'WDI',
          q1_start_date: '2017-01-09',
          q2_start_date: '2017-02-21',
          q3_start_date: '2017-04-03',
          q4_start_date: '2017-05-15',
          graduation_date: '2017-06-23',
          campus_id: 1,
        }, {
          name: 'g52',
          type: 'WDI',
          q1_start_date: '2017-04-17',
          q2_start_date: '2017-5-29',
          q3_start_date: '2017-07-10',
          q4_start_date: '2017-08-21',
          graduation_date: '2017-09-29',
          campus_id: 1,
        },
      ],done);
  });
});

describe('POST /cohorts/', () => {
  it('allows authorized user to add a cohort in the database', (done) => {
    supertest(app)
      .post('/cohorts/')
      .set('Accept', 'application/json')
      .send({
        name: 'g53',
        type: 'WDI',
        q1_start_date: '2017-04-17',
        q2_start_date: '2017-5-29',
        q3_start_date: '2017-07-10',
        q4_start_date: '2017-08-21',
        graduation_date: '2017-09-29',
        campus_id: 6,
      })
      .expect((cohort) => {
        delete cohort.body.created_at;
        delete cohort.body.updated_at;
      })
      .expect(200, [
        {
          id: 3,
          name: 'g52',
          type: 'WDI',
          q1_start_date: '2017-04-17',
          q2_start_date: '2017-5-29',
          q3_start_date: '2017-07-10',
          q4_start_date: '2017-08-21',
          graduation_date: '2017-09-29',
          campus_id: 6,
        },
      ], done);
  });
  it('should respond with 400 when authorized user does not send complete information', (done) => {
    supertest(app)
      .post('/cohorts/')
      .set('Accept', 'application/json')
      .send({
        name: 'g53',
        type: 'WDI',
        q1_start_date: '2017-04-17',
        q2_start_date: '2017-5-29',
        q3_start_date: '2017-07-10',
        q4_start_date: '2017-08-21',
        campus: 'New York',
      })
      .expect((cohort) => {
        delete cohort.body.created_at;
        delete cohort.body.updated_at;
      })
      .expect(400, JSON.stringify({
        code: 400,
        message: 'Please enter all fields'
      }, done))
  });
});
