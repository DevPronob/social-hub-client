export interface IUser  {
    _id?: string;
    name: string;
    role: string;
    email: string;
    password: string;
    status: string;
    passwordChangedAt?: Date;
    mobileNumber?: string;
    profilePhoto?: string;
    createdAt?: Date;
    updatedAt?: Date;
    posts?:string[];
    following:IUser;
    followers:IUser;
    subcription?:{
      subscriptionId ?:string;
      stripeCustomerId ?:string;
      subscriptionStatus ?:string;
      subscriptionEnd:Date |undefined;
    }

}


export interface IPost {
    user: IUser; // User who created the post
    title: string; // Title of the post
    content: string; // Content of the post
    media?: string[]; // Optional array of media URLs
    likes?: number; // Optional number of likes
    likedBy?: IUser[]; // Array of User ObjectIds who liked the post
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    comments?: any; // Array of Comment ObjectIds
    category: ICategory |string; // Reference to a Category ObjectId
    isReported: boolean; // Whether the post is reported
    reportCount: number; // Number of reports on the post
}

export interface ICategory {
    name: string; // Name of the category
    description: string; // Description of the category
    posts: IPost[]; // Array of Post ObjectIds
}

export interface IComment {
    user: IUser; // User who created the comment
    post: IPost; // Post on which the comment is made
    content: string; // Content of the comment
    likes?: number; // Optional number of likes
    likedBy?: IUser[]; // Array of User ObjectIds who liked the comment
    isReported: boolean; // Whether the comment is reported
    reportCount: number; // Number of reports on the comment
}