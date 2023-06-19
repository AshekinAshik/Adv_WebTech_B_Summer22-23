import { Module } from "@nestjs/common";
import { AdminControler } from "./admin.controler";
import { AdminService } from "./admin.service";

@Module({
    imports:[],
    providers:[AdminControler],
    controllers:[AdminService]
})

export class AdminData {}
