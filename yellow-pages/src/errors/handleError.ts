import AppError from "./appError";

const handleAppErrorMiddeware = (error, req, res, next,) => {

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  return res.status(500).json({
    message: error.message,
  });
};

export default handleAppErrorMiddeware;
