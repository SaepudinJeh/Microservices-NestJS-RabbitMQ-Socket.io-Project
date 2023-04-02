import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { CreateRoomRequestDto } from '../dto/createRoomRequest.dto';
import { SetStatusRoomRequestDto } from '../dto/setStatusRequest.dto';
import { UpdateRoomRequestDto } from '../dto/updateRoomRequest.dto';
import { MessagesService } from '../services/messages-service.service';

@Controller('api/v1')
@ApiTags('message specs')
export class MessagesServiceController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post('create-room')
  @ApiOperation({
    summary: 'Create Room',
  })
  @ApiResponse({ status: HttpStatus.CREATED })
  async createRoom(
    @Body() requestDto: CreateRoomRequestDto,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response<any, Record<string, any>>> {
    const result = await this.messagesService.createRoom(requestDto);

    return res.status(201).json({
      statusCode: 201,
      data: result,
    });
  }

  @Post('update-room')
  @ApiOperation({
    summary: 'Update Room',
  })
  @ApiResponse({ status: HttpStatus.OK })
  async updateRoom(
    @Body() requestDto: UpdateRoomRequestDto,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response<any, Record<string, any>>> {
    const result = await this.messagesService.updateRoom(requestDto);
    console.log('update', result);

    return res.status(200).json({
      statusCode: 200,
      data: result,
    });
  }

  @Post('rooms')
  @ApiOperation({
    summary: 'Find Rooms',
  })
  @ApiResponse({ status: HttpStatus.OK })
  async findRooms(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response<any, Record<string, any>>> {
    const result = await this.messagesService.findAllRooms();

    return res.status(200).json({
      statusCode: 200,
      data: result,
    });
  }

  @Post('status-room')
  @ApiOperation({
    summary: 'Delete / set status Room',
  })
  @ApiResponse({ status: HttpStatus.OK })
  async setStatusRoom(
    @Body() setStatusRequest: SetStatusRoomRequestDto,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response<any, Record<string, any>>> {
    const result = await this.messagesService.setStatusRoom(setStatusRequest);

    return res.status(200).json({
      statusCode: 200,
      data: result,
    });
  }
}
