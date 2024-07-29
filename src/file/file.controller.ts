import { Controller, Post, UseInterceptors, UploadedFile, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { FileService } from './file.service';
import { CreateFileDto } from './dto/create_file.dto';
import { FileResponseDto } from './dto/create_response.file..dto';

@ApiTags('file')
@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() createFileDto: CreateFileDto
  ): Promise<FileResponseDto> {
    return this.fileService.create(file, createFileDto);
  }
}
