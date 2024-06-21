import { Request, Response } from 'express';

import { GetComponentsAcceptUseCase } from './GetComponentsAccept.UseCase';

export class GetComponentsAcceptController {
  constructor(private GetComponentsAcceptUseCase: GetComponentsAcceptUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const result = await this.GetComponentsAcceptUseCase.execute();

    return response.status(200).json(result);
  }
}
