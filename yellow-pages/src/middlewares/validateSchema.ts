import { AnySchema } from "yup";


const validateSchemaMiddleware =
  (schema: AnySchema) =>
  async (req, res, next) => {
    try {
      const validated = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
      req.body = validated;
      return next();
    } catch (err) { return res.status(409).json({ error: err.errors }); }
  };


export default validateSchemaMiddleware;
