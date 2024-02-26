import { Listing, Reservation, User } from "@prisma/client";

export type SafeListing = Omit<Listing,"createdAt"> & {
    createdAt:string;
}


export type SafeUser = Omit<User,"createdAt" | "updatedAt" | "emailVerified"> & {
    createdAt:string;
    updatedAt:string;
    emailVerified:string|null;
} 

export type SafeReservation = Omit<
  Reservation, 
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};


// The whole reason for this file is to avoid having console issues while running.
// User object contains properties with DateTime and those cause this issue.
// So in order, to avoid it we change User to SafeUser by cloning it and changing type of 3 properties.