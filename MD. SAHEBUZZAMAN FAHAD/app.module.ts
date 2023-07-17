import { Module } from '@nestjs/common';
import { AdminControler } from './admin/admin.controler';
import { AdminService } from './admin/admin.service';


@Module({
  imports: [],
  controllers: [AdminControler],
  providers: [AdminService],
})
export class AppModule {}
