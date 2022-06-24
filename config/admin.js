module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'zUrBMno4oEiSanHg2FEan5EYoXmQuicts0zPApuwOg4='),
  },
});
