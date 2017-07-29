import jwt from 'jsonwebtoken';

export default function({ JWT_SECRET }, deviceId, serialKey, userId) {

  return jwt.sign({ deviceId, serialKey, userId }, JWT_SECRET);

}