import { Request, Response } from 'express';

import { CreateFlowsUseCase } from './CreateFlows.UseCase';

export class CreateFlowsController {
  constructor(private CreateFlowsUseCase: CreateFlowsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { data } = request.body;

    const result = await this.CreateFlowsUseCase.execute({ data });

    return response.status(201).json(result);
  }
}
