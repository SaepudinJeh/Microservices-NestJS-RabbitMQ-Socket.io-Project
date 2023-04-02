import { Injectable } from '@nestjs/common';
import { CreateRoomRequestDto } from '../dto/createRoomRequest.dto';
import { SetStatusRoomRequestDto } from '../dto/setStatusRequest.dto';
import { UpdateRoomRequestDto } from '../dto/updateRoomRequest.dto';
import { MessageRepository } from '../repositories/message.repository';
import { Room } from '../schemas/room.schema';

@Injectable()
export class MessagesService {
  constructor(private readonly messageRepository: MessageRepository) {}

  async createRoom(
    createRoomRequestDto: CreateRoomRequestDto,
  ): Promise<Room | null> {
    return await this.messageRepository.create(createRoomRequestDto);
  }

  async updateRoom(
    updateRoomRequestDto: UpdateRoomRequestDto,
  ): Promise<Room | null> {
    const { _id, ...payload } = updateRoomRequestDto;

    return await this.messageRepository.findOneAndUpdate(
      { _id },
      { $set: payload },
    );
  }

  async findAllRooms(): Promise<Room[]> {
    return await this.messageRepository.find({ isStatus: true });
  }

  async setStatusRoom(
    setStatus: SetStatusRoomRequestDto,
  ): Promise<Room | null> {
    const { isStatus, _id } = setStatus;
    return await this.messageRepository.findOneAndUpdate(
      { _id },
      { $set: { isStatus } },
    );
  }
}
