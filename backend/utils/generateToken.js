import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, 'abc123', { expiresIn: '30d' });
};

// use process.env.JWT_SECRET for 'abc123' secret

export default generateToken;
