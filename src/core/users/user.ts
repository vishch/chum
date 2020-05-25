import { BaseEntity } from "core/common/models";

export class User implements BaseEntity<string> {
  id: string;
  username: string;
}
