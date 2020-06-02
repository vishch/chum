import { BaseEntity } from "./base-entity";
import { UpdatedTime } from "./updated-time";

export class Creator implements BaseEntity<string> {
  id: string;
  name: string;
  updatedTime: UpdatedTime;
}
