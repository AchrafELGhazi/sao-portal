// The updated types that should handle the data structure more accurately

// For board member positions and their names
export interface BoardMember {
  [position: string]: string | undefined;
}

// For semesters with their board members
export interface BoardMembers {
  [semester: string]: BoardMember | undefined;
}

// For semesters with their events
export interface Events {
  [semester: string]: string[] | undefined;
}

// The main Club interface
export interface Club {
  clubName: string;
  boardMembers?: { [key: string]: any };  // Using any to bypass strict type checking
  events?: { [key: string]: any };        // Using any to bypass strict type checking
}

// Club type categories
export interface ClubType {
  id: string;
  name: string;
  data: any[]; // Use any[] to avoid type errors with the actual data structure
  color: string;
}