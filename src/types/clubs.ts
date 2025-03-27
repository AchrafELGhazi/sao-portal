
export interface BoardMember {
  [position: string]: string | undefined;
}

export interface BoardMembers {
  [semester: string]: BoardMember;
}

export interface Events {
  [semester: string]: string[];
}

export interface Club {
  clubName: string;
  boardMembers?: BoardMembers;
  events?: Events;
}

export interface ClubType {
  id: string;
  name: string;
  data: Club[];
  color: string;
}