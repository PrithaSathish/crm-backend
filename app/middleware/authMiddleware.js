import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';

export const protect = async (req, res, next) => {
  let token;
  const auth = req.headers.authorization;
  if (auth && auth.startsWith('Bearer ')) token = auth.split(' ')[1];

  if (!token) return res.status(401).json({ success:false, code:401, message:'Not authorized, token missing', errors: [] });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(401).json({ success:false, code:401, message:'Not authorized, user not found', errors: [] });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ success:false, code:401, message:'Not authorized, token failed', errors: [] });
  }
};
