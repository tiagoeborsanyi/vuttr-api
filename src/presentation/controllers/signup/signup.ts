import { HttpRequest, HttpResponse, Controller, EmailValidator } from './signup-protocols'
import { MissingParamError, InvalidParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    const { email, password, passwordConfirmation } = httpRequest.body
    if (password !== passwordConfirmation) {
      return badRequest(new InvalidParamError('passwordConfirmation'))
    }
    const isValid = this.emailValidator.isValid(email)
    if (!isValid) {
      return badRequest(new InvalidParamError('email'))
    }
  }
}
