
// For board member positions and their names
export interface BoardMember {
  [position: string]: string | undefined;
}

// For semesters with their board members
export interface BoardMembers {
  [semester: string]: BoardMember | undefined;
}

// For events in a semester
export interface SemesterEvents {
  [semester: string]: string[] | undefined;
}

// The main Club interface
export interface Club {
  clubName: string;
  boardMembers?: BoardMembers;
  events?: SemesterEvents;
}

// Club type categories
export interface ClubType {
  id: string;
  name: string;
  data: Club[];
  color: string;
}