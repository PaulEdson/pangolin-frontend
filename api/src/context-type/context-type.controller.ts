import { Controller, Get, Param } from '@nestjs/common'
import { ContextTypeService } from './context-type.service'
import { ContextType } from './context-type'

@Controller('context-types')
export class ContextTypeController {
  constructor(private readonly contextTypeService: ContextTypeService) {}

  @Get()
  getAll(): Promise<ContextType[]> {
    return this.contextTypeService.getAll()
  }

  @Get(':id')
  get(@Param('id') id: number): Promise<ContextType> {
    return this.contextTypeService.get(id)
  }
}
