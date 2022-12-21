import { ReadOnlyCatDto } from './dto/cat.dto';
import { SuccessInterceptor } from './../success/success.interceptor';
import { PositiveIntPipe } from './../positive-int/positive-int.pipe';
import { HttpExceptionFilter } from './../http-exception.filter';
import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  HttpException,
  UseFilters,
  Param,
  ParseIntPipe,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiOperation({ summary: '현재 고양이 가져오기' })
  @Get()
  getCurrentCat() {}

  @ApiResponse({
    status: 500,
    description: 'Server Error...',
  })
  @ApiResponse({
    status: 200,
    description: '성공!',
    type: ReadOnlyCatDto,
  })
  @ApiOperation({ summary: '회원가입' })
  @Post()
  async signUp(@Body() body: CatRequestDto) {
    console.log(body);
    return await this.catsService.signUp(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn() {}

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut() {}

  @ApiOperation({ summary: '고양이 이미지 업로드' })
  @Post('upload/cats')
  uploadCatImg() {}
}
