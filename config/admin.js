module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '105154a63dbaf3b58db513f908a538ac'),
  },
});
