

export interface BoardMember {
  [position: string]: string | undefined;
}


export interface BoardMembers {
  [semester: string]: BoardMember | undefined;
}

export interface SemesterEvents {
  [semester: string]: string[] | undefined;
}

export interface Club {
  clubName: string;
  boardMembers?: BoardMembers;
  events?: SemesterEvents;
}

export interface ClubType {
  id: string;
  name: string;
  data: Club[];
  color: string;
}