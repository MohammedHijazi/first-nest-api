import { PartialType } from '@nestjs/mapped-types';
import { CreateBamiaDto } from './create-bamia.dto';

export class UpdateBamiaDto extends PartialType(CreateBamiaDto) {}
