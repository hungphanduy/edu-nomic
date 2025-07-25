import { Principal } from "@dfinity/principal";
import { Member } from "declarations/EduNomic_backend_dao/EduNomic_backend_dao.did";

export interface Profile {
  principal: Principal,
  member: Member,
}