import statusCode from "../utils/statusCode.js";
export const PostTask = (req, res, next) => {
  const { titulo, descricao } = req.body;
  if (!titulo || !descricao || titulo.length <= 4 || descricao.length <= 4) {
    return res.status(statusCode.BAD_REQUEST).json({ message: 'Invalid data' });
  }
  next();
};


export const PutTask = (req, res, next) => {
  const { titulo, descricao, status } = req.body;
  const { id } = req.params;
  const idNumber = Number(id);
  if (!titulo || !status || !descricao || titulo.length <= 4 || descricao.length <= 4 || status.length <= 4) {
    return res.status(statusCode.BAD_REQUEST).json({ message: 'Invalid data' });
  }
  if (!idNumber) {
    return res.status(statusCode.BAD_REQUEST).json({ message: 'Invalid data' });
  }
  next();
};

export const TaskId = (req, res, next) => {
  const { id } = req.params;
  const idNumber = Number(id);
  if (!idNumber) {
    return res.status(statusCode.BAD_REQUEST).json({ message: 'Invalid data' });
  }
  next();
};