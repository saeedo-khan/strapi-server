module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd9618ed2ac7c87abca11ac4a9f0970f6'),
  },
});
