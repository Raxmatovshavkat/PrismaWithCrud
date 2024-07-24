import { Controller, Post, UseInterceptors, UploadedFile, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileResponseDto } from './dto/create_file.dto'; // Import DTO

@Controller('files')
export class FileController {
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() createFileDto: FileResponseDto
  ) {
    // Handle file and DTO
  }
}
