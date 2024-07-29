import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create_file.dto';
import { FileResponseDto } from './dto/create_response.file..dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FileService {
    async create(
        file: Express.Multer.File,
        createFileDto: CreateFileDto
    ): Promise<FileResponseDto> {
        const fileResponseDto: FileResponseDto = {
            id: uuidv4(), 
            url: `uploads/${file.filename}`,
            mimetype: file.mimetype,
            size: file.size,
            carId: createFileDto.carId,
            createdAt: new Date(),
            lastEditedAt: new Date(),
        };
        return fileResponseDto;
    }
}
