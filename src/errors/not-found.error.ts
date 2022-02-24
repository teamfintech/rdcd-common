import CustomError from "./custom.error";

export class NotFoundError extends CustomError {
  statusCode = 404;
  constructor(message?: string) {
    super(message ? message : "Not Found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message ? this.message : "not found",
      },
    ];
  }
}
