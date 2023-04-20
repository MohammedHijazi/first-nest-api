import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateBamiaDto } from './dto/create-bamia.dto';
import { UpdateBamiaDto } from './dto/update-bamia.dto';

@Controller('bamias')
export class BamiasController {
  //get all bamias
  @Get()
  getBamias(@Query('type') type: string) {
    return [{ type }];
  }

  @Get(':id')
  getOneBamia(@Param('id') id: string) {
    return id;
  }

  @Post()
  createBamia(@Body() createBamiaDto: CreateBamiaDto) {
    return {
      name: createBamiaDto.name,
    };
  }

  @Put(':id')
  updateBamia(@Param('id') id: string, @Body() updateBamiaDto: UpdateBamiaDto) {
    return {
      id,
      name: updateBamiaDto.name,
    };
  }

  @Delete(':id')
  removeBamia(@Param('id') id: string) {
    return {};
  }
}
 